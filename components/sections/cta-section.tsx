'use client';

import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

interface CTASectionProps {
  isDark: boolean;
}

export function CTASection({ isDark }: CTASectionProps) {
  return (
    <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Sparkles className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'
          }`} />
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'
          }`}>
          ¿Trabajamos juntos?
        </h2>
        <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
          Siempre estoy buscando nuevos desafíos y oportunidades para crear productos increíbles.
          ¡Conversemos sobre tu próximo proyecto!
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-2xl cursor-pointer ${isDark
            ? 'bg-linear-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-slate-100'
            : 'bg-linear-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white'
            }`}
        >
          <Mail size={18} className="sm:w-5 sm:h-5" />
          Contactar
          <ArrowRight size={18} className="sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  );
}
