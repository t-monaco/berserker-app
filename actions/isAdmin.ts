'use server';

import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs';

export const isAdmin = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userDB = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (userDB?.role === 'ADMIN') return true;

  return false;
};
