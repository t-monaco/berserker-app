'use client';

import styled from 'styled-components';
import { BasicBtnProps } from '.';

export const BasicBtnWrapper = styled.button<BasicBtnProps>`
  align-items: center;
  background-color: ${({ priority }) =>
    priority === 'primary'
      ? 'var(--primary-color)'
      : 'var(--primary-background-color)'};
  border-radius: 7px;
  border: 3px solid var(--primary-color);
  color: ${({ priority }) =>
    priority === 'primary'
      ? 'var(--secondary-font-color)'
      : 'var(--primary-color)'};
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  font-size: 16px;
  outline: none;
  padding: 1rem 4rem;
  width: 100%;
`;
