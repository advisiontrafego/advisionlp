'use client';

import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const themes = [
  { key: 'system', icon: Monitor, label: 'Tema do sistema' },
  { key: 'light',  icon: Sun,     label: 'Tema claro'  },
  { key: 'dark',   icon: Moon,    label: 'Tema escuro'   },
];

export type ThemeSwitcherProps = { className?: string };

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      role="group"
      aria-label="Seletor de tema"
      className={cn(
        'relative isolate inline-flex w-fit shrink-0 items-center',
        'h-8 rounded-full p-1 ring-1 shadow-sm',
        'backdrop-blur-sm bg-white/50 ring-electric-200/10 dark:bg-navy-800/50 dark:ring-electric-500/90',
        'overflow-hidden',
        className,
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;
        return (
          <button
            key={key}
            type="button"
            aria-label={label}
            aria-pressed={isActive}
            onClick={() => setTheme(key as 'light' | 'dark' | 'system')}
            className={cn(
              'relative grid place-items-center rounded-full transition-all duration-200',
              'size-6',
              "after:content-[''] after:absolute after:-inset-2 sm:after:content-none",
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
            )}
          >
            <Icon
              aria-hidden="true"
              className={cn(
                'relative z-10 h-4 w-4 transition-colors duration-200',
                isActive
                  ? 'text-navy-800 dark:text-white'
                  : 'text-navy-800/50 dark:text-white/50 hover:text-navy-800 dark:hover:text-white'
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
