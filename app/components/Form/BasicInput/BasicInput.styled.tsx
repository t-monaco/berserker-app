'use client';

import styled from 'styled-components';

export const InputWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  gap: 0.5rem;

  > label {
    font-size: 12px;
  }

  > input {
    padding: 0.2rem 1rem;
    height: 2.8rem;
    outline: none;
    width: 100%;
    border: 2px solid var(--secondary-background-color);
    background-color: var(--secondary-background-color);
    border-radius: 7px;

    &:focus {
      border-color: var(--primary-color);
    }
  }

  span.error-msg {
    font-size: 12px;
    color: var(--secondary-color);
  }
`;
