'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

const Provider: React.FC<PropsWithChildren<object>> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
