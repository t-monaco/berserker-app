import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import * as Styled from './BasicInput.styled';
import { InputHTMLAttributes } from 'react';

type BasicInputProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    id?: number;
    name: Path<T>;
    register: UseFormRegister<T>;
  };

const BasicInput = <T extends FieldValues>({
  name,
  register,
  label,
  ...props
}: BasicInputProps<T>) => {
  return (
    <Styled.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...register(name)} {...props} />
    </Styled.InputWrapper>
  );
};

export default BasicInput;
