import { MetadataRoute } from 'next';
import { i18n } from '@/lib/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/products', '/contact'];
  const locales = i18n.locales;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const routes = pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
    }))
  );

  return routes;
}
