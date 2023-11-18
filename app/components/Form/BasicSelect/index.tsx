import { drukFont } from '@/app/fonts/fonts';
import { Select } from 'antd';
import { Control, Controller, Path } from 'react-hook-form';
import { IFormInput } from '../../WorkoutCreate';
import * as Styled from './BasicSelect.styled';

export type SelectOption = { label: string; value: string };

type BasicSelectProps = {
  label: string;
  name: Path<IFormInput>;
  options: SelectOption[];
  control: Control<IFormInput, any>;
};

const BasicSelect: React.FC<BasicSelectProps> = ({
  label,
  name,
  options,
  control,
}) => {
  return (
    <Styled.SelectWrapper>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select className={drukFont.className} options={options} {...field} />
        )}
      />
    </Styled.SelectWrapper>
  );
};

export default BasicSelect;
