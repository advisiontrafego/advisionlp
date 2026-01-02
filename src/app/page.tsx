import Hero from "@/components/sections/Hero";
import { LogoCarouselSection } from "@/components/sections/LogoCarouselSection";
import { Services } from "@/components/sections/Services";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { Metrics } from "@/components/sections/Metrics";
import { Testimonials } from "@/components/sections/Testimonials";
import CTAWithHorizontalMarquee from "@/components/sections/Cta";
import FAQ1 from "@/components/faq-monocrhome";
import { AdvisionFooter } from "@/components/sections/AdvisionFooter";

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
