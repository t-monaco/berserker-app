'use client';

import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 14px;
  flex-shrink: 0;
`;

export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;

  span {
    cursor: pointer;
    display: grid;
    font-size: 2rem;
    place-items: center;
    flex-grow: 1;

    &.left {
      justify-content: flex-start;
    }

    &.right {
      justify-content: flex-end;
    }
  }
`;

export const DatesWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.7rem;
  flex-shrink: 0;
`;
