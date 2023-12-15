import { Dispatch, SetStateAction } from 'react';
import * as Styled from './DateBox.styled';
import { CalendarDate } from '@/types/types';

type DateProps = {
  selected: boolean;
  calDate: CalendarDate;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
};

const DateBox: React.FC<DateProps> = ({
  selected,
  calDate,
  setSelectedDateId,
}) => {
  return (
    <Styled.DateBoxWrapper
      selected={selected}
      onClick={() => setSelectedDateId(calDate.dateId)}
    >
      <span className="dateName">{calDate.dateName.toUpperCase()}</span>
      <span className="dateNum">{calDate.dateNum}</span>
    </Styled.DateBoxWrapper>
  );
};

export default DateBox;
