import { drukFont } from '@/app/fonts/fonts';
import { DatePicker as DatePickerAntd } from 'antd';
import dayjs from 'dayjs';
import { Control, Controller, Path } from 'react-hook-form';
import { IFormInput } from '../../Workout/WorkoutCreate';
import * as Styled from './DatePicker.styled';

type DatePickerProps = {
  label: string;
  name: Path<IFormInput>;
  control: Control<IFormInput, any>;
};

const DatePicker: React.FC<DatePickerProps> = ({ label, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Styled.DatePickerWrapper>
          <label htmlFor={name}>{label}</label>
          <DatePickerAntd
            size="large"
            className={drukFont.className}
            allowClear={false}
            placeholder={dayjs().format('YYYY-MM-DD')}
            format="YYYY-MM-DD"
            // defaultValue={dayjs().format('YYYY-MM-DD')}
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            value={field.value ? dayjs(field.value as string) : null}
            onChange={(date) => {
              field.onChange(date ? date.valueOf() : null);
            }}
          />
        </Styled.DatePickerWrapper>
      )}
    />
  );
};

export default DatePicker;
