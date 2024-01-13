import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    orientation: 'portrait',
    display: 'standalone',
    dir: 'auto',
    lang: 'en',
    name: 'Berserker Program',
    short_name: 'BSKR PGRM',
    start_url: '/',
    scope: '/',
    theme_color: '#000000',
    background_color: '#000000',
    icons: [
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: 'icon512_maskable.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        src: 'icon512_rounded.png',
        type: 'image/png',
      },
    ],
  };
}
