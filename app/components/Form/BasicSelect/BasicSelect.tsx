import { drukFont } from '@/app/fonts/fonts';
import * as Styled from './BasicSelect.styled';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../../Workout/WorkoutCreate/WorkoutCreate';

type SelectOption = { label: string; value: string };

type BasicSelectProps = {
  label: string;
  name: string;
  options: SelectOption[];
};

const BasicSelect: React.FC<BasicSelectProps> = ({ label, name, options }) => {
  return (
    <Styled.SelectWrapper>
      <label htmlFor={name}>{label}</label>
      <Styled.SelectInput
        className={drukFont.className}
        // TODO: Add prop to set default value
        defaultValue={options[0].value}
        options={options}
      />
    </Styled.SelectWrapper>
  );
};

export default BasicSelect;
