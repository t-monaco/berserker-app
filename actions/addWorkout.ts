'use server';

import {
  covertToUpperCaseArrObj,
  getWorkoutDateIdentifier,
  splitBlocks,
} from '@/app/utils/utils';
import prisma from '@/lib/prisma';
import { CreateWorkoutForm } from '@/types/types';
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
    // * Replace this for a create an if null create?
    const oldWorkout = await prisma.workout.findUnique({
      where: {
        workoutIdentifier: {
          date: dateDB,
          programId,
        },
      },
      include: {
        blocks: true,
      },
    });

    if (!oldWorkout) {
      await prisma.workout.create({
        data: {
          date: dateDB,
          programId,
          blocks: {
            create: convertedBlocks.map(({ id, workoutId, ...data }) => ({
              ...data,
            })),
          },
        },
        include: { blocks: true },
      });
    } else {
      // If there the user sent no block, it means workout should be deleted.
      if (!convertedBlocks.length) {
        await prisma.workout.delete({
          where: { id: oldWorkout.id },
        });
      } else {
        // add new blocks to existing wod
        if (newBlocks.length) {
          await prisma.block.createMany({
            data: newBlocks.map((b) => ({ ...b, workoutId: oldWorkout.id })),
          });
        }

        // update blocks to existing wod
        if (existingBlocks.length) {
          await prisma.$transaction(
            existingBlocks.map((b) => {
              const { workoutId, id, ...data } = b;
              return prisma.block.update({
                where: { id: b.id },
                data: { ...data },
              });
            }),
          );
        }

        // delete blocks to existing wod
        const updateBlocksId = existingBlocks.map((b) => b?.id);
        const dbBlocksId = oldWorkout.blocks.map((b) => b?.id);
        const deleteBlocksIds = dbBlocksId.filter(
          (id) => !updateBlocksId.includes(id),
        );

        if (deleteBlocksIds.length) {
          await prisma.$transaction(
            deleteBlocksIds.map((id) =>
              prisma.block.delete({
                where: { id },
              }),
            ),
          );
        }
      }
    }
    revalidatePath('/');
  } catch (e) {
    console.log('ERRROOOR\nERRROOOR\nERRROOOR\n', e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // Prisma error-codes
      // https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes
      // https://www.prisma.io/docs/reference/api-reference/error-reference
      if (e.code === 'P2002') {
        return {
          success: false,
          message:
            'Workout already exist. Please select a different day or program.',
        };
      }
    }
    return { success: false, message: 'Something went wrong!' };
  }

  return { success: true, message: 'Workout added successfully.' };
};
