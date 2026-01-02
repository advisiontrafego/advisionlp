"use client";
import Link from "next/link";
import { Logo } from "@/components/logos/Logo";
import { LogoFull } from "@/components/logos/LogoFull";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { FlowButton } from "@/components/ui/flow-button";
import { useFramerScroll } from "@/hooks/use-framer-scroll";
import { Button } from "../ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const MENU_ITEMS = [
  { name: 'Serviços', href: '#services', scrollId: 'services' },
  { name: 'Método', href: '#how-it-works', scrollId: 'how-it-works' },
  { name: 'Depoimentos', href: '#testimonials', scrollId: 'testimonials' },
  { name: 'Contato', href: '#contact', scrollId: 'contact' },
] as const

export const Header = () => {
  const { scrollTo } = useFramerScroll(-100);
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      const scrollY = (window as Window & { lenis?: { scroll: number } }).lenis?.scroll || window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header role="banner">

  <nav aria-label="Navegação principal" data-state={menuState && 'active'} className="fixed inset-x-0 z-50">

        <div
          data-shrunk={isScrolled}
          className={cn(
            'mx-auto mt-2 max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300',
            isScrolled && 'max-w-4xl rounded-2xl border-electric-500/20 bg-background/50 backdrop-blur-lg'
          )}
          // safe-area iOS
          style={{
            paddingLeft: 'max(env(safe-area-inset-left), 1rem)',
            paddingRight: 'max(env(safe-area-inset-right), 1rem)',
          }}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">

            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="#hero"
                aria-label="Voltar para o início"
                className="flex items-center cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  scrollTo('hero');
                }}
              >
                <Logo className="h-8 w-auto lg:hidden" aria-hidden="true" />
                <LogoFull className="hidden h-8 w-auto lg:block" aria-hidden="true" />
              </Link>

              <button
                onClick={() => setMenuState((v) => !v)}
                aria-label={menuState ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuState}
                aria-controls="mobile-menu"
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0" aria-hidden="true" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100" aria-hidden="true" />
              </button>
            </div>


            <div className="hidden lg:flex flex-1 items-center justify-center">
              <ul className="flex gap-8 text-sm">
                {MENU_ITEMS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-sm text-muted-foreground duration-150 hover:text-accent-foreground"
                      onClick={e => {
                        e.preventDefault();
                        scrollTo(item.scrollId);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="mobile-menu"
              className={cn(
                "bg-neutral-200/60 backdrop-blur-lg dark:bg-navy-800/90",
                "in-data-[state=active]:block lg:in-data-[state=active]:flex",
                "mb-6 hidden w-full flex-wrap items-center",
                "justify-center lg:justify-end",
                "space-y-8 rounded-3xl border border-electric-500/10 p-6",
                "shadow-2xl shadow-zinc-300/20",
                "lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0",
                "lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                "dark:shadow-none dark:lg:bg-transparent",
                "mx-auto max-w-md"
              )}
            >
              <div className="mx-auto w-full max-w-md lg:hidden ">
                <ul className="space-y-6 flex w-full flex-col items-center lg:justify-end text-base">
                  {MENU_ITEMS.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block duration-150 text-muted-foreground hover:text-accent-foreground "
                        onClick={e => {
                          e.preventDefault();
                          scrollTo(item.scrollId);
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col items-center space-y-3 sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:space-y-0 lg:justify-end md:w-fit">
                <ThemeSwitcher />

                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto min-w-[240px]">
                  <button 
                    className="w-full group relative flex items-center justify-center gap-1 overflow-hidden rounded-xl border-[1.5px] border-transparent bg-electric-500 px-8 py-4 min-h-[48px] text-sm font-semibold text-white cursor-pointer transition-all duration-600ms ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-electric-600 active:scale-[0.95]"
                    aria-label="Falar com especialista via WhatsApp"
                  >
                    <span className="relative z-1">Falar com especialista</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
