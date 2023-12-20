import { xata } from '@/lib/xataDB';
import { publicProcedure, router } from './trpc';
import {
  getDatesIdentifierArr,
  getWorkoutDateIdentifier,
} from '@/app/utils/utils';
import z from 'zod';

export const appRouter = router({
  getBlocks: publicProcedure
    .input(z.object({ dateUnix: z.number() }))
    .query(async ({ input }) => {
      const { dateUnix } = input;

      const blocks = await xata.db.Block.filter({
        'workout.date': {
          $any: getDatesIdentifierArr(dateUnix),
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

      return blocks;
    }),
  getBlocksByDateAndProgram: publicProcedure
    .input(z.object({ dateUnix: z.number(), programId: z.string() }))
    .query(async ({ input }) => {
      const { dateUnix, programId } = input;

      const blocks = await xata.db.Block.filter({
        'workout.date': getWorkoutDateIdentifier(dateUnix),
        'workout.program.id': programId,
      })
        .select([
          'title',
          'description',
          'duration',
          'category.id',
          'category.name',
        ])
        .getAll();

      return blocks;
    }),
});

export type AppRouter = typeof appRouter;
