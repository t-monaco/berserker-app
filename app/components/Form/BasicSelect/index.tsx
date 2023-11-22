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
  // TODO: Use generics, same as BasicInput
  control: Control<IFormInput, any>;
  error?: string;
};

const BasicSelect: React.FC<BasicSelectProps> = ({
  label,
  name,
  options,
  control,
  error,
}) => {
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
