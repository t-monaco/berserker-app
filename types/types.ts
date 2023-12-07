import { Prisma } from '@prisma/client';

export interface CreateWorkoutForm {
  date: number;
  programId: string;
  blocks: Prisma.BlockCreateManyInput[];
}


export type BlockReturnType = {
  category: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
} & {
  id: string;
  description: string;
  duration: string;
  title: string;
  categoryId: string;
  workoutId: string | null;
};