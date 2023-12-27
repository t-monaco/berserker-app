'use client';

import styled from 'styled-components';

export const BasicBtnWrapper = styled.button<{
  $priority: 'primary' | 'secondary';
  $bgColor: string;
  $fontColor?: string;
}>`
  align-items: center;
  background-color: ${({ $priority, $bgColor }) =>
    $priority === 'primary' ? $bgColor : 'var(--primary-background-color)'};
  border-radius: 7px;
  border: ${({ $bgColor }) => `3px solid ${$bgColor}`};
  color: ${({ $priority, $bgColor, $fontColor }) =>
    $priority === 'primary' ? $fontColor : $bgColor};
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  font-size: 16px;
  outline: none;
  padding: 1rem 4rem;
  width: 100%;
`;
