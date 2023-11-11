import localFont from 'next/font/local';

export const drukFont = localFont({
  src: './FontsFree-Net-Druk-Wide-Medium.ttf',
});

export const messinaFont = localFont({
  src: [
    { path: './MessinaSans-Regular.ttf' },
    { path: './MessinaSans-Black.ttf' },
    { path: './MessinaSans-Bold.ttf' },
    { path: './MessinaSans-Book.ttf' },
    { path: './MessinaSans-Light.ttf' },
    { path: './MessinaSans-SemiBold.ttf' },
  ],
});
