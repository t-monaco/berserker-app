import { drukFont } from '@/app/fonts/fonts';
import * as Styled from './BasicSelect.styled';

type BasicSelectProps = { label: string; name: string };

const demoOpt = [
  { value: 'berserker lp', label: 'BERSERKER LP' },
  { value: 'odin', label: 'ODIN' },
  { value: 'valkyrie', label: 'VALKYRIE' },
  { value: 'fenrir', label: 'FENRIR' },
];

const BasicSelect: React.FC<BasicSelectProps> = ({ label, name }) => {
  return (
    <Styled.SelectWrapper>
      <label htmlFor={name}>{label}</label>
      <Styled.SelectInput
        className={drukFont.className}
        defaultValue="berserker lp"
        options={demoOpt}
      />
    </Styled.SelectWrapper>
  );
};

export default BasicSelect;
