import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bizleap Development Services',
    short_name: 'Bizleap',
    description: 'Premier Digital Marketing & Website Development Agency in Nagpur. We build high-performance web applications, mobile apps, and scalable digital solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
