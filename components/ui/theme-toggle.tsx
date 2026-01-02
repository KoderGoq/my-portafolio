'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
        aria-label="Toggle theme"
      >
        <div className="w-4.5 h-4.5 md:w-5 md:h-5" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 cursor-pointer ${isDark
        ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
        : 'bg-white/80 text-slate-700 hover:bg-white'
        }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="md:w-5 md:h-5" />
      ) : (
        <Moon size={18} className="md:w-5 md:h-5" />
      )}
    </button>
  );
}
