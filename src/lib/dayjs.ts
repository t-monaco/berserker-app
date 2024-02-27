import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import utc from 'dayjs/plugin/utc';

dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(utc);

const customDayJS = dayjs;

customDayJS.tz.setDefault(customDayJS.tz.guess());

export default customDayJS;
