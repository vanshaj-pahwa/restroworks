import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './lib/i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(xml|txt|ico|png|jpg|jpeg|svg)$/)
  ) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale; // Use the default locale

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
