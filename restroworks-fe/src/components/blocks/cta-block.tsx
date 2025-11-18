import { Button } from '@/components/ui/button';
import type { CallToActionBlockType } from '@/lib/payload-types';
import { ArrowRight, Sparkles } from 'lucide-react';

// Helper to extract text from Lexical JSON
function extractTextFromLexical(richText: any): string {
  if (!richText) return '';
  
  if (typeof richText === 'string') {
    return richText;
  }

  if (richText.root && richText.root.children) {
    return richText.root.children
      .map((node: any) => {
        if (node.children && Array.isArray(node.children)) {
          return node.children
            .map((child: any) => child.text || '')
            .join('');
        }
        return node.text || '';
      })
      .join('\n');
  }

  return '';
}

export function CtaBlockRenderer(block: CallToActionBlockType & { dictionary?: any }) {
  // Support both old and new field names
  const richText = block.richText || (block as any).content;
  const displayText = block.text || extractTextFromLexical(richText);
  const linkUrl = block.buttonLink || (block as any).link_url || (block as any).link?.url;
  const linkLabel = block.buttonText || (block as any).link_label || (block as any).link?.label;
  const description = (block as any).description || '';
  const secondaryButtonText = (block as any).secondaryButtonText || '';
  const secondaryButtonLink = (block as any).secondaryButtonLink || '';
  const dictionary = block.dictionary;

  return (
    <section className="relative w-full overflow-hidden py-24 px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600" />
      
      {/* Animated circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Sparkle decoration */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-medium text-white">{dictionary?.cta?.ready || 'Ready to get started?'}</span>
        </div>

        {/* Main text */}
        {displayText && (
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            {displayText}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        {linkLabel && linkUrl && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Button
              asChild
              size="lg"
              className="group bg-white text-purple-600 hover:bg-gray-100 shadow-2xl shadow-black/20 px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <a href={linkUrl}>
                {linkLabel}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all hover:scale-105"
              >
                <a href={secondaryButtonLink}>
                  {secondaryButtonText}
                </a>
              </Button>
            )}
          </div>
        )}

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span>{dictionary?.cta?.trust_badges?.no_card || 'No credit card required'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <span>{dictionary?.cta?.trust_badges?.free_trial || '14-day free trial'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            <span>{dictionary?.cta?.trust_badges?.cancel || 'Cancel anytime'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
