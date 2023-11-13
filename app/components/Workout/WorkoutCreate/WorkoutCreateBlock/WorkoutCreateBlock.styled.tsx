'use client';

import styled from 'styled-components';

export const WorkoutCreateBlockWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  position: relative;
`;

export const DeleteBlockWrapper = styled.div<object>`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: var(--secondary-color);
    font-size: 12px;
    border-radius: 7px;
    padding: 0.25rem 0.6rem;
  }
`;
