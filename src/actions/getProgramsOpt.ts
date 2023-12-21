'use server';

import { xata } from '@/src/lib/xataDB';
import { SelectOption } from '@/src/types/types';

export const getProgramsOpt = async () => {
  const programs = await xata.db.Program.select(['id', 'name']).getAll();

  return programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name!.toUpperCase(), value: id },
    ],
    [],
  );
};
