import type { Metadata } from 'next';

import './styles/globals.scss';
import StyledComponentsRegistry from '@/lib/registry';
import { drukFont } from './fonts/fonts';

export const metadata: Metadata = {
  title: 'Berserker Program',
  description: 'Berserker Program',
  manifest: '/manifest.json',
  icons: { apple: 'icon512_rounded.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={drukFont.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
