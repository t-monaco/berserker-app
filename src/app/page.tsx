import { isAdmin } from '@/src/actions/isAdmin';
import AddToHomeScreen from '@/src/components/AddToHomeScreen';
import HomeWrapper from '@/src/components/HomeWrapper';
import { serverTrpc } from '../trpc/serverClient';
import { SelectOption } from '../types/types';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const programs = await serverTrpc.getAllPrograms();

  const programsList = programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  const isUserAdmin = await isAdmin();

  return (
    <>
      <HomeWrapper programs={programsList} isAdmin={isUserAdmin} />
      <AddToHomeScreen />
    </>
  );
}
