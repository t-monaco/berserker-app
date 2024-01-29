import { CalendarDate } from '@/src/types/types';
import { Dispatch, SetStateAction } from 'react';
import * as Styled from './DateBox.styled';

type DateProps = {
  calDate: CalendarDate;
  selectedDateId: string;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
};

const DateBox: React.FC<DateProps> = ({
  calDate,
  selectedDateId,
  setSelectedDateId,
}) => {
  return (
    <Styled.DateBoxWrapper
      selected={selectedDateId === calDate.dateId}
      onClick={() => setSelectedDateId(calDate.dateId)}
    >
      <span className="dateName">{calDate.dateName.toUpperCase()}</span>
      <span className="dateNum">{calDate.dateNum}</span>
    </Styled.DateBoxWrapper>
  );
};

export default DateBox;
