'use client';

import { Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/lib/constants';

export function DownloadButton() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'downloaded'>('idle');
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (downloadStatus === 'downloaded') {
      const timer = setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [downloadStatus]);

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
    setDownloadStatus('downloading');
    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPath;
    link.download = 'Fernando-Aguilar-FullStack-Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadStatus('downloaded');
    }, 800);
  };

  const getButtonText = () => {
    if (downloadStatus === 'downloading') return 'Descargando...';
    if (downloadStatus === 'downloaded') return '¡Descargado!';
    return 'CV';
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`px-3 md:px-5 py-2 md:py-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1 md:gap-2 transition-all hover:scale-105 cursor-pointer ${isDark
          ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
          : 'bg-white/80 text-slate-700 hover:bg-white'
        } ${isDownloading ? 'opacity-70 cursor-wait' : ''} ${downloadStatus === 'downloaded' ? 'bg-green-600/80 text-white' : ''}`}
    >
      <Download size={16} className={`md:w-4.5 md:h-4.5 ${isDownloading ? 'animate-bounce' : ''}`} />
      <span className="text-sm md:text-base font-medium hidden sm:inline">{getButtonText()}</span>
    </button>
  );
}
