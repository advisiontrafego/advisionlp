"use client";

import { LogoFull } from "@/components/logos/LogoFull";
import { Logo } from "@/components/logos/Logo";
import { Instagram } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_URL } from "@/lib/constants";
import { useFramerScroll } from "@/hooks/use-framer-scroll";

// Derivado da URL para nao existir um segundo lugar onde o @ possa divergir.
const instagramHandle = `@${COMPANY_INFO.instagram.split("/").filter(Boolean).pop()}`;

const socialLinks = [
  {
    Icon: Instagram,
    href: COMPANY_INFO.instagram,
    label: "Instagram",
    handle: instagramHandle,
  },
];

const mainLinks = [
  { href: "#services", label: "Serviços", scrollId: "services" },
  { href: "#how-it-works", label: "Método", scrollId: "how-it-works" },
  { href: "#testimonials", label: "Resultados", scrollId: "testimonials" },
  { href: "#team", label: "Time", scrollId: "team" },
  { href: WHATSAPP_URL, label: "Contato", external: true },
];

const legalLinks = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos de Uso" },
];

const linkBase =
  "inline-block py-1 text-sm underline-offset-4 transition-colors hover:underline";

export function AdvisionFooter() {
  const { scrollTo } = useFramerScroll(-100);

  return (
    // pb generoso no mobile: o widget do WhatsApp e fixed em bottom-8 right-8
    // e cobriria os links da ultima linha.
    <footer
      role="contentinfo"
      className="relative bg-background border-t border-electric-500/10 pt-16 pb-28 lg:pt-24 lg:pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
          <a
            href="#hero"
            className="flex w-fit items-center gap-x-2"
            aria-label="Voltar para o início - Advision"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
          >
            <LogoFull
              className="hidden sm:block h-8 w-auto"
              aria-hidden="true"
            />
            <Logo className="block sm:hidden h-8 w-auto" aria-hidden="true" />
          </a>

          <ul
            className="flex list-none flex-wrap justify-center gap-6 md:justify-end"
            role="list"
            aria-label="Redes sociais"
          >
            {socialLinks.map(({ Icon, href, label, handle }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir a Advision no ${label}: ${handle}`}
                  className="inline-flex min-h-11 items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-electric-500"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                  <span>{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-electric-500/10 pt-8 lg:grid lg:grid-cols-10 lg:gap-x-4">
          <nav className="lg:col-[4/11]" aria-label="Links principais">
            <ul
              className="flex list-none flex-wrap gap-x-6 gap-y-1 lg:justify-end"
              role="list"
            >
              {mainLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkBase} text-foreground hover:text-electric-500`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className={`${linkBase} text-foreground hover:text-electric-500`}
                      onClick={(e) => {
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

          <div className="mt-4 lg:col-[4/11] lg:mt-2">
            <ul className="flex list-none flex-wrap gap-x-6 gap-y-1 lg:justify-end">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`${linkBase} text-muted-foreground hover:text-foreground`}
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
