import type { Stat } from '@/lib/types';

interface StatCardProps {
  stat: Stat;
  isDark: boolean;
}

export function StatCard({ stat, isDark }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <div
      className={`p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
        } shadow-lg`}
    >
      <Icon className={`w-5 h-5 md:w-6 md:h-6 mb-2 md:mb-3 mx-auto text-${stat.color}-500`} />
      <div className={`text-2xl sm:text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {stat.value}
      </div>
      <div className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {stat.label}
      </div>
    </div>
  );
}
