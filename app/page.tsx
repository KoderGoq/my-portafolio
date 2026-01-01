'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeToggle, DownloadButton } from '@/components/ui';
import {
  HeroSection,
  TechStackSection,
  ProjectsSection,
  ExperienceEducationSection,
  CTASection,
  Footer
} from '@/components/sections';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'
      }`}>
      {/* Fixed Controls */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex gap-2 md:gap-3 no-print">
        <ThemeToggle />
        <DownloadButton />
      </div>

      {/* Main Content */}
      <div id="cv-content">
        <HeroSection isDark={isDark} />
        <TechStackSection isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <ExperienceEducationSection isDark={isDark} />
        <CTASection isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
