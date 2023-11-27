'use client';

import styled from 'styled-components';

export const SelectWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  gap: 0.5rem;

  > label {
    font-size: 12px;
  }

  span.error-msg {
    font-size: 12px;
    color: var(--secondary-color);
  }

  .ant-select {
    height: 2.8rem;

    * {
      font-size: 16px;
    }

    .ant-select-selector {
      color: var(--primary-font-color);
      background-color: var(--secondary-background-color);
      border: 2px solid var(--secondary-background-color) !important;

      &:focus {
        border-color: var(--primary-color) !important;
      }
    }

    .ant-select-arrow {
      .anticon {
        color: var(--primary-font-color);
        font-size: 16px;
      }
    }
  }

  /* .ant-select-dropdown {
      background-color: blue !important;
    } */
`;
