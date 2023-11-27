'use client';

import { DateBox } from '@/app/components';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { Dispatch, SetStateAction } from 'react';
import { CalDate } from '../DateBox';
import * as Styled from './Calendar.styled';

type CalendarProps = {
  selectedDateId: string;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
};

const Calendar: React.FC<CalendarProps> = ({
  selectedDateId,
  setSelectedDateId,
}) => {
  dayjs.extend(dayOfYear);
  const startOfWeek = dayjs().startOf('week');
  const endOfWeek = dayjs().endOf('week');

  let calDays: CalDate[] = [];
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
