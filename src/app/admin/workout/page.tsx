import WorkoutCreate from '@/src/components/WorkoutCreate';
import { serverTrpc } from '@/src/trpc/server';
import { SelectOption } from '@/src/types/types';

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
      <WorkoutCreate programs={programsList} categories={categoriesList} />
    </main>
  );
}
