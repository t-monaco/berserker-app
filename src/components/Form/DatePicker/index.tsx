import { drukFont } from '@/src/fonts/fonts';
import customDayJS from '@/src/lib/dayjs';
import { CreateWorkoutForm } from '@/src/types/types';
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
            placeholder={customDayJS().local().format('YYYY-MM-DD')}
            format="YYYY-MM-DD"
            // defaultValue={customDayJS().format('YYYY-MM-DD')}
            ref={field.ref}
            name={field.name}
            onBlur={field.onBlur}
            value={field.value ? customDayJS.unix(field.value as number) : null}
            onChange={(date) => {
              field.onChange(date ? date.local().unix() : null);
            }}
          />
        </Styled.DatePickerWrapper>
      )}
    />
  );
};

export default DatePicker;
