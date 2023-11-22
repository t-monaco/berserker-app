import { SelectOption } from '@/app/components/Form/BasicSelect';
import WorkoutCreate from '@/app/components/WorkoutCreate';
import prisma from '@/lib/prisma';

export default async function Admin() {
  const categories = await prisma.category.findMany();
  const programs = await prisma.program.findMany();

  const programOptions = programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  const categoriesOptions = categories.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: name },
    ],
    [],
  );

  return (
    <main className="flex flex-col gap-10 flex-1 justify-center items-center overflow-scroll">
      <h1 className="text-center text-[20px] flex-shrink-0">CREATE WORKOUT</h1>
      <WorkoutCreate programs={programOptions} categories={categoriesOptions} />
    </main>
  );
}
