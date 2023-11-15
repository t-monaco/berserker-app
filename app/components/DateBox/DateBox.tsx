import { Dispatch, SetStateAction } from 'react';
import * as Styled from './DateBox.styled';

interface CalDate {
  dateNum: string;
  dateName: string;
  dateOfYear: number;
}

type DateProps = {
  selected: boolean;
  calDate: CalDate;
  setSelectedDate: Dispatch<SetStateAction<number>>;
};

const DateBox: React.FC<DateProps> = ({
  selected,
  calDate,
  setSelectedDate,
}) => {
  return (
    <Styled.DateBoxWrapper
      // className={`${selected ? 'selected' : ''}`}
      selected={selected}
      onClick={() => setSelectedDate(calDate.dateOfYear)}
    >
      <span className="dateName">{calDate.dateName.toUpperCase()}</span>
      <span className="dateNum">{calDate.dateNum}</span>
    </Styled.DateBoxWrapper>
  );
};

export default DateBox;
