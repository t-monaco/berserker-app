import * as Styled from './SubmitBtn.styled';

type SubmitBtnProps = Partial<HTMLButtonElement> & {
  text: string;
  priority?: 'primary' | 'secondary';
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  text,
  priority = 'primary',
}) => {
  return (
    <Styled.SubmitBtnWrapper priority={priority}>
      {text}
    </Styled.SubmitBtnWrapper>
  );
};

export default SubmitBtn;
