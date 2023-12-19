import { messinaFont } from '@/app/fonts/fonts';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import * as Styled from './BasicTextArea.styled';

type BasicTextAreaProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
};

const BasicTextArea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
}: BasicTextAreaProps<T>) => {
  return (
    <Styled.TextAreaWrapper>
      <label htmlFor={name}>{label}</label>
      <textarea
        placeholder="Write workout..."
        className={messinaFont.className}
        cols={30}
        rows={10}
        {...register(name, { required: 'Field required.' })}
      />
      {error && <span className="error-msg">{error}</span>}
    </Styled.TextAreaWrapper>
  );
};

export default BasicTextArea;
