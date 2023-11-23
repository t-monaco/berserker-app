import { ButtonHTMLAttributes, ComponentProps } from 'react';
import * as Styled from './BasicBtn.styled';

export type BasicBtnProps = {
  priority?: 'primary' | 'secondary';
  position?: 'left' | 'right';
} & ComponentProps<'button'>;

const BasicBtn: React.FC<BasicBtnProps> = ({
  priority = 'primary',
  position,
  children,
  ...props
}) => {
  return (
    <Styled.BasicBtnWrapper $priority={priority} {...props}>
      {children}
    </Styled.BasicBtnWrapper>
  );
};

export default BasicBtn;
