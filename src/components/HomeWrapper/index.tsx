'use client';

import Loader from '@/src/components/Loader';
import customDayJS from '@/src/lib/dayjs';
import { trpc } from '@/src/trpc/client';
import { SelectOption } from '@/src/types/types';
import {
  getWorkoutDateIdentifier,
  groupBlocksByDateAndProgram,
} from '@/src/utils/utils';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

const DynamicHeader = dynamic(() => import('@/src/components/Header'));
const DynamicCalendar = dynamic(() => import('@/src/components/Calendar'));
const DynamicProgramSelector = dynamic(
  () => import('@/src/components/ProgramSelector'),
);
const DynamicBlockWrapper = dynamic(() => import('@/src/components/Block'));

type HomeWrapperProps = {
  programs: SelectOption[];
  isAdmin: boolean;
  // initialBlocks: Awaited<ReturnType<(typeof serverTrpc)['getBlocks']>>;
  // initialBlocks: string;
};

const HomeWrapper: React.FC<HomeWrapperProps> = ({
  programs,
  isAdmin,
  // initialBlocks,
}) => {
  const [referenceDay, setReferenceDay] = useState(customDayJS.tz());

  const [selectedDateId, setSelectedDateId] = useState(
    `${customDayJS.tz().year()}-${customDayJS.tz().dayOfYear()}`,
  );

  const resetDates = () => {
    setReferenceDay(customDayJS.tz());
    setSelectedDateId(getWorkoutDateIdentifier(customDayJS.tz().unix()));
  };

  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const { data: blocks, isLoading } = trpc.getBlocks.useQuery(
    {
      dateUnix: referenceDay.unix(),
    },
    // {
    //   initialData: JSON.parse(initialBlocks),
    //   refetchOnMount: false,
    //   refetchOnReconnect: false,
    // },
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
      <DynamicHeader isAdmin={isAdmin} resetDates={resetDates} />
      <DynamicCalendar
        isAdmin={isAdmin}
        setSelectedDateId={setSelectedDateId}
        selectedDateId={selectedDateId}
        referenceDay={referenceDay}
        setReferenceDay={setReferenceDay}
      />
      <DynamicProgramSelector
        programs={programs}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
      />
      {!isLoading ? <DynamicBlockWrapper blocks={workoutBlocks} /> : <Loader />}
    </main>
  );
};

export default HomeWrapper;
