'use client';

import Link from 'next/link';
import { Languages } from 'lucide-react';
import type { Locale } from '@/lib/i18n-config';
import { LanguageSwitcher } from './language-switcher';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Dictionary = {
  nav: {
    home: string;
    products: string;
    contact: string;
  };
};

export function Header({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}`, label: dictionary.nav.home },
    { href: `/${lang}/products`, label: dictionary.nav.products },
    { href: `/${lang}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Languages className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Restroworks</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
}
