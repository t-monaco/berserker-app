import { drukFont } from '@/app/fonts/fonts';
import customDayJS from '@/lib/dayjs';
import { CreateWorkoutForm } from '@/types/types';
import { DatePicker as DatePickerAntd } from 'antd';
import { Control, Controller, Path } from 'react-hook-form';
import * as Styled from './DatePicker.styled';

type DatePickerProps = {
  label: string;
  name: Path<CreateWorkoutForm>;
  control: Control<CreateWorkoutForm, any>;
};

const DatePicker: React.FC<DatePickerProps> = ({ label, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'Field required.' }}
      render={({ field }) => (
        <Styled.DatePickerWrapper>
          <label htmlFor={name}>{label}</label>
          <DatePickerAntd
            size="large"
            className={drukFont.className}
            allowClear={false}
            placeholder={customDayJS().format('YYYY-MM-DD')}
            format="YYYY-MM-DD"
            // defaultValue={customDayJS().format('YYYY-MM-DD')}
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            value={field.value ? customDayJS(field.value as string) : null}
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
