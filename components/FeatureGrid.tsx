
import React, { useEffect, useRef, useState } from 'react';
import { FEATURES, ICON_MAP } from '../constants';
import { Check } from 'lucide-react';
import { Feature } from '../types';

const AnimatedFeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ 
        transitionDelay: `${(index % 3) * 150}ms`,
      }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } group relative bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800`}
    >
      <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-microsoft-blue dark:text-blue-400`}>
        {ICON_MAP[feature.iconName]}
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-microsoft-blue dark:text-blue-400 font-semibold text-sm mb-4 tracking-wide uppercase">{feature.subtitle}</p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
      </div>

      <ul className="space-y-3">
        {feature.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
            <Check className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
            {detail}
          </li>
        ))}
      </ul>

      {/* Decorative accent */}
      <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-microsoft-blue transition-colors"></div>
    </div>
  );
};

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Cutting-Edge Innovation</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore the six core pillars that define the 2026 experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <AnimatedFeatureCard 
              key={feature.id} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
