import { ButtonHTMLAttributes } from 'react';
import * as Styled from './SubmitBtn.styled';

export type SubmitBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  priority?: 'primary' | 'secondary';
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  text,
  priority = 'primary',
  ...props
}) => {
  return (
    <Styled.SubmitBtnWrapper priority={priority} {...props}>
      {text}
    </Styled.SubmitBtnWrapper>
  );
};

export default SubmitBtn;
