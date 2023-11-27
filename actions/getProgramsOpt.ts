'use server';

import { SelectOption } from '@/app/components/Form/BasicSelect';
import prisma from '@/lib/prisma';

export const getProgramsOpt = async () => {
  const programs = await prisma.program.findMany();

  return programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );
};
