'use server';

import { getDatesIdentifierArr } from '@/app/utils/utils';
import prisma from '@/lib/prisma';
import { xata } from '@/xata/xata';

const groupBlocksByWorkout = (blocks) =>
  blocks.reduce((result, block) => {
    const { date, program } = block.workout;
    const dateKey = date;
    const programKey = program.id;

    if (!result[dateKey]) {
      result[dateKey] = {};
    }

    if (!result[dateKey][programKey]) {
      result[dateKey][programKey] = [];
    }

    result[dateKey][programKey].push({
      title: block.title,
      description: block.description,
      duration: block.duration,
      category: block.category,
    });

    return result;
  }, {});

export const getBlocks = async () => {
  const blocks = await xata.db.Block.filter({
    'workout.date': {
      $any: getDatesIdentifierArr(),
    },
  })
    .select([
      '*',
      'workout.*',
      'workout.program.id',
      'category.id',
      'category.name',
    ])
    .getAll();

  return groupBlocksByWorkout(blocks);

  return await prisma.block.findMany({
    include: {
      category: true,
    },
  });
};
