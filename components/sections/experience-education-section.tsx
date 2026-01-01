'use client';

import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '@/lib/constants';

interface ExperienceEducationSectionProps {
  isDark: boolean;
}

export function ExperienceEducationSection({ isDark }: ExperienceEducationSectionProps) {
  return (
    <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Briefcase className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
                }`}>
                Experiencia
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-900/50' : 'bg-white'
                    } shadow-lg`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                        {exp.title}
                      </h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.isCurrent && (
                      <span className={`text-xs sm:text-sm px-3 py-1 rounded-full self-start ${isDark
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-emerald-100 text-emerald-700'
                        }`}>
                        Actual
                      </span>
                    )}
                  </div>
                  <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                    {exp.startDate} - {exp.endDate} · {exp.location}
                  </p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {exp.highlights.map((item, j) => (
                      <div key={j} className="flex gap-2 text-xs sm:text-sm">
                        <Sparkles size={12} className={`shrink-0 mt-1 sm:w-3.5 sm:h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'
                          }`} />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <GraduationCap className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
                }`}>
                Educación
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-900/50' : 'bg-white'
                    } shadow-lg`}
                >
                  <div className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                    {edu.startDate} - {edu.endDate}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
