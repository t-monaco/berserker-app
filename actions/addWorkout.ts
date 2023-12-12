'use server';

import {
  covertToUpperCaseArrObj,
  getWorkoutDateIdentifier,
  splitBlocks,
} from '@/app/utils/utils';
import { CreateWorkoutForm } from '@/types/types';
import { xata } from '@/xata/xata';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const addWorkout = async (data: CreateWorkoutForm) => {
  const { date, programId, blocks } = data;

  const keysToConvert: (keyof Prisma.BlockCreateManyInput)[] = [
    'title',
    'duration',
  ];

  const convertedBlocks = covertToUpperCaseArrObj(blocks, keysToConvert);

  const dateDB = getWorkoutDateIdentifier(date);

  const { newBlocks, existingBlocks } = splitBlocks(blocks);

  try {
    const oldWorkout = await xata.db.Workout.filter({
      $all: { date: dateDB, 'program.id': programId },
    }).getFirst();

    if (!oldWorkout) {
      // TODO: all inside a transaction
      const newWorkout = await xata.db.Workout.create({
        date: dateDB,
        program: programId,
      });

      await xata.db.Block.create(
        convertedBlocks.map(({ title, duration, description, categoryId }) => ({
          title,
          duration,
          category: categoryId,
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
            newBlocks.map(({ title, duration, description, categoryId }) => ({
              title,
              duration,
              description,
              category: categoryId,
              workout: oldWorkout.id,
            })),
          );
        }

        // update blocks to existing wod
        if (existingBlocks.length) {
          await xata.transactions.run(
            existingBlocks.map(
              ({ id, title, description, categoryId, duration }) => ({
                update: {
                  id,
                  table: 'Block',
                  fields: {
                    title,
                    duration,
                    description,
                    category: categoryId,
                  },
                },
              }),
            ),
          );
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
