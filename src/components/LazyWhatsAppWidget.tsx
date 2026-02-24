"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WhatsAppWidget = dynamic(
  () =>
    import("./WhatsAppWidget").then((mod) => ({ default: mod.WhatsAppWidget })),
  {
    ssr: false,
    loading: () => null,
  },
);

export function LazyWhatsAppWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);
      cleanup();
    };

    // Strategy 1: user scrolls to 3rd section (LogoCarousel area)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) load();
      },
      { rootMargin: "200px" },
    );
    // Observe the 3rd section wrapper (cv-auto divs)
    const thirdSection = document.querySelector("#services");
    if (thirdSection) {
      // Get the next sibling after services = LogoCarouselSection wrapper
      const logoSection = thirdSection.nextElementSibling;
      if (logoSection) observer.observe(logoSection);
    }

    // Strategy 2: fallback timer — 8s
    const timer = setTimeout(load, 8000);

    const cleanup = () => {
      clearTimeout(timer);
      observer.disconnect();
    };

    return cleanup;
  }, []);

  if (!shouldLoad) return null;

  return <WhatsAppWidget />;
}
