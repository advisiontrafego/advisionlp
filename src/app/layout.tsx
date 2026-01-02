import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LazyWhatsAppWidget } from "@/components/LazyWhatsAppWidget";
import { SkipLink } from "@/components/SkipLink";
import { MotionProvider } from "@/components/MotionProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600"],
  display: "optional",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://advisionagencia.com.br'),
  title: {
    default: "Advision | Tráfego Pago",
    template: "%s | Advision"
  },
  description: "Agência de tráfego pago especializada em Google Ads, Meta Ads e TikTok Ads. Transformamos investimento em anúncios em crescimento real e mensurável para seu negócio.",
  keywords: [
    "tráfego pago", 
    "gestão de tráfego pago", 
    "agência de tráfego pago",
    "google ads",
    "meta ads",
    "facebook ads",
    "instagram ads",
    "tiktok ads",
    "campanhas de performance", 
    "otimização de conversão", 
    "ROI marketing digital",
    "anúncios online",
    "marketing de performance",
    "gestão de campanhas",
    "tráfego pago são paulo", 
    "tráfego pago rio de janeiro", 
    "tráfego pago pouso alegre",
    "advision"
  ],
  authors: [{ name: 'Advision' }],
  creator: 'Advision',
  publisher: 'Advision',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://advisionagencia.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://advisionagencia.com.br',
    siteName: 'Advision',
    title: 'Advision | Tráfego Pago - Google Ads, Meta Ads e TikTok Ads',
    description: 'Agência de tráfego pago especializada em Google Ads, Meta Ads e TikTok Ads. Transformamos investimento em anúncios em crescimento real e mensurável.',
    images: [{
      url: '/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'Advision - Agência de Tráfego Pago',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advision | Tráfego Pago - Google Ads, Meta Ads e TikTok Ads',
    description: 'Agência de tráfego pago especializada em crescimento mensurável. Google Ads, Meta Ads e TikTok Ads.',
    images: ['/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Advision',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/android-chrome-512x512.png' },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://advisionagencia.com.br/#organization",
  "name": "Advision",
  "alternateName": "Advision Agência de Tráfego Pago",
  "description": "Agência de Tráfego Pago especializada em crescimento previsível para empresas",
  "url": "https://advisionagencia.com.br",
  "logo": {
    "@type": "ImageObject",
    "url": "https://advisionagencia.com.br/android-chrome-512x512.png",
    "width": 512,
    "height": 512
  },
  "image": "https://advisionagencia.com.br/android-chrome-512x512.png",
  "sameAs": [
    "https://www.instagram.com/advision.br",
    "https://wa.me/553592377121"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "9",
    "bestRating": "5",
    "worstRating": "1"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-35-9237-7121",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Pouso Alegre",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    }
  ],
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": "-22.2308",
      "longitude": "-45.9364",
      "name": "Pouso Alegre, MG"
    },
    {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333",
      "name": "São Paulo, SP"
    },
    {
      "@type": "GeoCoordinates",
      "latitude": "-22.9068",
      "longitude": "-43.1729",
      "name": "Rio de Janeiro, RJ"
    }
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Tráfego Pago e Marketing Digital",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestão de Tráfego Pago",
          "description": "Gestão profissional de campanhas de tráfego pago com foco em ROI"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Digital",
          "description": "Estratégias completas de marketing digital para crescimento empresarial"
        }
      }
    ]
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://advisionagencia.com.br/#service",
  "serviceType": "Gestão de Tráfego Pago",
  "name": "Gestão de Tráfego Pago",
  "provider": {
    "@type": "Organization",
    "@id": "https://advisionagencia.com.br/#organization",
    "name": "Advision",
    "url": "https://advisionagencia.com.br"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "description": "Transformamos tráfego pago, dados e estratégia em crescimento real para empresas. Gestão profissional de campanhas de performance com foco em ROI e otimização de conversão.",
  "brand": {
    "@type": "Brand",
    "name": "Advision"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "BRL"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://advisionagencia.com.br/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é gestão de tráfego pago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gestão de tráfego pago é o processo estratégico de criar, otimizar e analisar campanhas publicitárias pagas em plataformas digitais como Google Ads, Meta Ads e outras. O objetivo é atrair visitantes qualificados para seu negócio e convertê-los em clientes, maximizando o retorno sobre investimento (ROI)."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a gestão de tráfego pago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A gestão de tráfego pago funciona através de análise de dados, criação de campanhas estratégicas, segmentação de público, otimização contínua de conversão e acompanhamento de métricas de performance. Cada decisão é baseada em dados reais para garantir crescimento previsível."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custa gestão de tráfego pago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O investimento em gestão de tráfego pago varia conforme os objetivos do negócio, plataformas utilizadas e competição do mercado. A Advision trabalha com estratégias personalizadas para maximizar resultados dentro do orçamento disponível. Entre em contato para uma consultoria gratuita."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre tráfego pago e orgânico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tráfego pago são visitantes que chegam ao seu site através de anúncios pagos, gerando resultados imediatos e escaláveis. Tráfego orgânico vem de buscas naturais e SEO, sendo uma estratégia de longo prazo. O ideal é combinar ambas as estratégias para crescimento sustentável."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva para ver resultados com tráfego pago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Com tráfego pago, os primeiros resultados podem aparecer em poucos dias após o lançamento das campanhas. Porém, a otimização contínua nos primeiros 30-60 dias é essencial para maximizar o ROI e alcançar performance consistente."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://advisionagencia.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Serviços",
      "item": "https://advisionagencia.com.br#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Método",
      "item": "https://advisionagencia.com.br#how-it-works"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Depoimentos",
      "item": "https://advisionagencia.com.br#testimonials"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={montserrat.variable}>
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            {children}
            <LazyWhatsAppWidget />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
