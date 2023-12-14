'use server';

import { getDatesIdentifierArr } from '@/app/utils/utils';
import { xata } from '@/lib/xataDB';

export const getWorkouts = async () => {
  const workouts = xata.db.Workout.filter({
    date: { $any: getDatesIdentifierArr() },
  }).getAll();

  return workouts;
};
