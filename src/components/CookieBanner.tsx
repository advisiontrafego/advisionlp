'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-electric-500/20 shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. 
              Ao continuar navegando, você concorda com nossa{' '}
              <Link href="/privacidade" className="text-electric-500 hover:text-electric-600 underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm text-foreground hover:text-electric-500 transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-electric-500 text-white rounded-lg hover:bg-electric-600 transition-colors"
            >
              Aceitar
            </button>
          </div>
          <button
            onClick={rejectCookies}
            className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 p-1 text-muted-foreground hover:text-foreground"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
