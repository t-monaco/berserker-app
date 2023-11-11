'use client';

import styled from 'styled-components';

export const CalendarWrapper = styled.div<object>`
  background-color: var(--primary-background-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  flex-shrink: 0;

  .month-year {
    text-align: center;
    font-size: 10px;
  }
`;

export const DatesWrapper = styled.div<object>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.7rem;
`;
