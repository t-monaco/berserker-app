import { getDatesIdentifierArr } from '@/app/utils/utils';
import { xata } from '@/lib/xataDB';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const dateUnix = parseInt(req.nextUrl.searchParams.get('date') ?? '');

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

  return NextResponse.json(blocks, {
    status: 200,
  });
}
