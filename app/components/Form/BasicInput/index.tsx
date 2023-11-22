import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import * as Styled from './BasicInput.styled';
import { InputHTMLAttributes } from 'react';

type BasicInputProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    id?: number;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: string;
  };

const BasicInput = <T extends FieldValues>({
  name,
  register,
  label,
  error,
  ...props
}: BasicInputProps<T>) => {
  return (
    <Styled.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        autoComplete="off"
        type="text"
        {...register(name, { required: 'Field required.' })}
        {...props}
      />
      {error && <span className="error-msg">{error}</span>}
    </Styled.InputWrapper>
  );
};

export default BasicInput;
