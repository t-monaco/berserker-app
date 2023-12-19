import StyledComponentsRegistry from '@/lib/registry';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata, Viewport } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { drukFont } from './fonts/fonts';
import './styles/globals.scss';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Berserker Program',
  description: 'Berserker Program',
  generator: 'Next.js',
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
  themeColor: 'black',
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
        <Head>
          <link
            rel="preload"
            href="/api/data"
            as="fetch"
            crossOrigin="anonymous"
          />
        </Head>
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
