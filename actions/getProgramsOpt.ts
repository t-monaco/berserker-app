'use server';

import { xata } from '@/lib/xataDB';
import { SelectOption } from '@/types/types';

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
