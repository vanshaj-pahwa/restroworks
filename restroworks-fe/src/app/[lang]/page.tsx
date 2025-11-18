import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n-config';
import { getPage, type Page } from '@/lib/payload-types';
import { BlockRenderer } from '@/components/layout/block-renderer';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPage(lang);
  if (!page) {
    return {
      title: 'Page not found',
    };
  }
  return {
    title: page.meta?.title || page.title || 'Home',
    description: page.meta?.description || 'Welcome to our page',
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const page: Page | null = await getPage(lang);

  if (!page || !page.layout || page.layout.length === 0) {
    // This could be a 404 not found page
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p className="text-gray-500">
            The page you're looking for doesn't have any content yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlockRenderer lang={lang} blocks={page.layout} />
    </>
  );
}
