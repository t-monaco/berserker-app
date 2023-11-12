import { drukFont } from '@/app/fonts/fonts';
import * as Styled from './DatePicker.styled';
import { DatePicker as DatePickerAntd } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';

type DatePickerProps = { label: string; name: string };

const DatePicker: React.FC<DatePickerProps> = ({ label, name }) => {
  return (
    <Styled.DatePickerWrapper>
      <label htmlFor={name}>{label}</label>
      <DatePickerAntd
        className={drukFont.className}
        allowClear={false}
        // defaultValue={dayjs().format('YYYY-MM-DD')}
        placeholder={dayjs().format('YYYY-MM-DD')}
      />
    </Styled.DatePickerWrapper>
  );
};

export default DatePicker;
