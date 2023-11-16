import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { date, program, programId, blocks } = await request.json();

  await prisma.workout.create({
    data: {
      date: date,
      blocks,
      programId,
    },
  });

  return NextResponse.json(
    { message: 'Workout created prisma!' },
    { status: 201 },
  );
}
