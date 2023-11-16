import { messinaFont } from '@/app/fonts/fonts';
import * as Styled from './BasicTextArea.styled';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../../WorkoutCreate';

type BasicTextAreaProps = {
  label: string;
  name: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
};

const BasicTextArea: React.FC<BasicTextAreaProps> = ({
  label,
  name,
  register,
}) => {
  return (
    <Styled.TextAreaWrapper>
      <label htmlFor={name}>{label}</label>
      <textarea
        placeholder="Write workout..."
        className={messinaFont.className}
        cols={30}
        rows={10}
        {...register(name)}
      />
    </Styled.TextAreaWrapper>
  );
};

export default BasicTextArea;
