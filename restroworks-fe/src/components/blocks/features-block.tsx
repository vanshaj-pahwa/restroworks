import type { FeatureBlockType } from '@/lib/payload-types';
import { Zap, Shield, Rocket, Sparkles, Globe, Lock } from 'lucide-react';

const iconMap: Record<string, any> = {
  zap: Zap,
  shield: Shield,
  rocket: Rocket,
  sparkles: Sparkles,
  globe: Globe,
  lock: Lock,
};

export function FeaturesBlockRenderer(block: FeatureBlockType) {
  const { title, features } = block;

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section id="features" className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {title && (
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-gradient">{title}</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon ? iconMap[feature.icon.toLowerCase()] || Sparkles : Sparkles;
            
            return (
              <div
                key={feature.id || index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
                
                {/* Card */}
                <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:border-purple-200">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 transition-transform group-hover:scale-110">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  {feature.title && (
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                  )}

                  {/* Description */}
                  {feature.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  )}

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
