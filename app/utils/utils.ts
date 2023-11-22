const categoryOrder = ['structure', 'strength', 'metcon'];

export const sortBlockByCategory = (
  blocks: {
    title: string;
    duration: string;
    category: string;
    description: string;
  }[],
) => {
  return blocks.sort((a, b) => {
    const categoryAIndex = categoryOrder.indexOf(a.category);
    const categoryBIndex = categoryOrder.indexOf(b.category);

    return categoryAIndex - categoryBIndex;
  });
};

/**
 *
 * @param obj array of objects to convert.
 * @param keys desired keys of object to convert to upper case.
 * @returns A new array with the value of the desired keys in upper case.
 */
export const covertToUpperCaseArrObj = (
  obj: Record<string, string>[],
  keys: string[],
) =>
  obj.map((item) =>
    Object.keys(item).reduce(
      (acc: Record<string, string>, key) => ({
        ...acc,
        [key]: keys.includes(key) ? item[key].toUpperCase() : item[key],
      }),
      {},
    ),
  );
