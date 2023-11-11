'use client';

import { messinaFont } from '@/app/fonts/fonts';
import styled from 'styled-components';

export const WorkoutBlock = styled.div<object>`
  background-color: var(--secondary-background-color);
  border-radius: 7px;
  padding: 1.25rem 1rem;
  max-height: 12rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: visible;

  &.overflow {
    padding-bottom: 5px;
    &::after {
      position: absolute;
      content: '';
      height: 2.5rem;
      width: 100%;
      background-color: red;
      bottom: 0;
      left: 0;
      border-radius: 0 0 7px 7px;
      background: rgb(34, 34, 34);
      background: linear-gradient(
        0deg,
        rgba(34, 34, 34, 1) 0%,
        rgba(34, 34, 34, 1) 20%,
        rgba(34, 34, 34, 0.5256696428571428) 77%,
        rgba(34, 34, 34, 0) 100%
      );
    }
  }
`;

export const WorkoutHeader = styled.div<object>`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;

  .title {
    font-size: 1.5rem;
    flex-basis: 100%;
  }

  .type {
    background-color: var(--primary-background-color);
    color: var(--primary-color);
    border-radius: 4px;
    font-size: 0.6rem;
    padding: 0.1rem 0.5rem;
    display: inline-flex;
  }
`;

export const WorkoutCategory = styled.div<object>`
  font-size: 0.7rem;
  border-radius: 4px;
  padding: 0.1rem 0.6rem;
  position: absolute;
  background-color: var(--secondary-color);
  right: 1rem;
  top: 0;
  transform: translateY(-50%);
  display: block;
`;

export const WorkoutDescription = styled.div<object>`
  white-space: pre-line;
`;
