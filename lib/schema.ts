import { z } from 'zod';

const WorkoutBlock = z.object({
  title: z.string(),
  category: z.string(),
  type: z.string(),
  description: z.string(),
});

export const FormDataSchema = z.object({
  date: z.string(),
  program: z.string(),
  workouts: WorkoutBlock.array().nonempty(),
});
