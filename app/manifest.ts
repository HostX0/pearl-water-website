import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pearl Purified Water | مياه اللؤلؤة',
    short_name: 'Pearl Water',
    description: 'Pearl purified bottled water in Iraq.',
    start_url: '/ar',
    display: 'standalone',
    background_color: '#F7F8FA',
    theme_color: '#0A4E93',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
