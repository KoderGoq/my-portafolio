'use client';

import { Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/lib/constants';

export function DownloadButton() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="px-3 md:px-5 py-2 md:py-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1 md:gap-2 transition-all"
      >
        <Download size={16} className="md:w-4.5 md:h-4.5" />
        <span className="text-sm md:text-base font-medium hidden sm:inline">CV</span>
      </button>
    );
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPath;
    link.download = 'Fernando-Aguilar-FullStack-Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`px-3 md:px-5 py-2 md:py-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1 md:gap-2 transition-all hover:scale-105 ${isDark
        ? 'bg-slate-800/80 text-white hover:bg-slate-700'
        : 'bg-white/80 text-slate-900 hover:bg-white'
        }`}
    >
      <Download size={16} className="md:w-4.5 md:h-4.5" />
      <span className="text-sm md:text-base font-medium hidden sm:inline">CV</span>
    </button>
  );
}
