'use client';

import { DateBox } from '@/app/components';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import Link from 'next/link';
import { useState } from 'react';
import * as Styled from './Calendar.styled';

type CalendarProps = object;

const Calendar: React.FC<CalendarProps> = () => {
  dayjs.extend(dayOfYear);
  const startOfWeek = dayjs().startOf('week');
  const endOfWeek = dayjs().endOf('week');
  const [selectedDayOfYear, setSelectedDayOfYear] = useState(
    dayjs().dayOfYear(),
  );

  let calDays = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    calDays.push({
      dateName: day.format('ddd'),
      dateNum: day.format('DD'),
      dateOfYear: day.dayOfYear(),
    });
    day = day.clone().add(1, 'd');
  }

  return (
    <Styled.CalendarWrapper>
      <div className="month-year">
        {dayjs().format('MMMM YYYY').toUpperCase()}
        <Link href="/admin">ADMIN</Link>
      </div>
      <Styled.DatesWrapper>
        {calDays.map((calDate, key) => (
          <DateBox
            key={key}
            selected={selectedDayOfYear === calDate.dateOfYear ? true : false}
            calDate={calDate}
            setSelectedDate={setSelectedDayOfYear}
          />
        ))}
      </Styled.DatesWrapper>
    </Styled.CalendarWrapper>
  );
};

export default Calendar;
