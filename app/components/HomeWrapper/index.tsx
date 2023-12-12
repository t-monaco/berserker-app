'use client';

import customDayJS from '@/lib/dayjs';
import { useMemo, useState } from 'react';
import { BlockWrapper, Calendar, ProgramSelector } from '..';
import { SelectOption } from '../Form/BasicSelect';
import Header from '../Header';
import { Prisma } from '@prisma/client';
import { getWorkouts } from '@/actions/getWorkouts';

type HomeWrapperProps = {
  programs: SelectOption[];
  workouts: Prisma.PromiseReturnType<typeof getWorkouts>;
  isAdmin: boolean;
};

const HomeWrapper: React.FC<HomeWrapperProps> = ({
  programs,
  isAdmin,
  workouts,
}) => {
  const [selectedDateId, setSelectedDateId] = useState(
    `${customDayJS().year()}-${customDayJS().dayOfYear()}`,
  );

  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const workoutBlocks = useMemo(
    () =>
      workouts.find(
        (w) =>
          w.date === selectedDateId && w.programId === selectedProgram.value,
      )?.blocks || [],
    [workouts, selectedDateId, selectedProgram],
  );

  return (
    <main className="flex flex-col gap-6 flex-1">
      <Header isAdmin={isAdmin} />
      <Calendar
        setSelectedDateId={setSelectedDateId}
        selectedDateId={selectedDateId}
      />
      <ProgramSelector
        programs={programs}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
      />
      <BlockWrapper blocks={workoutBlocks} />
    </main>
  );
};

export default HomeWrapper;
