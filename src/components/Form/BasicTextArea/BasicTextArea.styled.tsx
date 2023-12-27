'use client';

import styled from 'styled-components';

export const TextAreaWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  gap: 0.5rem;

  > label {
    font-size: 12px;
  }

  > textarea {
    width: 100%;
    max-width: 100%;
    border: 2px solid var(--secondary-background-color);
    background-color: var(--secondary-background-color);
    border-radius: 7px;
    outline: none;
    padding: 1rem;
    overflow-y: scroll;

    &:focus {
      border-color: var(--primary-color);
    }
  }

  span.error-msg {
    font-size: 12px;
    color: var(--secondary-color);
  }
`;
