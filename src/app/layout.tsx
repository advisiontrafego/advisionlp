import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LazyWhatsAppWidget } from "@/components/LazyWhatsAppWidget";
import { SkipLink } from "@/components/SkipLink";
import { MotionProvider } from "@/components/MotionProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://advisionagencia.com.br"),
  title: {
    default: "Advision | Agência de Tráfego Pago e Growth Marketing ",
    template: "%s | Advision - Tráfego Pago e Growth Marketing",
  },
  description:
    "Agência de tráfego pago em Pouso Alegre especializada em Google Ads, Meta Ads e TikTok Ads. Gestão profissional de campanhas para empresas que querem crescer com ROI real e mensurável.",
  keywords: [
    "agência tráfego pago",
    "agência tráfego pago pouso alegre",
    "tráfego pago pouso alegre",
    "pouso alegre agência",
    "tráfego pago",
    "gestão de tráfego pago",
    "agência de tráfego pago",
    "google ads pouso alegre",
    "meta ads pouso alegre",
    "facebook ads pouso alegre",
    "agência marketing digital pouso alegre",
    "tiktok ads",
    "campanhas de performance",
    "otimização de conversão",
    "ROI marketing digital",
    "anúncios online",
    "marketing de performance",
    "gestão de campanhas",
    "agência pouso alegre",
    "marketing pouso alegre",
    "advision",
  ],
  authors: [{ name: "Advision" }],
  creator: "Advision",
  publisher: "Advision",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://advisionagencia.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://advisionagencia.com.br",
    siteName: "Advision - Agência de Tráfego Pago Pouso Alegre",
    title:
      "Agência de Tráfego Pago em Pouso Alegre | Google Ads, Meta Ads e TikTok Ads",
    description:
      "Agência de tráfego pago em Pouso Alegre. Gestão profissional de Google Ads, Meta Ads e TikTok Ads com foco em ROI e crescimento mensurável para seu negócio.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Advision - Agência de Tráfego Pago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência de Tráfego Pago em Pouso Alegre | Advision",
    description:
      "Agência de tráfego pago em Pouso Alegre especializada em crescimento mensurável. Google Ads, Meta Ads e TikTok Ads.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Advision - Tráfego Pago Pouso Alegre",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#3449EA",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://advisionagencia.com.br/#organization",
  name: "Advision - Agência de Tráfego Pago",
  alternateName: "Advision Agência de Tráfego Pago Pouso Alegre",
  description:
    "Agência de Tráfego Pago em Pouso Alegre especializada em crescimento previsível para empresas através de Google Ads, Meta Ads e TikTok Ads",
  url: "https://advisionagencia.com.br",
  logo: {
    "@type": "ImageObject",
    url: "https://advisionagencia.com.br/android-chrome-512x512.png",
    width: 512,
    height: 512,
  },
  image: "https://advisionagencia.com.br/android-chrome-512x512.png",
  sameAs: [
    "https://www.instagram.com/advision.br",
    "https://wa.me/553592377121",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "9",
    bestRating: "5",
    worstRating: "1",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-35-9237-7121",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Pouso Alegre",
      addressRegion: "MG",
      addressCountry: "BR",
      name: "Agência de Tráfego Pago Pouso Alegre",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: "-22.2308",
      longitude: "-45.9364",
      name: "Pouso Alegre, MG",
    },
    {
      "@type": "GeoCoordinates",
      latitude: "-23.5505",
      longitude: "-46.6333",
      name: "São Paulo, SP",
    },
    {
      "@type": "GeoCoordinates",
      latitude: "-22.9068",
      longitude: "-43.1729",
      name: "Rio de Janeiro, RJ",
    },
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Tráfego Pago e Marketing Digital em Pouso Alegre",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestão de Tráfego Pago em Pouso Alegre",
          description:
            "Gestão profissional de campanhas de tráfego pago com foco em ROI para empresas de Pouso Alegre e região",
          areaServed: "Pouso Alegre, MG",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Pouso Alegre",
          description:
            "Campanhas de Google Ads otimizadas para empresas de Pouso Alegre",
          areaServed: "Pouso Alegre, MG",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Meta Ads Pouso Alegre",
          description:
            "Gestão de Facebook Ads e Instagram Ads para empresas de Pouso Alegre",
          areaServed: "Pouso Alegre, MG",
        },
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://advisionagencia.com.br/#service",
  serviceType: "Gestão de Tráfego Pago",
  name: "Agência de Tráfego Pago em Pouso Alegre",
  provider: {
    "@type": "Organization",
    "@id": "https://advisionagencia.com.br/#organization",
    name: "Advision",
    url: "https://advisionagencia.com.br",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Pouso Alegre",
      containedIn: {
        "@type": "State",
        name: "Minas Gerais",
      },
    },
    {
      "@type": "Country",
      name: "Brasil",
    },
  ],
  description:
    "Agência de tráfego pago em Pouso Alegre. Transformamos tráfego pago, dados e estratégia em crescimento real para empresas. Gestão profissional de campanhas de performance com foco em ROI e otimização de conversão.",
  brand: {
    "@type": "Brand",
    name: "Advision",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "BRL",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://advisionagencia.com.br/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é gestão de tráfego pago em Pouso Alegre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gestão de tráfego pago em Pouso Alegre é o processo estratégico de criar, otimizar e analisar campanhas publicitárias pagas em plataformas digitais como Google Ads, Meta Ads e outras. A Advision, agência de tráfego pago em Pouso Alegre, oferece gestão profissional para empresas locais que buscam crescimento com ROI mensurável.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a gestão de tráfego pago em Pouso Alegre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gestão de tráfego pago em Pouso Alegre funciona através de análise de dados, criação de campanhas estratégicas no Google Ads e Meta Ads, segmentação de público local, otimização contínua de conversão e acompanhamento de métricas de performance. Nossa agência em Pouso Alegre trabalha com decisões baseadas em dados reais.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa gestão de tráfego pago em Pouso Alegre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O investimento em gestão de tráfego pago em Pouso Alegre varia conforme os objetivos do negócio, plataformas utilizadas (Google Ads, Meta Ads, TikTok Ads) e competição do mercado. A Advision, agência de tráfego pago em Pouso Alegre, trabalha com estratégias personalizadas para maximizar resultados. Entre em contato para uma consultoria gratuita.",
      },
    },
    {
      "@type": "Question",
      name: "Por que contratar uma agência de tráfego pago em Pouso Alegre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contratar uma agência de tráfego pago em Pouso Alegre garante gestão profissional de campanhas, conhecimento do mercado local, otimização contínua e resultados mensuráveis. A Advision é especialista em Google Ads e Meta Ads para empresas de Pouso Alegre que querem crescer com tráfego pago.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a melhor agência de tráfego pago em Pouso Alegre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Advision é a agência de tráfego pago em Pouso Alegre especializada em Google Ads, Meta Ads e TikTok Ads. Com foco em ROI mensurável e crescimento real, atendemos empresas de Pouso Alegre e região com gestão profissional de tráfego pago e marketing de performance.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para ver resultados com tráfego pago em Pouso Alegre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com tráfego pago em Pouso Alegre, os primeiros resultados podem aparecer em poucos dias após o lançamento das campanhas de Google Ads ou Meta Ads. Porém, a otimização contínua nos primeiros 30-60 dias é essencial para maximizar o ROI. Nossa agência em Pouso Alegre garante acompanhamento constante.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início - Agência Tráfego Pago Pouso Alegre",
      item: "https://advisionagencia.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Serviços de Tráfego Pago",
      item: "https://advisionagencia.com.br#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Método Advision",
      item: "https://advisionagencia.com.br#how-it-works",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Depoimentos Clientes Pouso Alegre",
      item: "https://advisionagencia.com.br#testimonials",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://advisionagencia.com.br/#website",
  url: "https://advisionagencia.com.br",
  name: "Advision - Agência de Tráfego Pago em Pouso Alegre",
  description:
    "Agência de tráfego pago em Pouso Alegre especializada em Google Ads, Meta Ads e TikTok Ads",
  publisher: {
    "@id": "https://advisionagencia.com.br/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://advisionagencia.com.br/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="BR-MG" />
        <meta name="geo.placename" content="Pouso Alegre" />
        <meta name="geo.position" content="-22.2308;-45.9364" />
        <meta name="ICBM" content="-22.2308, -45.9364" />
        <meta name="locality" content="Pouso Alegre, MG, Brasil" />
        <meta name="msapplication-TileColor" content="#3449EA" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
            <CookieBanner />
          </MotionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
