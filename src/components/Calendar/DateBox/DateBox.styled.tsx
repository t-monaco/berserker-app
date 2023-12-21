'use client';

import styled from 'styled-components';

export const DateBoxWrapper = styled.div<{ selected: boolean }>`
  align-items: center;
  border-radius: 7px;
  border: 2px solid;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  justify-content: center;
  margin: 0;
  padding: 6px;

  background-color: ${({ selected }) =>
    selected
      ? 'var(--primary-background-color)'
      : 'var(--secondary-background-color)'};
  border-color: ${({ selected }) =>
    selected ? 'var(--primary-color)' : 'var(--secondary-background-color)'};
  color: ${({ selected }) =>
    selected ? 'var(--primary-color)' : 'var(--primary-font-color)'};
`;
