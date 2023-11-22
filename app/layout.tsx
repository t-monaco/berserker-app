import type { Metadata } from 'next';

import './styles/globals.scss';
import StyledComponentsRegistry from '@/lib/registry';
import { drukFont } from './fonts/fonts';
import { Toaster } from 'react-hot-toast';
import Provider from './provider';

export const metadata: Metadata = {
  title: 'Berserker Program',
  description: 'Berserker Program',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={drukFont.className}>
        <Toaster />
        <Provider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
