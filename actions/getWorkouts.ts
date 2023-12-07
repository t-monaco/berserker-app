'use server';

import { getDatesIdentifierArr } from '@/app/utils/utils';
import prisma from '@/lib/prisma';

export const getWorkouts = async () => {
  return await prisma.workout.findMany({
    where: {
      date: { in: getDatesIdentifierArr() },
    },
    include: {
      blocks: {
        include: { category: true },
      },
    },
  });
};
