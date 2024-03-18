import { CalendarDate } from '@/src/types/types';
import { Dispatch, SetStateAction } from 'react';
import * as Styled from './DateBox.styled';

type DateProps = {
  calDate: CalendarDate;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
  selected: boolean;
};

const DateBox: React.FC<DateProps> = ({
  calDate,
  setSelectedDateId,
  selected,
}) => {
  return (
    <Styled.DateBoxWrapper
      onClick={() => setSelectedDateId(calDate.dateId)}
      className={
        selected
          ? 'bg-[#000] border-[#adfe19] border-solid border-2 text-[#adfe19]'
          : 'bg-[#222] border-[#222222] border-solid border-2 text-[#ffffff]'
      }
    >
      <span className="dateName">{calDate.dateName.toUpperCase()}</span>
      <span className="dateNum">{calDate.dateNum}</span>
    </Styled.DateBoxWrapper>
  );
};

export default DateBox;
