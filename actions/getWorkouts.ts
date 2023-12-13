'use server';

import { getDatesIdentifierArr } from '@/app/utils/utils';
import { xata } from '@/xata/xata';

export const getWorkouts = async () => {
  const workouts = xata.db.Workout.filter({
    date: { $any: getDatesIdentifierArr() },
  }).getAll();

  return workouts;
};
