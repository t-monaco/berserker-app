'use server';

import prisma from '@/lib/prisma';

export const getUserRole = async (userId?: string) => {
  const userRole = await prisma.user.findUnique({
    where: {
      userIdClerk: userId ?? '',
    },
  });
  return userRole?.role;
};
