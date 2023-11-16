'use client';

import { DateBox } from '@/app/components';
import moment from 'moment';
import { useState } from 'react';
import * as Styled from './Calendar.styled';
import Link from 'next/link';

type CalendarProps = object;

const Calendar: React.FC<CalendarProps> = () => {
  const startOfWeek = moment().startOf('isoWeek');
  const endOfWeek = moment().endOf('isoWeek');
  const [selectedDayOfYear, setSelectedDayOfYear] = useState(
    moment().dayOfYear(),
  );

  let calDays = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    calDays.push({
      dateName: moment(day).format('ddd'),
      dateNum: moment(day).format('DD'),
      dateOfYear: moment(day).dayOfYear(),
    });
    day = day.clone().add(1, 'd');
  }

  return (
    <Styled.CalendarWrapper>
      <div className="month-year">
        {moment().format('MMMM YYYY').toUpperCase()}
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
