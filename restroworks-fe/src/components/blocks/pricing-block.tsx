import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Link from 'next/link';
import type { PricingBlockType } from '@/lib/payload-types';

type PricingBlockProps = PricingBlockType & {
  lang: string;
  dictionary?: any;
};

export function PricingBlock({ title, subtitle, plans, lang, dictionary }: PricingBlockProps) {
  if (!plans || plans.length === 0) {
    return null;
  }

  const popularLabel = dictionary?.products?.pricing?.popular || 'Most Popular';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl font-bold mb-4 text-gray-900">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          </div>
        )}

        {/* Pricing Cards */}
        <div className={`grid gap-8 max-w-6xl mx-auto ${
          plans.length === 1 ? 'md:grid-cols-1 max-w-md' :
          plans.length === 2 ? 'md:grid-cols-2' :
          'md:grid-cols-3'
        }`}>
          {plans.map((plan, index) => (
            <Card 
              key={plan.id || index} 
              className={`relative ${
                plan.popular 
                  ? 'border-purple-500 border-2 shadow-xl md:scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white">{popularLabel}</Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                {plan.description && (
                  <CardDescription>{plan.description}</CardDescription>
                )}
                
                {/* Price */}
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              {/* Features List */}
              {plan.features && plan.features.length > 0 && (
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((item, fIndex) => (
                      <li key={item.id || fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item.feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}

              {/* CTA Button */}
              <CardFooter>
                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : ''
                  }`}
                >
                  <Link href={plan.buttonLink || `/${lang}/contact`}>
                    {plan.buttonText || 'Get Started'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
