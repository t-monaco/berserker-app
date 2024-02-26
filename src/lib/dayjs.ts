import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(utc);
dayjs.extend(timezone);

const customDayJS = dayjs;

customDayJS.tz.setDefault(customDayJS.tz.guess());

export default customDayJS;
