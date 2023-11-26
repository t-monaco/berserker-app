import prisma from '@/lib/prisma';
import { SelectOption } from '../components/Form/BasicSelect';
import HomeWrapper from '../components/HomeWrapper';
import { getDatesIdentifierArr } from '../utils/utils';
import { auth } from '@clerk/nextjs';
import { getProgramsOpt } from '@/actions/getProgramsOpt';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programOptions = await getProgramsOpt();

  const workouts = await prisma.workout.findMany({
    where: {
      date: { in: getDatesIdentifierArr() },
    },
  });

  const { userId } = auth();

  const userRole = await prisma.user.findUnique({
    where: {
      userIdClerk: userId ?? '',
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
