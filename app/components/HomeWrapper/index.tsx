'use client';

import dayOfYear from 'dayjs/plugin/dayOfYear';
import { useMemo, useState } from 'react';
import { BlockWrapper, Calendar, ProgramSelector } from '..';
import { SelectOption } from '../Form/BasicSelect';
import dayjs from 'dayjs';

type HomeWrapperProps = {
  programs: SelectOption[];
  workouts: ({
    id: string;
    date: string;
    programId: string;
    createdAt: Date;
    updatedAt: Date;
  } & {
    blocks: {
      category: string;
      description: string;
      duration: string;
      title: string;
    }[];
  })[];
  userRole?: string;
};

const HomeWrapper: React.FC<HomeWrapperProps> = ({
  programs,
  userRole,
  workouts,
}) => {
  dayjs.extend(dayOfYear);

  const [selectedDateId, setSelectedDateId] = useState(
    `${dayjs().year()}-${dayjs().dayOfYear()}`,
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
      <Calendar
        userRole={userRole}
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
