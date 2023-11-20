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
