'use client';

import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    background-color: var(--secondary-background-color);
    border-radius: 7px;
    color: var(--primary-font-color);
    min-height: 60vh;
    padding: 2.5rem 1.2rem;
  }

  .ant-modal-close {
    color: var(--primary-font-color);
    height: 24px;
    width: 24px;

    .ant-modal-close-x,
    svg {
      height: 100%;
      width: 100%;
    }
  }

  .ant-modal-body {
    align-items: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    justify-content: space-around;
    text-align: center;

    * {
      flex-shrink: 0;
    }

    .share {
      color: var(--primary-color);
    }

    button {
      border: 2px solid var(--primary-color);
      border-radius: 7px;
      color: var(--primary-color);
      padding: 0.4rem;
      width: 100%;
    }
  }
`;
