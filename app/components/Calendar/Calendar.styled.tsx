'use client';

import styled from 'styled-components';

export const DatesWrapper = styled.div<object>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.7rem;
  flex-shrink: 0;
`;
