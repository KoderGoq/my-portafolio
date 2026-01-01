'use client';

import { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Github, Download, Code, ExternalLink, Calendar, TrendingUp, Users, Zap, Moon, Sun, Award, Briefcase, GraduationCap, Sparkles, ArrowRight, ChevronRight, Menu, X } from 'lucide-react';

const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleDownload = () => {
    window.print();
  };

  // Tech Stack con colores oficiales
  const techStack = [
    { name: 'React', color: '#61DAFB', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', color: '#000000', darkColor: '#FFFFFF', icon: '▲', category: 'Frontend' },
    { name: 'TypeScript', color: '#3178C6', icon: 'TS', category: 'Language' },
    { name: 'Node.js', color: '#339933', icon: '◆', category: 'Backend' },
    { name: 'PostgreSQL', color: '#336791', icon: '🐘', category: 'Database' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃', category: 'Database' },
    { name: 'Tailwind', color: '#06B6D4', icon: '🌊', category: 'Frontend' },
    { name: 'React Native', color: '#61DAFB', icon: '📱', category: 'Mobile' },
    { name: 'Docker', color: '#2496ED', icon: '🐳', category: 'DevOps' },
    { name: 'Redis', color: '#DC382D', icon: '⚡', category: 'Database' },
    { name: 'Prisma', color: '#2D3748', darkColor: '#FFFFFF', icon: '◭', category: 'Backend' },
    { name: 'Express', color: '#000000', darkColor: '#FFFFFF', icon: 'E', category: 'Backend' }
  ];

  const projects = [
    {
      title: 'aliA Platform',
      subtitle: 'AI-Powered Talent Development',
      description: 'Plataforma empresarial de salud organizacional con análisis de comportamiento mediante IA y cumplimiento NOM-035',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      techs: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      highlights: [
        'Next.js 16 con Server Components y optimización SSR',
        'Sistema de IA con LLM para análisis psicométrico',
        'Arquitectura de 5 microservicios independientes',
        'Autenticación JWT y 8 niveles de autorización'
      ],
      metrics: [
        { label: 'Page Load', value: '<2s', icon: Zap },
        { label: 'Precisión IA', value: '95%+', icon: Sparkles },
        { label: 'Latencia', value: '-40%', icon: TrendingUp }
      ],
      featured: true
    },
    {
      title: 'Rezerva',
      subtitle: 'Restaurant Booking App',
      description: 'Aplicación móvil cross-platform para reservaciones en tiempo real con notificaciones push y gestión de mesas',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      techs: ['React Native', 'TypeScript', 'Expo', 'Node.js'],
      highlights: [
        'Arquitectura modular escalable con Zustand',
        'Navegación fluida con Expo Router',
        'Sistema de notificaciones en tiempo real',
        'UI/UX optimizada para conversión móvil'
      ],
      metrics: [
        { label: 'Descargas', value: '1K+', icon: Users },
        { label: 'Rating', value: '4.8⭐', icon: Award },
        { label: 'Performance', value: 'A+', icon: TrendingUp }
      ],
      featured: true
    },
    {
      title: 'Digital Kiosk',
      subtitle: 'Self-Service Ordering System',
      description: 'Sistema de autoservicio para fast food con gestión de pedidos en tiempo real y reducción significativa de errores',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      techs: ['React', 'Prisma', 'Tailwind', 'Node.js'],
      highlights: [
        'Optimización de rutas API con Prisma ORM',
        'Diseño responsive para tablets y pantallas táctiles',
        'Gestión de estado robusto con Context API',
        'Middleware para prevención de duplicados'
      ],
      metrics: [
        { label: 'Eficiencia', value: '+40%', icon: Zap },
        { label: 'Conversión', value: '+25%', icon: TrendingUp },
        { label: 'Errores', value: '-95%', icon: Award }
      ],
      featured: false
    }
  ];

  const stats = [
    { label: 'Proyectos', value: '10+', icon: Code, color: 'emerald' },
    { label: 'Tecnologías', value: '15+', icon: Zap, color: 'violet' },
    { label: 'Experiencia', value: '2+', icon: Calendar, color: 'blue' },
    { label: 'Clientes', value: '5+', icon: Users, color: 'amber' }
  ];

  const isDark = theme === 'dark';

  return (
    <>
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #cv-content, #cv-content * { visibility: visible; }
          #cv-content { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 1; }
          50% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(0.95); opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-light {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        * {
          scroll-behavior: smooth;
        }

        /* Responsive text sizes */
        @media (max-width: 640px) {
          .text-responsive-xl { font-size: 2rem; }
          .text-responsive-2xl { font-size: 2.5rem; }
          .text-responsive-3xl { font-size: 3rem; }
        }
      `}</style>

      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
        {/* Fixed Controls */}
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex gap-2 md:gap-3 no-print">
          <button
            onClick={toggleTheme}
            className={`p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 ${isDark ? 'bg-slate-800/80 text-yellow-400 hover:bg-slate-700' : 'bg-white/80 text-slate-700 hover:bg-white'
              }`}
          >
            {isDark ? <Sun size={18} className="md:w-5 md:h-5" /> : <Moon size={18} className="md:w-5 md:h-5" />}
          </button>
          <button
            onClick={handleDownload}
            className={`px-3 md:px-5 py-2 md:py-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1 md:gap-2 transition-all hover:scale-105 ${isDark ? 'bg-slate-800/80 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'
              }`}
          >
            <Download size={16} className="md:w-4.5 md:h-4.5" />
            <span className="text-sm md:text-base font-medium hidden sm:inline">CV</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className={`relative overflow-hidden ${isDark ? 'bg-linear-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-linear-to-br from-gray-50 via-blue-50/30 to-gray-50'}`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20 md:opacity-30">
            <div className={`absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-2xl md:blur-3xl animate-float ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'}`}></div>
            <div className={`absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 rounded-full blur-2xl md:blur-3xl animate-float ${isDark ? 'bg-violet-500/20' : 'bg-violet-400/20'}`} style={{ animationDelay: '3s' }}></div>
            <div className={`absolute top-1/2 left-1/2 w-48 md:w-96 h-48 md:h-96 rounded-full blur-2xl md:blur-3xl animate-float ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-400/20'}`} style={{ animationDelay: '6s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Avatar with animated rings */}
              <div className="relative inline-block mb-6 md:mb-8">
                <div className={`absolute inset-0 rounded-full animate-pulse-ring ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/30'}`}></div>
                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-2xl ${isDark ? 'bg-linear-to-br from-blue-500 to-violet-600' : 'bg-linear-to-br from-blue-600 to-violet-600'
                  } text-white`}>
                  FA
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <div>
                  <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    Full Stack Developer
                  </p>
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Fernando Aguilar
                  </h1>
                  <div className={`h-1 w-16 sm:w-20 md:w-24 mx-auto rounded-full ${isDark ? 'bg-linear-to-r from-blue-500 to-violet-500' : 'bg-linear-to-r from-blue-600 to-violet-600'}`}></div>
                </div>

                <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Creando experiencias digitales excepcionales con <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>React</span>,
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}> Next.js</span> y arquitecturas modernas.
                  Especializado en soluciones escalables y de alto rendimiento.
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 md:mb-16 px-4">
                <a href="mailto:fernando.aguilar.j@outlook.com" className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                  } shadow-lg text-sm md:text-base`}>
                  <Mail size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Email</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                  } shadow-lg text-sm md:text-base`}>
                  <Linkedin size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                  } shadow-lg text-sm md:text-base`}>
                  <Github size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>GitHub</span>
                </a>
                <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl ${isDark ? 'glass' : 'glass-light'
                  } shadow-lg text-sm md:text-base`}>
                  <MapPin size={16} className={`sm:w-4.5 sm:h-4.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Colima, MX</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
                {stats.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all hover:scale-105 ${isDark ? 'glass hover:bg-slate-800/50' : 'glass-light hover:bg-white'
                    } shadow-lg`}>
                    <stat.icon className={`w-5 h-5 md:w-6 md:h-6 mb-2 md:mb-3 mx-auto text-${stat.color}-500`} />
                    <div className={`text-2xl sm:text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                    <div className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                fill={isDark ? '#020617' : '#f9fafb'} />
            </svg>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Stack Tecnológico
              </p>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Herramientas & Tecnologías
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {techStack.map((tech, i) => {
                const techColor = isDark ? (tech.darkColor || tech.color) : tech.color;
                return (
                  <div
                    key={i}
                    className={`group p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer ${isDark ? 'bg-slate-900/50 hover:bg-slate-800/70' : 'bg-white hover:bg-gray-50'
                      } shadow-lg hover:shadow-2xl`}
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      border: `1px solid ${techColor}15`
                    }}
                  >
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                      <div
                        className="text-2xl sm:text-3xl md:text-4xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg md:rounded-xl transition-transform group-hover:rotate-12"
                        style={{
                          backgroundColor: `${techColor}10`,
                          color: techColor,
                          border: `2px solid ${techColor}30`
                        }}
                      >
                        {tech.icon}
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
              })}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Portfolio
              </p>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Proyectos Destacados
              </h2>
              <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Soluciones que combinan diseño elegante con arquitectura robusta
              </p>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {projects.filter(p => p.featured).map((project, i) => (
                <div
                  key={i}
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
                    <div className={`absolute inset-0 bg-linear-to-t ${isDark ? 'from-slate-800 via-slate-800/50 to-transparent' : 'from-gray-50 via-gray-50/50 to-transparent'
                      }`}></div>

                    {/* Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold backdrop-blur-sm ${isDark ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : 'bg-blue-500/20 text-blue-700 border border-blue-500/30'
                        }`}>
                        Featured
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="mb-4">
                      <p className={`text-xs sm:text-sm font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {project.subtitle}
                      </p>
                      <h3 className={`text-xl sm:text-2xl font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.techs.map((tech, j) => {
                        const techData = techStack.find(t => t.name === tech);
                        const techColor = isDark ? (techData?.darkColor || techData?.color) : techData?.color;
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
                          <ChevronRight size={14} className={`shrink-0 mt-0.5 sm:w-4 sm:h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className={`grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
                      {project.metrics.map((metric, j) => (
                        <div key={j} className="text-center">
                          <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                          <div className={`text-base sm:text-lg font-bold mb-0.5 sm:mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {metric.value}
                          </div>
                          <div className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Project - Full Width (Stacks on Mobile) */}
            {projects.filter(p => !p.featured).map((project, i) => (
              <div
                key={i}
                className={`rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${isDark ? 'bg-slate-800/50' : 'bg-gray-50'
                  } shadow-xl hover:shadow-2xl`}
              >
                <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden order-2 md:order-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-linear-to-r ${isDark ? 'from-slate-800 via-slate-800/50 to-transparent' : 'from-gray-50 via-gray-50/50 to-transparent'
                      }`}></div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8 order-1 md:order-2">
                    <div className="mb-4">
                      <p className={`text-xs sm:text-sm font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {project.subtitle}
                      </p>
                      <h3 className={`text-xl sm:text-2xl font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed mb-4 sm:mb-6`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.techs.map((tech, j) => {
                        const techData = techStack.find(t => t.name === tech);
                        const techColor = isDark ? (techData?.darkColor || techData?.color) : techData?.color;
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

                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {project.metrics.map((metric, j) => (
                        <div key={j} className={`p-3 sm:p-4 rounded-xl text-center ${isDark ? 'bg-slate-900/50' : 'bg-white'
                          }`}>
                          <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                          <div className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {metric.value}
                          </div>
                          <div className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education */}
        <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Experience */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <Briefcase className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Experiencia
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className={`p-5 sm:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-900/50' : 'bg-white'} shadow-lg`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Full Stack Developer
                        </h3>
                        <p className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          aliA Platform
                        </p>
                      </div>
                      <span className={`text-xs sm:text-sm px-3 py-1 rounded-full self-start ${isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                        Actual
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      09/2025 - Presente · Jalisco, México
                    </p>
                    <div className="space-y-1.5 sm:space-y-2">
                      {['Next.js 16 con SSR y RSC', 'IA con 95%+ precisión', '5 microservicios', '-40% latencia'].map((item, i) => (
                        <div key={i} className="flex gap-2 text-xs sm:text-sm">
                          <Sparkles size={12} className={`shrink-0 mt-1 sm:w-3.5 sm:h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-5 sm:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-900/50' : 'bg-white'} shadow-lg`}>
                    <div className="mb-3">
                      <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Freelancer Front-End
                      </h3>
                      <p className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        Digital Kiosk Project
                      </p>
                    </div>
                    <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      2023 - 2025 · Colima, México
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {['-40%', '+25%', '-95%'].map((stat, i) => (
                        <div key={i} className={`px-3 py-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-100'
                          }`}>
                          <span className={`text-base sm:text-lg font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                            {stat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <GraduationCap className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Educación
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className={`p-5 sm:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-900/50' : 'bg-white'} shadow-lg`}>
                    <div className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      2023 - 2025
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Maestría en Tecnologías de Internet
                    </h3>
                    <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Universidad de Colima
                    </p>
                  </div>

                  <div className={`p-5 sm:p-6 rounded-xl md:rounded-2xl ${isDark ? 'bg-slate-900/50' : 'bg-white'} shadow-lg`}>
                    <div className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      2019 - 2023
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Licenciatura en Negocios Digitales
                    </h3>
                    <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Universidad de Colima
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Sparkles className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              ¿Trabajamos juntos?
            </h2>
            <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Siempre estoy buscando nuevos desafíos y oportunidades para crear productos increíbles.
              ¡Conversemos sobre tu próximo proyecto!
            </p>
            <a
              href="mailto:fernando.aguilar.j@outlook.com"
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-2xl ${isDark ? 'bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white'
                : 'bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white'
                }`}
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Contactar
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t py-6 sm:py-8 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-gray-50 border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className={`text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              © 2025 Fernando Aguilar · Full Stack Developer
            </p>
            <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Hecho con React + Next.js + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;