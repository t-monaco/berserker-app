import { getBlocks } from '@/src/actions/getBlocks';
import HomeWrapper from '@/src/components/HomeWrapper';
import { getProgramsOpt } from '@/src/actions/getProgramsOpt';
import { isAdmin } from '@/src/actions/isAdmin';
import AddToHomeScreen from '@/src/components/AddToHomeScreen';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programOptions = await getProgramsOpt();

  const isUserAdmin = await isAdmin();

  return (
    <>
      <HomeWrapper programs={programOptions} isAdmin={isUserAdmin} />
      <AddToHomeScreen />
    </>
  );
}
