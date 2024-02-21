'use client';

import { getWorkoutDateIdentifier } from '@/src/utils/utils';
import { CalendarDate } from '@/src/types/types';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as Styled from './Calendar.styled';
import DateBox from './DateBox';

type CalendarProps = {
  selectedDateId: string;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
  referenceDay: Dayjs;
  setReferenceDay: Dispatch<SetStateAction<Dayjs>>;
  isAdmin: boolean;
};

const Calendar: React.FC<CalendarProps> = ({
  selectedDateId,
  setSelectedDateId,
  referenceDay,
  setReferenceDay,
  isAdmin,
}) => {
  const startOfWeek = referenceDay.startOf('week');
  const endOfWeek = referenceDay.endOf('week');

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

  const handleLeftClick = () => {
    setReferenceDay(referenceDay.subtract(1, 'week'));
    setSelectedDateId(
      getWorkoutDateIdentifier(referenceDay.subtract(1, 'week').unix()),
    );
  };

  const handleRightClick = () => {
    setReferenceDay(referenceDay.add(1, 'week'));
    setSelectedDateId(
      getWorkoutDateIdentifier(referenceDay.add(1, 'week').unix()),
    );
  };

  return (
    <Styled.CalendarWrapper>
      {isAdmin && (
        <Styled.WeekWrapper>
          <span className="left">
            <FiChevronLeft onClick={() => handleLeftClick()} />
          </span>
          <p>WEEK #{referenceDay.week()}</p>
          <span className="right">
            <FiChevronRight onClick={() => handleRightClick()} />
          </span>
        </Styled.WeekWrapper>
      )}
      <Styled.DatesWrapper>
        {calDays.map((calDate, key) => (
          <DateBox
            key={key}
            calDate={calDate}
            setSelectedDateId={setSelectedDateId}
            selected={selectedDateId === calDate.dateId}
          />
        ))}
      </Styled.DatesWrapper>
    </Styled.CalendarWrapper>
  );
};

export default Calendar;
