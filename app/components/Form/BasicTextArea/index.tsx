import { messinaFont } from '@/app/fonts/fonts';
import * as Styled from './BasicTextArea.styled';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../../WorkoutCreate';

type BasicTextAreaProps = {
  label: string;
  name: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
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
