import Calendar from '../components/Calendar';
import ProgramSelector from '../components/ProgramSelector';
import BlockWrapper from '../components/Block';
import prisma from '@/lib/prisma';
import { SelectOption } from '../components/Form/BasicSelect';

export default async function Home() {
  const programs = await prisma.program.findMany();

  const programOptions = programs.reduce(
    (acc: SelectOption[], { name, id }) => [
      ...acc,
      { label: name.toUpperCase(), value: id },
    ],
    [],
  );

  return (
    <main className="flex flex-col gap-6 flex-1">
      <Calendar />
      <ProgramSelector programs={programOptions} />
      <BlockWrapper />
    </main>
  );
}
