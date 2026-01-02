import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Advision - Agência de Tráfego Pago',
    short_name: 'Advision',
    description: 'Agência especializada em Google Ads, Meta Ads e TikTok Ads. Transformamos investimento em crescimento mensurável.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3449EA',
    categories: ['business', 'marketing', 'advertising'],
    lang: 'pt-BR',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
