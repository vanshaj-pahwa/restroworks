import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { CtaBlockType } from '@/lib/payload-types';

type CtaProps = CtaBlockType & {
  lang: string;
};

export function CtaSection({ lang, headline, button_text }: CtaProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center sm:py-20">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {headline}
        </h2>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href={`/${lang}/contact`}>{button_text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
