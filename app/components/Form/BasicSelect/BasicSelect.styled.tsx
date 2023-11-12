'use client';

import styled from 'styled-components';
import { Select } from 'antd';

export const SelectWrapper = styled.div<object>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  > label {
    font-size: 12px;
  }
`;

export const SelectInput = styled(Select)`
  &.ant-select {
    height: 2.8rem;

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
