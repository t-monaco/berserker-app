'use server';

import prisma from '@/lib/prisma';

export const getBlocks = async () => {
  return await prisma.block.findMany({
    include: {
      category: true,
    },
  });
};
