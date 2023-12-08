import prisma from '@/lib/prisma';
import HomeWrapper from '../components/HomeWrapper';
import { getDatesIdentifierArr } from '../utils/utils';
import { auth } from '@clerk/nextjs';
import { getProgramsOpt } from '@/actions/getProgramsOpt';
import { getWorkouts } from '@/actions/getWorkouts';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programOptions = await getProgramsOpt();

  const workouts = await getWorkouts();

  const { userId } = auth();

  const userRole = await prisma.user.findUnique({
    where: {
      clerkId: userId ?? '',
    },
  });

  return (
    <HomeWrapper
      programs={programOptions}
      workouts={workouts}
      userRole={userRole?.role}
    />
  );
}
