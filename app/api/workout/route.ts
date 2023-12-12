import { getWorkoutDateIdentifier } from '@/app/utils/utils';
import { xata } from '@/xata/xata';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const date = parseInt(req.nextUrl.searchParams.get('date') ?? '');
  const programId = req.nextUrl.searchParams.get('programId') as string;

  const blocks = await xata.db.Block.filter({
    'workout.date': getWorkoutDateIdentifier(date),
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

  return NextResponse.json(blocks, { status: 200 });
}
