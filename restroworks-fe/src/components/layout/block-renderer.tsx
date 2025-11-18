import type { Locale } from '@/lib/i18n-config';
import type { Block } from '@/lib/payload-types';

// Import Payload CMS block renderers
import { ContentBlockRenderer } from '@/components/blocks/content-block';
import { MediaBlockRenderer } from '@/components/blocks/media-block';
import { CtaBlockRenderer } from '@/components/blocks/cta-block';
import { ArchiveBlockRenderer } from '@/components/blocks/archive-block';
import { FormBlockRenderer } from '@/components/blocks/form-block';
import { FeaturesBlockRenderer } from '@/components/blocks/features-block';
import { TestimonialsBlockRenderer } from '@/components/blocks/testimonials-block';
import { HeroSection } from '@/components/sections/hero';

const componentMap = {
  hero: HeroSection,
  feature: FeaturesBlockRenderer,  // Backend uses 'feature' (singular)
  features: FeaturesBlockRenderer,  // Keep for backwards compatibility
  testimonial: TestimonialsBlockRenderer,  // Backend uses 'testimonial' (singular)
  testimonials: TestimonialsBlockRenderer,  // Keep for backwards compatibility
  content: ContentBlockRenderer,
  mediaBlock: MediaBlockRenderer,
  customCTA: CtaBlockRenderer,  // Backend uses 'customCTA'
  cta: CtaBlockRenderer,  // Keep for backwards compatibility
  archive: ArchiveBlockRenderer,
  formBlock: FormBlockRenderer,
} as const;

export function BlockRenderer({
  blocks,
  lang,
  dictionary,
}: {
  blocks: Block[];
  lang: Locale;
  dictionary: any;
}) {
  return (
    <>
      {blocks.map((block, index) => {
        const Component = componentMap[block.blockType as keyof typeof componentMap];
        if (!Component) {
          return (
            <div key={index}>
              Component for block type &quot;{block.blockType}&quot; not found.
            </div>
          );
        }
        // @ts-ignore
        return <Component key={index} lang={lang} dictionary={dictionary} {...block} />;
      })}
    </>
  );
}
