'use server';

import { getDatesIdentifierArr } from '@/app/utils/utils';
import { Block, xata } from '@/xata/xata';

const groupBlocksByWorkout = (blocks: Block[]) =>
  blocks.reduce((acc: Record<string, Record<string, Block[]>>, block) => {
    const { date, program } = block.workout!;
    const dateKey = date!;
    const programKey = program!.id;

    if (!acc[dateKey]) {
      acc[dateKey] = {};
    }

    if (!acc[dateKey][programKey]) {
      acc[dateKey][programKey] = [];
    }

    acc[dateKey][programKey].push({
      id: block.id,
      title: block.title,
      description: block.description,
      duration: block.duration,
      category: block.category,
    });

    return acc;
  }, {});

export const getBlocks = async () => {
  const blocks = await xata.db.Block.filter({
    'workout.date': {
      $any: getDatesIdentifierArr(),
    },
  })
    .select([
      'id',
      'title',
      'duration',
      'description',
      'category.id',
      'category.name',
      'workout.date',
      'workout.program.id',
    ])
    .getAll();

  return groupBlocksByWorkout(blocks);
};
