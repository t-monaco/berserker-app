'use client';

import styled from 'styled-components';

export const WorkoutCreateWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.75rem;

  > .divider {
    width: 60%;
    height: 3px;
    border-radius: 2px;
    background-color: var(--primary-color);
  }
`;
