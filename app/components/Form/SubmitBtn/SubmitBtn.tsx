import { ButtonHTMLAttributes } from 'react';
import * as Styled from './SubmitBtn.styled';

export type BasicBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  priority?: 'primary' | 'secondary';
};

const BasicBtn: React.FC<BasicBtnProps> = ({
  priority = 'primary',
  children,
  ...props
}) => {
  return (
    <Styled.BasicBtnWrapper priority={priority} {...props}>
      {children}
    </Styled.BasicBtnWrapper>
  );
};

export default BasicBtn;
