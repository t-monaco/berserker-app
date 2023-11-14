import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../../Workout/WorkoutCreate/WorkoutCreate';
import * as Styled from './BasicInput.styled';

type BasicInputProps = {
  label: string;
  id: number;
  name: string;
  register: UseFormRegister<IFormInput>;
};

const BasicInput: React.FC<BasicInputProps> = ({
  label,
  id,
  name,
  register,
}) => {
  return (
    <Styled.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...register(`workouts.${id}.${name}`)} />
    </Styled.InputWrapper>
  );
};

export default BasicInput;
