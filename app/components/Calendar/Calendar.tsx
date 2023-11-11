'use client';
import moment from 'moment';
import DateBox from '../DateBox/DateBox';
import styles from './Calendar.module.scss';
import { useState } from 'react';

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
    <div className={styles.calendarContainer}>
      <div className={styles.month}>
        {moment().format('MMMM YYYY').toUpperCase()}
      </div>
      <div className={styles.datesWrapper}>
        {calDays.map((calDate, key) => (
          <DateBox
            key={key}
            selected={selectedDayOfYear === calDate.dateOfYear ? true : false}
            calDate={calDate}
            setSelectedDate={setSelectedDayOfYear}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
