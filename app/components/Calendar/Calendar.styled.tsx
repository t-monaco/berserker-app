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
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-wrapper {
      background-color: var(--primary-color);
      border-radius: 7px;
      color: var(--secondary-font-color);
      cursor: pointer;
      display: grid;
      font-size: 1.2rem;
      padding: 0.2rem 0.4rem;
      place-items: center;

      svg.rotate {
        animation: rotate-animation 1s infinite linear;
      }
      @keyframes rotate-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
    }

    a {
      border-radius: 7px;
      cursor: pointer;
      background-color: var(--primary-color);
      padding: 0.2rem 0.4rem;
      color: var(--secondary-font-color);
      border: 2px solid var(--primary-color);

      &:active {
        color: var(--primary-color);
        background-color: var(--primary-background-color);
      }
    }
  }
`;

export const DatesWrapper = styled.div<object>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.7rem;
`;
