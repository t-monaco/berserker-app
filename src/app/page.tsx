import { isAdmin } from '@/src/actions/isAdmin';
import HomeWrapper from '@/src/components/HomeWrapper';
import dynamic from 'next/dynamic';
import { serverTrpc } from '../trpc/serverClient';
import { SelectOption } from '../types/types';

const DynamicAddToHomeScreen = dynamic(
  () => import('@/src/components/AddToHomeScreen'),
);

export default async function Home() {
  const programs = await serverTrpc.getAllPrograms();

  const programsList = programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  // const initialBlocks = await serverTrpc.getBlocks({
  //   dateUnix: customDayJS().unix(),
  // });

  const isUserAdmin = await isAdmin();

  return (
    <>
      <HomeWrapper
        // initialBlocks={JSON.stringify(initialBlocks)}
        programs={programsList}
        isAdmin={isUserAdmin}
      />
      <DynamicAddToHomeScreen />
    </>
  );
}
