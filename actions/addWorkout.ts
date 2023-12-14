'use server';

import {
  covertToUpperCaseArrObj,
  getWorkoutDateIdentifier,
  splitBlocks,
} from '@/app/utils/utils';
import { BlockForm, CreateWorkoutForm } from '@/types/types';
import { DatabaseSchema } from '@/xata/xata';
import { TransactionOperation } from '@xata.io/client';
import { revalidatePath } from 'next/cache';
import { xata } from '@/lib/xataDB';

export const addWorkout = async (data: CreateWorkoutForm) => {
  const { date, program, blocks } = data;

  const keysToConvert: (keyof BlockForm)[] = ['title', 'duration'];

  const convertedBlocks = covertToUpperCaseArrObj(blocks, keysToConvert);

  const dateDB = getWorkoutDateIdentifier(date);

  const { newBlocks, existingBlocks } = splitBlocks(convertedBlocks);

  try {
    const oldWorkout = await xata.db.Workout.filter({
      $all: { date: dateDB, 'program.id': program },
    }).getFirst();

    if (!oldWorkout) {
      // TODO: all inside a transaction
      const newWorkout = await xata.db.Workout.create({
        date: dateDB,
        program,
      });

      await xata.db.Block.create(
        convertedBlocks.map(({ title, duration, description, category }) => ({
          title,
          duration,
          category,
          description,
          workout: newWorkout.id,
        })),
      );
    } else {
      // TODO: all inside a transaction
      const oldBlocks = await xata.db.Block.filter({
        'workout.id': oldWorkout.id,
      }).getAll();

      // If there the user sent no block, it means workout should be deleted.
      if (!convertedBlocks.length) {
        await xata.db.Workout.delete(oldWorkout.id);
        await xata.db.Block.delete(oldBlocks.map(({ id }) => id));
      } else {
        // TODO: use upsert? with transaction
        // add new blocks to existing wod
        if (newBlocks.length) {
          await xata.db.Block.create(
            newBlocks.map(({ title, duration, description, category }) => ({
              title,
              duration,
              description,
              category,
              workout: oldWorkout.id,
            })),
          );
        }

        // update blocks to existing wod
        if (existingBlocks.length) {
          const blocksUpdateTransaction: TransactionOperation<
            DatabaseSchema,
            keyof DatabaseSchema
          >[] = existingBlocks.map(
            ({ id, title, description, category, duration }) => ({
              update: {
                id: id!,
                table: 'Block',
                fields: {
                  title,
                  duration,
                  description,
                  category,
                },
              },
            }),
          );

          await xata.transactions.run(blocksUpdateTransaction);
        }

        // delete blocks to existing wod
        const updateBlocksId = existingBlocks.map(({ id }) => id);
        const dbBlocksId = oldBlocks.map(({ id }) => id);
        const deleteBlocksIds = dbBlocksId.filter(
          (id) => !updateBlocksId.includes(id),
        );

        if (deleteBlocksIds.length) {
          await xata.db.Block.delete(deleteBlocksIds);
        }
      }
    }
    revalidatePath('/');
  } catch (e) {
    console.error(e);
    return { success: false, message: 'Something went wrong!' };
  }

  return { success: true, message: 'Workout added successfully.' };
};
