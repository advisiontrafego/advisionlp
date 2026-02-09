import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AdvisionFooter } from "@/components/sections/AdvisionFooter";

// Code-split seções below-the-fold com muito JS client (mantém SSR para SEO)
const LogoCarouselSection = dynamic(
  () =>
    import("@/components/sections/LogoCarouselSection").then((mod) => ({
      default: mod.LogoCarouselSection,
    })),
  { ssr: true },
);
const HowItWorksSection = dynamic(
  () =>
    import("@/components/sections/HowItWorksSection").then((mod) => ({
      default: mod.HowItWorksSection,
    })),
  { ssr: true },
);
const Metrics = dynamic(
  () =>
    import("@/components/sections/Metrics").then((mod) => ({
      default: mod.Metrics,
    })),
  { ssr: true },
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((mod) => ({
      default: mod.Testimonials,
    })),
  { ssr: true },
);
const CTAWithHorizontalMarquee = dynamic(
  () => import("@/components/sections/Cta"),
  { ssr: true },
);
const FAQ1 = dynamic(() => import("@/components/sections/FAQ1"), { ssr: true });

export default function Home() {
  return (
    <main id="main-content" role="main" aria-label="Conteúdo principal">
      <Hero />
      <Services />
      <LogoCarouselSection />
      <HowItWorksSection />
      <Metrics />
      <Testimonials />
      <CTAWithHorizontalMarquee />
      <FAQ1 />
      <AdvisionFooter />
    </main>
  );
}
