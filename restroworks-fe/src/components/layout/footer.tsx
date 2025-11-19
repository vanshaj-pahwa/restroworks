import Link from 'next/link';
import { Languages, Github, Twitter } from 'lucide-react';
import type { Locale } from '@/lib/i18n-config';

type Dictionary = {
  footer: {
    copy: string;
  };
};

export function Footer({
  dictionary,
  lang: _lang,
}: {
  dictionary: Dictionary;
  lang: Locale;
}) {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <Languages className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Restroworks</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Restroworks. {dictionary.footer.copy}
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
