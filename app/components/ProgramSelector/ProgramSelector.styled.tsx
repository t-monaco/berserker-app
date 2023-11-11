'use client';
import styled from 'styled-components';

export const ProgramSelectWrapper = styled.div<object>`
  background-color: var(--primary-color);
  color: var(--secondary-font-color);
  padding: 36px 30px 36px 16px;
  border-radius: 7px 50px 50px 7px;
  align-items: center;
`;

export const SelectedProgramWrapper = styled.div<object>`
  display: flex;
  justify-content: space-between;

  .selected-program {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .select-arrow {
    font-size: 2.5rem;
  }
`;

export const ProgramsList = styled.ul<object>`
  display: flex;
  flex-direction: column;

  li {
    padding: 0.5rem 1rem;
  }

  .selected {
    background-color: var(--primary-background-color);
    color: var(--primary-color);
  }
`;
