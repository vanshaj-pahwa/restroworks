import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import type { TestimonialsBlockType } from '@/lib/payload-types';

const testimonialImages = [
  { src: 'https://picsum.photos/seed/alex/100/100', hint: 'man portrait' },
  { src: 'https://picsum.photos/seed/maria/100/100', hint: 'woman portrait' },
];

export function TestimonialsSection({ title, items }: TestimonialsBlockType) {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic text-foreground">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <div className="flex items-center gap-4 border-t bg-background/50 p-6">
                <Avatar>
                  <AvatarImage
                    src={testimonialImages[index]?.src}
                    alt={testimonial.author}
                    data-ai-hint={testimonialImages[index]?.hint}
                  />
                  <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
