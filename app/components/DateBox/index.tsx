import { Dispatch, SetStateAction } from 'react';
import * as Styled from './DateBox.styled';

export type CalDate = {
  dateNum: string;
  dateName: string;
  dateOfYear: number;
  dateId: string;
};

type DateProps = {
  selected: boolean;
  calDate: CalDate;
  setSelectedDateId: Dispatch<SetStateAction<string>>;
};

const DateBox: React.FC<DateProps> = ({
  selected,
  calDate,
  setSelectedDateId,
}) => {
  return (
    <Styled.DateBoxWrapper
      // className={`${selected ? 'selected' : ''}`}
      selected={selected}
      onClick={() => setSelectedDateId(calDate.dateId)}
    >
      <span className="dateName">{calDate.dateName.toUpperCase()}</span>
      <span className="dateNum">{calDate.dateNum}</span>
    </Styled.DateBoxWrapper>
  );
};

export default DateBox;
