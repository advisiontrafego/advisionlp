import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Advision - Agência de Tráfego Pago em Pouso Alegre | Google Ads, Meta Ads e TikTok Ads',
    short_name: 'Advision Trafego Pago e Growth Marketing',
    description: 'Agência de tráfego pago e Growth Marketing especializada em Google Ads, Meta Ads e TikTok Ads. Gestão profissional de campanhas para empresas que querem crescer com ROI mensurável. Tráfego pago Pouso Alegre.',
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
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
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
