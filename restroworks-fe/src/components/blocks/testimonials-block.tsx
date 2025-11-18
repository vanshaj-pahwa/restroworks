import type { TestimonialBlockType } from '@/lib/payload-types';
import { Quote, Star } from 'lucide-react';

export function TestimonialsBlockRenderer(block: TestimonialBlockType) {
  const { title, testimonials } = block;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {title && (
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-gradient">{title}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 blur-xl transition-opacity group-hover:opacity-10" />
              
              {/* Card */}
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.author?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    {testimonial.role && (
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
