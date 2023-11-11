'use client';
import styled from 'styled-components';

export const ProgramSelectWrapper = styled.div<object>`
  background-color: var(--primary-color);
  color: var(--secondary-font-color);
  padding: 36px 30px 36px 16px;
  border-radius: 7px 50px 50px 7px;
  align-items: stretch;
  display: flex;
  flex-direction: column;
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

    &.open {
      transform: rotate(180deg);
    }
  }
`;

export const ProgramsList = styled.ul<object>`
  display: none;
  transform: scaleY(0);
  transition: all 0.5s ease;
  transform-origin: top;

  &.open {
    flex-direction: column;
    transform: scaleY(1);
    display: flex;
  }
`;

export const ProgramItem = styled.li<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ selected }) =>
    selected ? 'var(--primary-background-color)' : ''};
  color: ${({ selected }) => (selected ? 'var(--primary-color)' : '')};
`;
