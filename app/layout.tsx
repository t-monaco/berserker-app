import StyledComponentsRegistry from '@/lib/registry';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata, Viewport } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { drukFont } from './fonts/fonts';
import './styles/globals.scss';

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
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
          />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
