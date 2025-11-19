import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2, Users, Zap } from 'lucide-react';
import Image from 'next/image';

type HeroProps = {
  lang: string;
  badge?: string;
  headline?: string;
  highlightedText?: string;
  subheadline?: string;
  cta_button?: string;
  cta_link?: string;
  secondary_cta_button?: string;
  secondary_cta_link?: string;
  image?: any;
  style?: 'gradient' | 'image' | 'minimal' | 'split';
  showStats?: boolean;
  stats?: Array<{ value: string; label: string }>;
  dictionary?: any;
};

export function HeroSection(props: HeroProps) {
  const {
    lang,
    badge,
    headline,
    highlightedText,
    subheadline,
    cta_button,
    cta_link,
    secondary_cta_button,
    secondary_cta_link,
    image,
    style = 'gradient',
    showStats = true,
    stats,
    dictionary,
  } = props;

  // Default stats if none provided - now localized
  const displayStats = stats && stats.length > 0 ? stats : dictionary ? [
    { value: '99.9%', label: dictionary.hero.stats.uptime },
    { value: '10K+', label: dictionary.hero.stats.customers },
    { value: '24/7', label: dictionary.hero.stats.support },
  ] : [
    { value: '99.9%', label: 'Uptime' },
    { value: '10K+', label: 'Happy Customers' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background based on style */}
      {style === 'gradient' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        </>
      )}

      {style === 'minimal' && (
        <div className="absolute inset-0 bg-white" />
      )}

      {style === 'image' && image && (
        <>
          <div className="absolute inset-0">
            <Image
              src={typeof image === 'string' ? image : image.url || ''}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/80" />
        </>
      )}

      {/* Animated elements - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern - subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className={`flex min-h-[70vh] items-center ${style === 'split' ? 'justify-between gap-12' : 'justify-center'}`}>
          <div className={`${style === 'split' ? 'max-w-2xl' : 'max-w-5xl text-center'} space-y-8`}>
            
            {/* Logo/Image - Display if provided and not in split style */}
            {image && style !== 'split' && (() => {
              // Handle different image formats from PayloadCMS
              let imageUrl = '';
              
              if (typeof image === 'string') {
                imageUrl = image;
              } else if (image && typeof image === 'object') {
                // PayloadCMS returns image as object with url property
                imageUrl = image.url || '';
              }
              
              // Construct full URL if it's a relative path
              if (imageUrl && !imageUrl.startsWith('http')) {
                const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL || 'http://localhost:3000';
                imageUrl = `${baseUrl}${imageUrl}`;
              }
              
              return imageUrl ? (
                <div className="mb-8 flex justify-center animate-fade-in">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
                    <Image
                      src={imageUrl}
                      alt="Restroworks Logo"
                      fill
                      className="object-contain"
                      priority
                      unoptimized={imageUrl.includes('localhost')}
                    />
                  </div>
                </div>
              ) : null;
            })()}

            {/* Optional Badge */}
            {badge && (
              <div className={`inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium border border-white/20 ${
                style === 'minimal' ? 'text-purple-700 bg-purple-50 border-purple-200' : 'text-white'
              }`}>
                <span>✨ {badge}</span>
              </div>
            )}
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                {headline ? (
                  <span className={`block ${style === 'minimal' ? 'text-gray-900' : 'text-white'}`}>
                    {headline}
                  </span>
                ) : (
                  <span className={`block ${style === 'minimal' ? 'text-gray-900' : 'text-white'}`}>
                    Welcome to Restroworks
                  </span>
                )}
                {highlightedText && (
                  <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                    {highlightedText}
                  </span>
                )}
              </h1>

              {/* Subheading */}
              {subheadline && (
                <p className={`text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-4xl ${
                  style === 'split' ? '' : 'mx-auto'
                } ${
                  style === 'minimal' ? 'text-gray-600' : 'text-white/90'
                }`}>
                  {subheadline}
                </p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 pt-4 ${style === 'split' ? 'sm:justify-start' : 'sm:justify-center'}`}>
              {cta_button && (
                <Button
                  asChild
                  size="lg"
                  className="group bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/20 transition-all hover:scale-105"
                >
                  <Link href={cta_link || `/${lang}/contact`}>
                    {cta_button}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
              {secondary_cta_button && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm px-8 py-6 text-lg font-semibold transition-all hover:bg-white/20 hover:scale-105"
                >
                  <Link href={secondary_cta_link || `/${lang}#features`}>
                    <Play className="mr-2 h-5 w-5" />
                    {secondary_cta_button}
                  </Link>
                </Button>
              )}
            </div>

            {/* Stats */}
            {showStats && displayStats.length > 0 && (
              <div className={`flex flex-wrap items-center gap-8 pt-8 ${style === 'split' ? 'justify-start' : 'justify-center'}`}>
                {displayStats.slice(0, 3).map((stat: { value: string; label: string }, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      {index === 0 && <CheckCircle2 className="h-6 w-6 text-green-300" />}
                      {index === 1 && <Users className="h-6 w-6 text-blue-300" />}
                      {index === 2 && <Zap className="h-6 w-6 text-yellow-300" />}
                    </div>
                    <div className="text-left">
                      <div className={`text-2xl font-bold ${style === 'minimal' ? 'text-gray-900' : 'text-white'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${style === 'minimal' ? 'text-gray-600' : 'text-white/70'}`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Social proof */}
            <div className={`flex flex-wrap items-center gap-6 text-sm pt-4 ${
              style === 'split' ? 'justify-start' : 'justify-center'
            } ${style === 'minimal' ? 'text-gray-600' : 'text-white/80'}`}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-medium">{dictionary?.hero?.social_proof?.trusted || 'Trusted by 10,000+ users'}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 font-medium">4.9/5 {dictionary?.hero?.social_proof?.rating || 'rating'}</span>
              </div>
            </div>
          </div>

          {/* Split screen image */}
          {style === 'split' && image && (() => {
            let imageUrl = '';
            
            if (typeof image === 'string') {
              imageUrl = image;
            } else if (image && typeof image === 'object') {
              imageUrl = image.url || '';
            }
            
            if (imageUrl && !imageUrl.startsWith('http')) {
              const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL || 'http://localhost:3000';
              imageUrl = `${baseUrl}${imageUrl}`;
            }
            
            return imageUrl ? (
              <div className="hidden lg:block lg:w-1/2">
                <div className="relative h-[600px] w-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-3xl" />
                  <div className="relative h-full w-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 shadow-2xl">
                    <Image
                      src={imageUrl}
                      alt="Hero illustration"
                      fill
                      className="object-contain p-8"
                      priority
                      unoptimized={imageUrl.includes('localhost')}
                    />
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
