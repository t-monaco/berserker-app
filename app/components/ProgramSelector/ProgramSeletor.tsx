type ProgramSelectorProps = object;
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './ProgramSelector.styled';

const ProgramSelector: React.FC<ProgramSelectorProps> = () => {
  return (
    <Styled.ProgramSelectContainer>
      <Styled.SelectedProgramContainer>
        <h1 className="selected-program">BERSERKER LP</h1>
        <FiChevronDown className="select-arrow" />
      </Styled.SelectedProgramContainer>
      <Styled.ProgramsList>
        <li>ODIN</li>
        <li className={'selected'}>BERSERKER LP</li>
        <li>VALKYRIE</li>
        <li>FENRIR</li>
      </Styled.ProgramsList>
    </Styled.ProgramSelectContainer>
  );
};

export default ProgramSelector;