'use client';

import { trpc } from '@/src/trpc/client';
import BlockWrapper from '@/src/components/Block';
import Calendar from '@/src/components/Calendar';
import Header from '@/src/components/Header';
import Loader from '@/src/components/Loader';
import ProgramSelector from '@/src/components/ProgramSelector';
import {
  getWorkoutDateIdentifier,
  groupBlocksByDateAndProgram,
} from '@/src/utils/utils';
import customDayJS from '@/src/lib/dayjs';
import { SelectOption } from '@/src/types/types';
import { useMemo, useState } from 'react';

type HomeWrapperProps = {
  programs: SelectOption[];
  isAdmin: boolean;
};

const HomeWrapper: React.FC<HomeWrapperProps> = ({ programs, isAdmin }) => {
  const [referenceDay, setReferenceDay] = useState(customDayJS());

  const [selectedDateId, setSelectedDateId] = useState(
    `${customDayJS().year()}-${customDayJS().dayOfYear()}`,
  );

  const resetDates = () => {
    setReferenceDay(customDayJS());
    setSelectedDateId(getWorkoutDateIdentifier(customDayJS().unix()));
  };

  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const { data: blocks, isLoading } = trpc.getBlocks.useQuery({
    dateUnix: referenceDay.unix(),
  });

  const workoutBlocks = useMemo(
    () =>
      blocks?.length
        ? groupBlocksByDateAndProgram(blocks)?.[selectedDateId]?.[
            selectedProgram.value
          ]
        : [],
    [blocks, selectedDateId, selectedProgram],
  );

  return (
    <main className="flex flex-col gap-6 flex-1 items-center">
      <Header isAdmin={isAdmin} resetDates={resetDates} />
      <Calendar
        isAdmin={isAdmin}
        setSelectedDateId={setSelectedDateId}
        selectedDateId={selectedDateId}
        referenceDay={referenceDay}
        setReferenceDay={setReferenceDay}
      />
      <ProgramSelector
        programs={programs}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
      />
      {!isLoading ? <BlockWrapper blocks={workoutBlocks} /> : <Loader />}
    </main>
  );
};

export default HomeWrapper;
