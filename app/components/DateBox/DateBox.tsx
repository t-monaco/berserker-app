import { Dispatch, SetStateAction } from 'react';
import styles from './DateBox.module.scss';

interface CalDate {
  dateNum: string;
  dateName: string;
  dateOfYear: number;
}

type DateProps = {
  selected?: boolean;
  calDate: CalDate;
  setSelectedDate: Dispatch<SetStateAction<number>>;
};

const DateBox: React.FC<DateProps> = ({
  selected,
  calDate,
  setSelectedDate,
}) => {
  return (
    <div
      className={`${styles.dateWrapper} ${selected ? styles.selected : ''}`}
      onClick={() => setSelectedDate(calDate.dateOfYear)}
    >
      <span className="dateName">{calDate.dateName.toUpperCase()}</span>
      <span className="dateNum">{calDate.dateNum}</span>
    </div>
  );
};

export default DateBox;
