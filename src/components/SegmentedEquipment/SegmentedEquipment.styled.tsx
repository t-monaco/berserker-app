import { Segmented } from 'antd';
import styled from 'styled-components';

export const SegmentedWrapper = styled(Segmented)`
  background-color: var(--secondary-background-color);
  color: var(--primary-font-color);
  font-weight: 600;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem;

  & .ant-segmented-group {
    width: 100%;
    justify-content: space-around;

    &.ant-segmented-thumb,
    .ant-segmented-thumb-motion,
    .ant-segmented-thumb-motion-appear,
    .ant-segmented-thumb-motion-appear-active {
      background-color: var(--primary-color);
    }

    & .ant-segmented-item {
      display: grid;
      place-items: center;
      padding: 0.5rem;
      flex: 1;

      svg,
      path {
        height: 100%;
        fill: var(--primary-font-color);
      }

      &-label {
        width: 100%;
      }

      & .barbell-wrapper,
      .db-kb-wrapper {
        display: flex;
        justify-content: space-around;
        height: 2rem;
      }

      & .barbell-wrapper {
        svg {
          transform: scale(1.8);
        }
      }

      &-selected {
        background-color: var(--primary-color);
        color: var(--secondary-font-color);

        svg,
        path {
          fill: var(--secondary-font-color);
        }
      }
    }
  }
`;
