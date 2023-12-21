'use server';

import { xata } from '@/src/lib/xataDB';
import { SelectOption } from '@/src/types/types';

export const getCategoriesOpt = async () => {
  const categories = await xata.db.Category.select(['id', 'name']).getAll();

  return categories.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name!.toUpperCase(), value: id },
    ],
    [],
  );
};
