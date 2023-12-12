import { getBlocks } from '@/actions/getBlocks';
import HomeWrapper from '../components/HomeWrapper';
import { getProgramsOpt } from '@/actions/getProgramsOpt';
import { isAdmin } from '@/actions/isAdmin';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programOptions = await getProgramsOpt();

  const isUserAdmin = await isAdmin();

  const blocks = await getBlocks();

  return (
    <HomeWrapper
      programs={programOptions}
      blocks={blocks}
      isAdmin={isUserAdmin}
    />
  );
}
