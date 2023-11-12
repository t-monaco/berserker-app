import { messinaFont } from '@/app/fonts/fonts';
import * as Styled from './BasicTextArea.styled';

type BasicTextAreaProps = { label: string; name: string };

const BasicTextArea: React.FC<BasicTextAreaProps> = ({ label, name }) => {
  return (
    <Styled.TextAreaWrapper>
      <label htmlFor={name}>{label}</label>
      <textarea
        placeholder="Write workout..."
        className={messinaFont.className}
        name={name}
        cols={30}
        rows={10}
      ></textarea>
    </Styled.TextAreaWrapper>
  );
};

export default BasicTextArea;
