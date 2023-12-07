'use server';

import { SelectOption } from '@/app/components/Form/BasicSelect';
import prisma from '@/lib/prisma';

export const getCategoriesOpt = async () => {
  const categories = await prisma.category.findMany();
  return categories.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );
};
