'use client';

import { DateBox } from '@/app/components';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './Calendar.styled';
import { CalDate } from '../DateBox';
import { signOut, useSession } from 'next-auth/react';

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
  const { data: session } = useSession();

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
    <Styled.CalendarWrapper>
      <div className="month-year">
        {dayjs().format('MMMM YYYY').toUpperCase()}
        <div className="flex gap-4">
          {session?.user?.role === 'ADMIN' && <Link href="/admin">ADMIN</Link>}
          <a onClick={() => signOut({ callbackUrl: '/' })}>LOGOUT</a>
        </div>
      </div>
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
    </Styled.CalendarWrapper>
  );
};

export default Calendar;
