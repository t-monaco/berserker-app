import { drukFont } from '@/src/fonts/fonts';
import { SelectOption } from '@/src/types/types';
import { Select } from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import * as Styled from './BasicSelect.styled';

type BasicSelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  options: SelectOption[];
  control: Control<T, any>;
  error?: string;
};

const BasicSelect = <T extends FieldValues>({
  label,
  name,
  options,
  control,
  error,
}: BasicSelectProps<T>) => {
  return (
    <Styled.SelectWrapper>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: 'Field required.' }}
        render={({ field }) => (
          <Select className={drukFont.className} options={options} {...field} />
        )}
      />
      {error && <span className="error-msg">{error}</span>}
    </Styled.SelectWrapper>
  );
};

export default BasicSelect;
