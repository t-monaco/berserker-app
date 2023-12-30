'use client';

import { Modal } from 'antd';
import styled from 'styled-components';
import { MdDone } from 'react-icons/md';

export const BlockModal = styled(Modal)`
  overflow: visible;

  .ant-modal-content {
    overflow: visible;
    background-color: var(--secondary-background-color);
    border-radius: 7px;
    padding: 1.25rem 1rem;
    position: relative;
  }

  .ant-modal-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const BlockHeader = styled.div<object>`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  color: var(--primary-font-color);

  .title {
    font-size: 1.5rem;
    flex-basis: 100%;
  }

  .duration {
    background-color: var(--primary-background-color);
    color: var(--primary-color);
    border-radius: 4px;
    font-size: 0.6rem;
    padding: 0.1rem 0.5rem;
    display: inline-flex;
  }
`;

export const BlockCategory = styled.div<object>`
  color: var(--primary-font-color);
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

export const BlockDescription = styled.div<object>`
  color: var(--primary-font-color);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 0.5rem;
  overflow-y: hidden;
  white-space: pre-line;
  /* word-break: break-all; */

  > * {
    flex-shrink: 0;
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    list-style: inside;
  }

  a {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

export const DoneIcon = styled(MdDone)`
  border-radius: 7px;
  border-radius: 50%;
  border: solid 2px var(--primary-font-color);
  color: var(--primary-font-color);
  position: absolute;
  display: block;
  bottom: 1rem;
  right: 1rem;
  z-index: 1;
  font-size: 2.2rem;
  opacity: 0.5;
  padding: 0.2rem;

  &.completed {
    border-color: var(--primary-color);
    color: var(--primary-color);
    opacity: 1;
  }
`;
