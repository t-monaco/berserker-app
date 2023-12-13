'use server';

import { xata } from '@/xata/xata';
import { auth } from '@clerk/nextjs';

export const isAdmin = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userDB = await xata.db.User.filter({ clerkId: userId })
    .select(['role'])
    .getFirst();

  if (userDB?.role === 'ADMIN') return true;

  return false;
};
