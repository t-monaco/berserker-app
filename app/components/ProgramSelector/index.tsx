'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './ProgramSelector.styled';

type ProgramSelectorProps = object;

const PROGRAM_LIST = ['ODIN', 'BERSERKER LP', 'VALKYRIE', 'FENRIR'];

const ProgramSelector: React.FC<ProgramSelectorProps> = () => {
  const [showList, setShowList] = useState(false);
  const [selectedProgram, SetSelectedProgram] = useState('BERSERKER LP');

  const handleOnClick = (programName: string) => {
    SetSelectedProgram(programName);
    setShowList(false);
  };

  return (
    <Styled.ProgramSelectWrapper position="left">
      <Styled.SelectedProgramWrapper>
        <h1 className="selected-program">{selectedProgram}</h1>
        <FiChevronDown
          className={`select-arrow ${showList ? 'open' : ''}`}
          onClick={() => setShowList(!showList)}
        />
      </Styled.SelectedProgramWrapper>
      <Styled.ProgramsList className={showList ? 'open' : ''}>
        {PROGRAM_LIST.map((programName, idx) => (
          <Styled.ProgramItem
            key={idx}
            selected={programName === selectedProgram}
            onClick={() => handleOnClick(programName)}
          >
            {programName}
          </Styled.ProgramItem>
        ))}
      </Styled.ProgramsList>
    </Styled.ProgramSelectWrapper>
  );
};

export default ProgramSelector;
