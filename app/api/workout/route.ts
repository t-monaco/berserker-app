import { getWorkoutDateIdentifier } from '@/app/utils/utils';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const date = parseInt(req.nextUrl.searchParams.get('date') ?? '');
  const programId = req.nextUrl.searchParams.get('programId') as string;

  const workoutData = await prisma.workout.findUnique({
    where: {
      workoutIdentifier: {
        date: getWorkoutDateIdentifier(date),
        programId: programId,
      },
    },
  });

  return NextResponse.json({ data: workoutData }, { status: 200 });
}
