import { ButtonHTMLAttributes, ComponentProps } from 'react';
import * as Styled from './BasicBtn.styled';

export type BasicBtnProps = {
  priority?: 'primary' | 'secondary';
  position?: 'left' | 'right';
  bgColor: string;
  fontColor?: string;
} & ComponentProps<'button'>;

const BasicBtn: React.FC<BasicBtnProps> = ({
  priority = 'primary',
  position,
  bgColor,
  fontColor,
  children,
  ...props
}) => {
  return (
    <Styled.BasicBtnWrapper
      $priority={priority}
      $bgColor={bgColor}
      $fontColor={fontColor}
      {...props}
    >
      {children}
    </Styled.BasicBtnWrapper>
  );
};

export default BasicBtn;
