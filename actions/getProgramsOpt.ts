'use server';

import { SelectOption } from '@/app/components/Form/BasicSelect';
import { xata } from '@/xata/xata';

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
