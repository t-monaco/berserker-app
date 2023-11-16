'use client';
import styled from 'styled-components';

export const BasicHero = styled.div<{ position: 'right' | 'left' }>`
  background-color: var(--primary-color);
  border-radius: ${({ position }) =>
    position === 'left'
      ? '7px 60px 60px 7px'
      : position === 'right'
      ? '60px 7px 7px 60px'
      : '7px'};
  color: var(--secondary-font-color);
  cursor: pointer;
  padding: 36px 30px 36px 16px;
  text-align: ${({ position }) => (position ? position : 'inherit')};
`;
