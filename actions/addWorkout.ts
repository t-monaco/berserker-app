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

  const keysToConvert = ['title', 'duration', 'category'];

  const convertedBlocks = covertToUpperCaseArrObj(blocks, keysToConvert);

  const dateDB = getWorkoutDateIdentifier(date);

  try {
    await prisma.workout.upsert({
      where: {
        workoutIdentifier: {
          date: dateDB,
          programId,
        },
      },
      update: {
        date: dateDB,
        programId,
        blocks: convertedBlocks as Block[],
      },
      create: {
        date: dateDB,
        programId,
        blocks: convertedBlocks as Block[],
      },
    });

    revalidatePath('/');
  } catch (e) {
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
  }

  return { success: true, message: 'Workout added successfully.' };
};
