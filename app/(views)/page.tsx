import prisma from '@/lib/prisma';
import { SelectOption } from '../components/Form/BasicSelect';
import HomeWrapper from '../components/HomeWrapper';

export default async function Home() {
  const workouts = await prisma.workout.findMany({
    where: {
      date: { in: ['2023-324', '2023-325', '2023-326', '2023-327'] },
    },
  });

  const programs = await prisma.program.findMany();

  const programOptions = programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  return <HomeWrapper programs={programOptions} workouts={workouts} />;
}
