'use client';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <div className={`border-t py-6 sm:py-8 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-gray-50 border-gray-200'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          &copy; {new Date().getFullYear()} Fernando Aguilar · Full Stack Developer
        </p>
        <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
          Hecho con React + Next.js + Tailwind CSS
        </p>
      </div>
    </div>
  );
}
