"use client";

import { Button } from "@/components/ui/button";
import { LogoFull } from "@/components/logos/LogoFull";
import { Logo } from "@/components/logos/Logo";
import { Instagram} from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import { useFramerScroll } from "@/hooks/use-framer-scroll";

export function AdvisionFooter() {
  const { scrollTo } = useFramerScroll(-100);
  
  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/advisionbr",
      label: "Instagram",
    },
  ];

  const mainLinks = [
    { href: "#services", label: "Serviços", scrollId: "services" },
    { href: "#how-it-works", label: "Método", scrollId: "how-it-works" },
    { href: "#testimonials", label: "Resultados", scrollId: "testimonials" },
    { href: WHATSAPP_URL, label: "Contato", external: true },
  ];

  const legalLinks = [
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos de Uso" },
  ];

  return (
    <footer role="contentinfo" className="relative pb-6 pt-16 lg:pb-8 lg:pt-24 bg-background border-t border-electric-500/10">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="#hero"
            className="flex items-center gap-x-2"
            aria-label="Voltar para o início - Advision"
            onClick={e => {
              e.preventDefault();
              scrollTo('hero');
            }}
          >
            <LogoFull className="hidden sm:block h-8 w-auto" aria-hidden="true" />
            <Logo className="block sm:hidden h-8 w-auto" aria-hidden="true" />
          </a>
          <ul className="flex list-none mt-6 md:mt-0 gap-3" role="list" aria-label="Redes sociais">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10  border-electric-500/20 hover:border-electric-500 hover:bg-electric-500/10"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Seguir no ${link.label}`}>
                    <span aria-hidden="true"
                    className="hover:text-electric-500">{link.icon}</span>
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-electric-500/10 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]" aria-label="Links principais">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end" role="list">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-electric-500 underline-offset-4 hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-foreground hover:text-electric-500 underline-offset-4 hover:underline transition-colors"
                      onClick={e => {
                        e.preventDefault();
                        scrollTo(link.scrollId!);
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
