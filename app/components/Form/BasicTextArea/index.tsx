import { messinaFont } from '@/app/fonts/fonts';
import * as Styled from './BasicTextArea.styled';
import { Path, UseFormRegister } from 'react-hook-form';
import { CreateWorkoutForm } from '@/types/types';

// TODO: use generics
type BasicTextAreaProps = {
  label: string;
  name: Path<CreateWorkoutForm>;
  register: UseFormRegister<CreateWorkoutForm>;
  error?: string;
};

const BasicTextArea: React.FC<BasicTextAreaProps> = ({
  label,
  name,
  register,
  error,
}) => {
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
