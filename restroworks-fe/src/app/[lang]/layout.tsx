import type { Locale } from '@/lib/i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <Footer dictionary={dictionary} lang={lang} />
    </div>
  );
}
