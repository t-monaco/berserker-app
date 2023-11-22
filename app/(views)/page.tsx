import prisma from '@/lib/prisma';
import { SelectOption } from '../components/Form/BasicSelect';
import HomeWrapper from '../components/HomeWrapper';
import { getDatesIdentifierArr } from '../utils/utils';

export default async function Home() {
  const workouts = await prisma.workout.findMany({
    where: {
      date: { in: getDatesIdentifierArr() },
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
