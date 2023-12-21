'use server';

import { getDatesIdentifierArr } from '@/src/utils/utils';
import { xata } from '@/src/lib/xataDB';

export const getWorkouts = async () => {
  const workouts = xata.db.Workout.filter({
    date: { $any: getDatesIdentifierArr() },
  }).getAll();

  return workouts;
};
