import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DatabaseZap, Languages, Rocket, TrendingUp } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { FeaturesBlockType } from '@/lib/payload-types';

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  DatabaseZap,
  Languages,
  TrendingUp,
  Rocket,
};

export function FeaturesSection({ title, items }: FeaturesBlockType) {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
