import WorkoutCreate from '@/src/components/WorkoutCreate';
import { getCategoriesOpt } from '@/src/actions/getCategoriesOpt';
import { getProgramsOpt } from '@/src/actions/getProgramsOpt';

export default async function AdminWorkout() {
  const programOptions = await getProgramsOpt();

  const categoriesOptions = await getCategoriesOpt();

  return (
    <main className="flex flex-col gap-10 flex-1 justify-center items-center overflow-scroll w-full">
      <h1 className="text-center text-[20px] flex-shrink-0">MANAGE WORKOUT</h1>
      <WorkoutCreate programs={programOptions} categories={categoriesOptions} />
    </main>
  );
}
