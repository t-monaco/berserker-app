'use client';

import BlockWrapper from '@/app/components/Block';
import Calendar from '@/app/components/Calendar';
import Header from '@/app/components/Header';
import ProgramSelector from '@/app/components/ProgramSelector';
import Loader from '@/app/components/Loader';
import {
  getWorkoutDateIdentifier,
  groupBlocksByDateAndProgram,
} from '@/app/utils/utils';
import customDayJS from '@/lib/dayjs';
import { fetcher } from '@/lib/fetcher';
import { SelectOption } from '@/types/types';
import { BlockRecord } from '@/xata/xata';
import { useMemo, useState } from 'react';
import useSWR from 'swr';

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

  const blocksApiUrl = useMemo(
    () => `/api/blocks?date=${referenceDay.unix()}`,
    [referenceDay],
  );

  const { data: blocks, isLoading } = useSWR<BlockRecord[], boolean>(
    blocksApiUrl ? blocksApiUrl : null,
    fetcher,
  );

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
