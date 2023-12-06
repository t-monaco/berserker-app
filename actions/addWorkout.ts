'use server';

import { Block, IFormInput } from '@/app/components/WorkoutCreate';
import {
  covertToUpperCaseArrObj,
  getWorkoutDateIdentifier,
} from '@/app/utils/utils';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { revalidatePath } from 'next/cache';

export const addWorkout = async (data: IFormInput) => {
  dayjs.extend(dayOfYear);
  const { date, programId, blocks } = data;

  const keysToConvert = ['title', 'duration'];

  // add generic type to funciton
  const convertedBlocks = covertToUpperCaseArrObj(blocks, keysToConvert);

  const dateDB = getWorkoutDateIdentifier(date);

  const newBlocks: Block[] = [];
  const updateBlocks: Block[] = [];

  for (const b of convertedBlocks) {
    if (b?.id) {
      updateBlocks.push(b);
    } else {
      newBlocks.push(b);
    }
  }

  try {
    const workout = await prisma.workout.upsert({
      where: {
        workoutIdentifier: {
          date: dateDB,
          programId,
        },
      },
      update: { date: dateDB, programId },
      create: {
        date: dateDB,
        programId,
        blocks: {
          create: convertedBlocks.map(({ id, workoutId, ...data }) => ({
            ...data,
          })) as Block[],
        },
      },
      include: { blocks: true },
    });

    // add new blocks to existing wod
    if (newBlocks.length) {
      await prisma.block.createMany({
        data: newBlocks.map((b) => ({ ...b, workoutId: workout.id })),
      });
    }

    // update blocks to existing wod
    if (updateBlocks.length) {
      await prisma.$transaction(
        updateBlocks.map((b) => {
          const { workoutId, id, ...data } = b;
          return prisma.block.update({
            where: { id: b.id },
            data: { ...data },
          });
        }),
      );
    }

    // delete blocks to existing wod
    const updateBlocksId = updateBlocks.map((b) => b?.id);
    const dbBlocksId = workout.blocks.map((b) => b?.id);
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
