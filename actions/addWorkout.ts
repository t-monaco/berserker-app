'use server';

import { IFormInput } from '@/app/components/WorkoutCreate';
import prisma from '@/lib/prisma';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

export const addWorkout = async (data: IFormInput) => {
  dayjs.extend(dayOfYear);
  const { date, programId, blocks } = data;

  const dateDB = `${dayjs(date).year()}-${dayjs(date).dayOfYear()}`;

  // code to check that date and program do not exist.
  //
  //
  //
  //

  console.log('BOOOO', {
    date: dateDB,
    programId,
    blocks,
  });

  try {
    await prisma.workout.create({
      data: {
        date: dateDB,
        programId,
        blocks,
      },
    });

    return { success: true, message: 'Workout added successfully.' };
  } catch (error) {
    return { success: false, message: error };
  }
};
