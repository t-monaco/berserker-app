'use client';

import styled from 'styled-components';

export const DatePickerWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  > label {
    font-size: 12px;
  }

  .ant-picker {
    height: 2.8rem;
    background-color: var(--secondary-background-color);
    border: 2px solid var(--secondary-background-color);

    .ant-picker-input {
      input {
        color: var(--primary-font-color);
      }
    }

    svg {
      color: var(--primary-font-color);
    }
  }
`;
