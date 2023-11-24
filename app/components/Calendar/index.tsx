'use client';

import { DateBox } from '@/app/components';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { HiRefresh } from 'react-icons/hi';
import { CalDate } from '../DateBox';
import * as Styled from './Calendar.styled';
import { UserButton, useUser } from '@clerk/nextjs';

type CalendarProps = {
  selectedDateId: string;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
  userRole?: string;
};

const Calendar: React.FC<CalendarProps> = ({
  selectedDateId,
  setSelectedDateId,
  userRole,
}) => {
  const router = useRouter();
  // TODO: this should be updated, using pending status from next/navigation or the fetched query.
  const [rotate, setRotate] = useState(false);

  const handleRefresh = () => {
    setRotate(true);
    router.refresh();
    setTimeout(() => {
      setRotate(false);
    }, 3000);
  };

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
    <Styled.CalendarWrapper>
      <div className="month-year">
        {dayjs().format('MMMM YYYY').toUpperCase()}
        <div className="flex gap-4">
          {userRole === 'ADMIN' && <Link href="/admin">ADMIN</Link>}
          <UserButton afterSignOutUrl="/" />

          <span className="icon-wrapper" onClick={() => handleRefresh()}>
            <HiRefresh className={rotate ? 'rotate' : ''} />
          </span>
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
