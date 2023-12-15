'use client';

import DateBox from './DateBox';
import customDayJS from '@/lib/dayjs';
import { Dispatch, SetStateAction } from 'react';
import * as Styled from './Calendar.styled';
import { CalendarDate } from '@/types/types';

type CalendarProps = {
  selectedDateId: string;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
};

const Calendar: React.FC<CalendarProps> = ({
  selectedDateId,
  setSelectedDateId,
}) => {
  const startOfWeek = customDayJS().startOf('week');
  const endOfWeek = customDayJS().endOf('week');

  let calDays: CalendarDate[] = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    calDays.push({
      dateName: day.format('ddd'),
      dateNum: day.format('DD'),
      dateOfYear: day.dayOfYear(),
      dateId: `${day.year()}-${day.dayOfYear()}`,
    });
    day = day.clone().add(1, 'd');
  }

  return (
    <Styled.DatesWrapper>
      {calDays.map((calDate, key) => (
        <DateBox
          key={key}
          selected={selectedDateId === calDate.dateId ? true : false}
          calDate={calDate}
          setSelectedDateId={setSelectedDateId}
        />
      ))}
    </Styled.DatesWrapper>
  );
};

export default Calendar;
