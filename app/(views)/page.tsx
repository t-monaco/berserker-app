import HomeWrapper from '../components/HomeWrapper';
import { getProgramsOpt } from '@/actions/getProgramsOpt';
import { getWorkouts } from '@/actions/getWorkouts';
import { isAdmin } from '@/actions/isAdmin';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programOptions = await getProgramsOpt();

  const workouts = await getWorkouts();

  const isUserAdmin = await isAdmin();

  return (
    <HomeWrapper
      programs={programOptions}
      workouts={workouts}
      isAdmin={isUserAdmin}
    />
  );
}
