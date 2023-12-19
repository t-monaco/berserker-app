'use client';
import styled from 'styled-components';
import { BasicHero } from './../Generics/Generics.styled';

export const ProgramSelectWrapper = styled(BasicHero)`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`;

export const SelectedProgramWrapper = styled.div<object>`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

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
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ selected }) =>
    selected ? 'var(--primary-background-color)' : ''};
  color: ${({ selected }) => (selected ? 'var(--primary-color)' : '')};
`;
