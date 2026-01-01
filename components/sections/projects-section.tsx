'use client';

import { ChevronRight } from 'lucide-react';
import { PROJECTS, TECH_STACK } from '@/lib/constants';
import type { Project } from '@/lib/types';

interface ProjectsSectionProps {
  isDark: boolean;
}

function ProjectCard({ project, isDark, featured }: { project: Project; isDark: boolean; featured: boolean }) {
  return (
    <div
      className={`group rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${isDark ? 'bg-slate-800/50' : 'bg-gray-50'
        } shadow-xl hover:shadow-2xl`}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-linear-to-t ${isDark
          ? 'from-slate-800 via-slate-800/50 to-transparent'
          : 'from-gray-50 via-gray-50/50 to-transparent'
          }`}></div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold backdrop-blur-sm ${isDark
              ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
              : 'bg-blue-500/20 text-blue-700 border border-blue-500/30'
              }`}>
              Featured
            </div>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 md:p-8">
        <div className="mb-4">
          <p className={`text-xs sm:text-sm font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
            {project.subtitle}
          </p>
          <h3 className={`text-xl sm:text-2xl font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            {project.title}
          </h3>
          <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'
            } leading-relaxed`}>
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.techs.map((tech, j) => {
            const techData = TECH_STACK.find(t => t.name === tech);
            const techColor = techData?.color || '#3178C6';
            return (
              <span
                key={j}
                className="px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold"
                style={{
                  backgroundColor: `${techColor}15`,
                  color: techColor,
                  border: `1px solid ${techColor}30`
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {project.highlights.slice(0, 3).map((highlight, j) => (
            <div key={j} className="flex gap-2 text-xs sm:text-sm">
              <ChevronRight size={14} className={`shrink-0 mt-0.5 sm:w-4 sm:h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'
                }`} />
              <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className={`grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'
          }`}>
          {project.metrics.map((metric, j) => {
            const Icon = metric.icon;
            return (
              <div key={j} className="text-center">
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                <div className={`text-base sm:text-lg font-bold mb-0.5 sm:mb-1 ${isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                  {metric.value}
                </div>
                <div className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'
                  }`}>
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection({ isDark }: ProjectsSectionProps) {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
            Portfolio
          </p>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            Proyectos Destacados
          </h2>
          <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
            Soluciones que combinan diseño elegante con arquitectura robusta
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} isDark={isDark} featured />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.map((project, i) => (
          <ProjectCard key={i} project={project} isDark={isDark} featured={false} />
        ))}
      </div>
    </div>
  );
}
