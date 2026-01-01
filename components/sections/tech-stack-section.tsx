'use client';

import { TECH_STACK } from '@/lib/constants';
import { TechCard } from '@/components/ui';

interface TechStackSectionProps {
  isDark: boolean;
}

export function TechStackSection({ isDark }: TechStackSectionProps) {
  return (
    <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
            Stack Tecnológico
          </p>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            Herramientas & Tecnologías
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {TECH_STACK.map((tech, i) => (
            <TechCard key={i} tech={tech} isDark={isDark} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
