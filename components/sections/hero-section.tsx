'use client';

import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '@/lib/constants';
import { StatCard } from '@/components/ui';

interface HeroSectionProps {
  isDark: boolean;
}

export function HeroSection({ isDark }: HeroSectionProps) {
  return (
    <div className={`relative overflow-hidden ${isDark
      ? 'bg-linear-to-br from-slate-900 via-slate-800 to-slate-900'
      : 'bg-linear-to-br from-gray-50 via-blue-50/30 to-gray-50'
      }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 md:opacity-30">
        <div className={`absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-2xl md:blur-3xl animate-float ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'
          }`}></div>
        <div className={`absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-2xl md:blur-3xl animate-float ${isDark ? 'bg-violet-500/20' : 'bg-violet-400/20'
          }`} style={{ animationDelay: '3s' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-48 md:w-96 h-48 md:h-96 rounded-full blur-2xl md:blur-3xl animate-float ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-400/20'
          }`} style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <div>
              <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                {PERSONAL_INFO.role}
              </p>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-slate-900'
                }`}>
                {PERSONAL_INFO.name}
              </h1>
              <div className={`h-1 w-16 sm:w-20 md:w-24 mx-auto rounded-full ${isDark
                ? 'bg-linear-to-r from-blue-500 to-violet-500'
                : 'bg-linear-to-r from-blue-600 to-violet-600'
                }`}></div>
            </div>

            <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 md:mb-16 px-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                } shadow-lg text-sm md:text-base`}
            >
              <Mail size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Email</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                } shadow-lg text-sm md:text-base`}
            >
              <Linkedin size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                } shadow-lg text-sm md:text-base`}
            >
              <Github size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>GitHub</span>
            </a>
            <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl ${isDark ? 'glass' : 'glass-light'
              } shadow-lg text-sm md:text-base`}>
              <MapPin size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
            {STATS.map((stat, i) => (
              <StatCard key={i} stat={stat} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill={isDark ? '#020617' : '#f9fafb'}
          />
        </svg>
      </div>
    </div>
  );
}
