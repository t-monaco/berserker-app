import localFont from 'next/font/local';

export const drukFont = localFont({
  src: './FontsFree-Net-Druk-Wide-Medium.ttf',
  variable: '--font-druk',
});

export const messinaFont = localFont({
  src: [
    { path: './MessinaSans-Light.ttf', weight: '200' },
    { path: './MessinaSans-Book.ttf', weight: '300' },
    { path: './MessinaSans-Regular.ttf', weight: '400' },
    { path: './MessinaSans-SemiBold.ttf', weight: '500' },
    { path: './MessinaSans-Bold.ttf', weight: '600' },
    { path: './MessinaSans-Black.ttf', weight: '800' },
  ],
  variable: '--font-messina-sans',
});
