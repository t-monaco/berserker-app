import { serverTrpc } from '@/src/trpc/serverClient';
import { SelectOption } from '@/src/types/types';
import dynamic from 'next/dynamic';

const DynamictWorkoutCreate = dynamic(
  () => import('@/src/components/WorkoutCreate'),
);

export default async function AdminWorkout() {
  const programs = await serverTrpc.getAllPrograms();
  const programsList = programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  const categories = await serverTrpc.getAllCategories();
  const categoriesList = categories.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  return (
    <main className="flex flex-col gap-10 flex-1 justify-center items-center overflow-scroll w-full">
      <h1 className="text-center text-[20px] flex-shrink-0">MANAGE WORKOUT</h1>
      <DynamictWorkoutCreate
        programs={programsList}
        categories={categoriesList}
      />
    </main>
  );
}
