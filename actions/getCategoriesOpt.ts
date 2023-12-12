'use server';

import { SelectOption } from '@/app/components/Form/BasicSelect';
import { xata } from '@/xata/xata';

export const getCategoriesOpt = async () => {
  const categories = await xata.db.Category.getAll();

  return categories.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );
};
