'use server';

import type { Locale } from './i18n-config';

// Payload CMS Block Types
export type ContentBlockType = {
  blockType: 'content';
  id?: string;
  label?: string;
  richText?: any[];
};

export type MediaBlockType = {
  blockType: 'mediaBlock';
  id?: string;
  label?: string;
  media?: {
    id: string;
    alt: string;
    url: string;
    mimeType: string;
  };
  caption?: string;
  position?: 'left' | 'center' | 'right' | 'fullscreen';
};

export type CallToActionBlockType = {
  blockType: 'cta' | 'customCTA';  // Backend uses 'customCTA'
  id?: string;
  label?: string;
  text?: string;  // Backend uses 'text' field
  buttonText?: string;  // Backend uses 'buttonText' field
  buttonLink?: string;  // Backend uses 'buttonLink' field
  richText?: any[];
  link_url?: string;
  link_label?: string;
};

export type ArchiveBlockType = {
  blockType: 'archive';
  id?: string;
  label?: string;
  archive_limit?: number;
  categories?: string[];
};

export type FormBlockType = {
  blockType: 'formBlock';
  id?: string;
  label?: string;
  form?: string | any;
};

export type HeroBlockType = {
  blockType: 'hero';
  id?: string;
  badge?: string;
  headline?: string;
  highlightedText?: string;
  subheadline?: string;
  cta_button?: string;
  cta_link?: string;
  secondary_cta_button?: string;
  secondary_cta_link?: string;
  image?: string | {
    id?: string;
    url?: string;
    filename?: string;
    mimeType?: string;
    filesize?: number;
    width?: number;
    height?: number;
    alt?: string;
  };
  style?: 'gradient' | 'image' | 'minimal' | 'split';
  showStats?: boolean;
  stats?: Array<{
    id?: string;
    value?: string;
    label?: string;
  }>;
};

// Features section block (backend uses 'feature' slug)
export type FeatureBlockType = {
  blockType: 'feature' | 'features';  // Support both singular and plural
  id?: string;
  title?: string;  // Section title
  features?: Array<{
    id?: string;
    title?: string;
    description?: string;
    icon?: any;
  }>;
};

// Testimonials section block (backend uses 'testimonial' slug)
export type TestimonialBlockType = {
  blockType: 'testimonial' | 'testimonials';  // Support both singular and plural
  id?: string;
  title?: string;  // Section title
  testimonials?: Array<{
    id?: string;
    quote?: string;
    author?: string;
    role?: string;
    authorImage?: any;
  }>;
};

// Pricing section block
export type PricingBlockType = {
  blockType: 'pricing';
  id?: string;
  title?: string;
  subtitle?: string;
  plans?: Array<{
    id?: string;
    name?: string;
    price?: string;
    period?: string;
    description?: string;
    popular?: boolean;
    features?: Array<{
      id?: string;
      feature?: string;
    }>;
    buttonText?: string;
    buttonLink?: string;
  }>;
};

// A "Block" is a union of all possible block types from Payload CMS
export type Block =
  | HeroBlockType
  | FeatureBlockType
  | TestimonialBlockType
  | PricingBlockType
  | ContentBlockType
  | MediaBlockType
  | CallToActionBlockType
  | ArchiveBlockType
  | FormBlockType;

// The Page type defines the structure of a page with its layout blocks
export type Page = {
  id: string;
  title: string;
  slug: string;
  layout?: Block[];
  meta?: {
    title?: string;
    description?: string;
  };
  hero?: any;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  _status?: 'draft' | 'published';
};

/**
 * Fetch page data from PayloadCMS by slug and locale
 */
export async function getPage(locale: Locale): Promise<Page | null> {
  const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL || 'http://localhost:3000';

  try {
    // Try fetching with proper Payload CMS query format
    const url = new URL(`${payloadUrl}/api/pages`);
    
    // Build query params for Payload CMS REST API
    url.searchParams.append('where[slug][equals]', 'home');
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
      console.error(`Error fetching page: ${response.status} ${response.statusText}`);
      
      // Try alternative fetch without locale if 404
      if (response.status === 404) {
        console.log('Trying alternative query without locale...');
        const altUrl = new URL(`${payloadUrl}/api/pages`);
        altUrl.searchParams.append('where[slug][equals]', 'home');
        altUrl.searchParams.append('depth', '2');
        altUrl.searchParams.append('limit', '1');
        
        const altResponse = await fetch(altUrl.toString(), {
          cache: 'no-store',
        });
        
        if (altResponse.ok) {
          const altData = await altResponse.json();
          if (altData.docs && altData.docs.length > 0) {
            return altData.docs[0] as Page;
          }
        }
      }
      
      return null;
    }

    const data = await response.json();

    if (data.docs && data.docs.length > 0) {
      return data.docs[0] as Page;
    } else {
      console.warn(`No page found for slug 'home' and locale '${locale}'. Available docs: ${JSON.stringify(data.docs)}`);
      return null;
    }
  } catch (error) {
    console.error('An error occurred while fetching the page:', error);
    return null;
  }
}
