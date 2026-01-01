import type { TechStack } from '@/lib/types';

interface TechCardProps {
  tech: TechStack;
  isDark: boolean;
  index: number;
}

export function TechCard({ tech, isDark, index }: TechCardProps) {
  const Icon = tech.icon;

  return (
    <div
      className={`group p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer ${isDark ? 'bg-slate-900/50 hover:bg-slate-800/70' : 'bg-white hover:bg-gray-50'
        } shadow-lg hover:shadow-2xl`}
      style={{
        animationDelay: `${index * 0.05}s`,
        border: `1px solid ${tech.color}15`
      }}
    >
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <div
          className="text-2xl sm:text-3xl md:text-4xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg md:rounded-xl transition-transform group-hover:rotate-12"
          style={{
            backgroundColor: `${tech.color}10`,
            color: tech.color,
            border: `2px solid ${tech.color}30`
          }}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <div className="text-center">
          <div className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {tech.name}
          </div>
          <div className={`text-[10px] sm:text-xs mt-0.5 md:mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            {tech.category}
          </div>
        </div>
      </div>
    </div>
  );
}
