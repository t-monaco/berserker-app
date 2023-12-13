'use client';

import customDayJS from '@/lib/dayjs';
import { useMemo, useState } from 'react';
import { BlockWrapper, Calendar, ProgramSelector } from '..';
import { SelectOption } from '../Form/BasicSelect';
import Header from '../Header';

type HomeWrapperProps = {
  programs: SelectOption[];
  blocks: string;
  isAdmin: boolean;
};

const HomeWrapper: React.FC<HomeWrapperProps> = ({
  programs,
  isAdmin,
  blocks,
}) => {
  const [selectedDateId, setSelectedDateId] = useState(
    `${customDayJS().year()}-${customDayJS().dayOfYear()}`,
  );

  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const workoutBlocks = useMemo(
    () => JSON.parse(blocks)?.[selectedDateId]?.[selectedProgram.value],
    [blocks, selectedDateId, selectedProgram],
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
