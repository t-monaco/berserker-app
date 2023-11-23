'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './ProgramSelector.styled';
import { SelectOption } from '../Form/BasicSelect';

type ProgramSelectorProps = {
  programs: SelectOption[];
  selectedProgram: SelectOption;
  setSelectedProgram: Dispatch<SetStateAction<SelectOption>>;
};

const ProgramSelector: React.FC<ProgramSelectorProps> = ({
  programs,
  selectedProgram,
  setSelectedProgram,
}) => {
  const [showList, setShowList] = useState(false);

  const handleOnClick = (program: SelectOption) => {
    setSelectedProgram(program);
    setShowList(false);
  };

  return (
    <Styled.ProgramSelectWrapper position="left">
      <Styled.SelectedProgramWrapper onClick={() => setShowList(!showList)}>
        <h1 className="selected-program">{selectedProgram.label}</h1>
        <FiChevronDown className={`select-arrow ${showList ? 'open' : ''}`} />
      </Styled.SelectedProgramWrapper>
      <Styled.ProgramsList className={showList ? 'open' : ''}>
        {programs.map((program) => (
          <Styled.ProgramItem
            key={program.value}
            selected={program.value === selectedProgram.value}
            onClick={() => handleOnClick(program)}
          >
            {program.label}
          </Styled.ProgramItem>
        ))}
      </Styled.ProgramsList>
    </Styled.ProgramSelectWrapper>
  );
};

export default ProgramSelector;
