'use client';

import { Modal } from 'antd';
import styled from 'styled-components';

export const CalculatorModal = styled(Modal)`
  .ant-modal-content {
    background-color: var(--secondary-background-color);
    border-radius: 7px;
    color: var(--primary-font-color);
    height: 60vh;
    padding: 1.25rem 1rem;
  }

  .ant-modal-body {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;

    h1 {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export const CalculatorForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.5rem;
  width: 100%;

  input {
    outline: none;
    border-radius: 0;
  }
`;

export const PercentagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  width: 100%;
`;

export const RMWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  font-size: 1rem;
  gap: 1rem;
  justify-content: center;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--primary-color);
    text-align: center;
    width: 5rem;
  }
`;

export const PercentageBlock = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--primary-color);
    text-align: center;
    width: 5rem;
  }

  .arrow-wrapper {
    display: grid;
    font-size: 2em;
    place-items: center;
  }

  p {
    text-align: right;
    flex: 1;
  }

  button {
    background-color: var(--secondary-color);
    padding: 0.2rem 0.5rem;
    border-radius: 7px;
  }
`;

export const FormButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  button {
    border-radius: 7px;
    display: grid;
    flex: 1;
    padding: 0.5rem;
    place-items: center;
  }
  .reset {
    background-color: var(--secondary-color);
  }
  .add {
    border: 3px solid var(--primary-color);
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`;
