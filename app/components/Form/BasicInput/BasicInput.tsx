import * as Styled from './BasicInput.styled';

type BasicInputProps = {
  label: string;
  name: string;
};

const BasicInput: React.FC<BasicInputProps> = ({ label, name }) => {
  return (
    <Styled.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
    </Styled.InputWrapper>
  );
};

export default BasicInput;
