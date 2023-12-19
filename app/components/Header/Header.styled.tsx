'use client';

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: var(--primary-background-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;
  width: 100%;

  .month-year {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: center;

    p {
      font-size: 14px;
    }

    a {
      font-size: 12px;
    }

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
      background-color: var(--primary-color);
      border-radius: 7px;
      border: 2px solid var(--primary-color);
      color: var(--secondary-font-color);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0.2rem 0.4rem;

      &:active {
        background-color: var(--primary-background-color);
        color: var(--primary-color);
      }
    }
  }
`;
