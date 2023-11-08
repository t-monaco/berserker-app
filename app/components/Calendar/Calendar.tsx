import DateBox from '../DateBox/DateBox';
import styles from './Calendar.module.scss';

type CalendarProps = object;

const Calendar: React.FC<CalendarProps> = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.month}>NOVEMBER 2023</div>
      <div className={styles.datesWrapper}>
        <DateBox />
        <DateBox />
        <DateBox selected />
        <DateBox />
        <DateBox />
        <DateBox />
        <DateBox />
      </div>
    </div>
  );
};

export default Calendar;
