'use server';

import {
  getDatesIdentifierArr,
  groupBlocksByDateAndProgram,
} from '@/src/utils/utils';
import { xata } from '@/src/lib/xataDB';

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
      'workout.program.name',
    ])
    .getAll();

  return groupBlocksByDateAndProgram(blocks);
};
