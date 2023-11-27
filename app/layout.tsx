import StyledComponentsRegistry from '@/lib/registry';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import { drukFont } from './fonts/fonts';
import './styles/globals.scss';
import { dark } from '@clerk/themes';

export const metadata: Metadata = {
  title: 'Berserker Program',
  description: 'Berserker Program',
  appleWebApp: {
    capable: true,
    title: 'Berserker Program',
    statusBarStyle: 'black-translucent',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#adfe19' },
      }}
    >
      <html lang="en">
        <body className={drukFont.className}>
          <Toaster />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
