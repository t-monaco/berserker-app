import { getBlocks } from '@/actions/getBlocks';
import HomeWrapper from '@/app/components/HomeWrapper';
import { getProgramsOpt } from '@/actions/getProgramsOpt';
import { isAdmin } from '@/actions/isAdmin';
import AddToHomeScreen from '@/app/components/AddToHomeScreen';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programOptions = await getProgramsOpt();

  const isUserAdmin = await isAdmin();

  const blocks = await getBlocks();

  return (
    <>
      <HomeWrapper
        programs={programOptions}
        blocks={JSON.stringify(blocks)}
        isAdmin={isUserAdmin}
      />
      <AddToHomeScreen />
    </>
  );
}
