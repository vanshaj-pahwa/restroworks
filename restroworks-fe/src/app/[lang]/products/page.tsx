import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { type Page } from '@/lib/payload-types';
import { BlockRenderer } from '@/components/layout/block-renderer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: Promise<{ lang: Locale }>;
};

async function getPageBySlug(slug: string, locale: Locale): Promise<Page | null> {
  const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL || 'http://localhost:3000';

  try {
    const url = new URL(`${payloadUrl}/api/pages`);
    url.searchParams.append('where[slug][equals]', slug);
    url.searchParams.append('locale', locale);
    url.searchParams.append('depth', '2');
    url.searchParams.append('limit', '1');

    const response = await fetch(url.toString(), {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (data.docs && data.docs.length > 0) {
      return data.docs[0] as Page;
    }
    return null;
  } catch (error) {
    console.error('Error fetching products page:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('products', lang);
  const dict = await getDictionary(lang);
  
  if (page?.meta) {
    return {
      title: page.meta.title || dict.products.meta.title,
      description: page.meta.description || dict.products.meta.description,
    };
  }
  
  return {
    title: dict.products.meta.title,
    description: dict.products.meta.description,
  };
}

export default async function ProductsPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const page = await getPageBySlug('products', lang);

  // If page exists in CMS, use CMS content
  if (page && page.layout && page.layout.length > 0) {
    return (
      <>
        <BlockRenderer lang={lang} blocks={page.layout} dictionary={dict} />
      </>
    );
  }

  // No content found - show message to add content in CMS
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Products Page</h1>
        <p className="text-xl text-gray-600">
          This page doesn't have any content yet. Please add content through the CMS.
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-left space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">How to add content:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Go to <a href="https://restroworks-be.vercel.app/admin" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">PayloadCMS Admin</a></li>
            <li>Click on "Pages" in the sidebar</li>
            <li>Create a new page with slug: <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">products</code></li>
            <li>Add Hero, Features, Testimonials, or CTA blocks</li>
            <li>Click "Save" and "Publish"</li>
          </ol>
          <p className="text-sm text-gray-500 pt-2">
            See <code className="bg-gray-100 px-2 py-1 rounded font-mono">PRODUCTS_PAGE_GUIDE.md</code> for detailed instructions.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href={`/${lang}`}>Go to Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="https://restroworks-be.vercel.app/admin" target="_blank" rel="noopener noreferrer">
              Open CMS Admin
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
