'use server';

import { SelectOption } from '@/app/components/Form/BasicSelect';
import { xata } from '@/lib/xataDB';

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
