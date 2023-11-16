'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './ProgramSelector.styled';
import { SelectOption } from '../Form/BasicSelect';

type ProgramSelectorProps = {
  programs: SelectOption[];
};

const ProgramSelector: React.FC<ProgramSelectorProps> = ({ programs }) => {
  const [showList, setShowList] = useState(false);
  const [selectedProgram, SetSelectedProgram] = useState(programs[0]);

  const handleOnClick = (program: SelectOption) => {
    SetSelectedProgram(program);
    setShowList(false);
  };

  return (
    <Styled.ProgramSelectWrapper position="left">
      <Styled.SelectedProgramWrapper>
        <h1 className="selected-program">{selectedProgram.label}</h1>
        <FiChevronDown
          className={`select-arrow ${showList ? 'open' : ''}`}
          onClick={() => setShowList(!showList)}
        />
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
