import { Zap, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import type { Project } from '@/lib/types';

export const PROJECTS: Project[] = [
  {
    title: 'aliA Platform',
    subtitle: 'AI-Powered Talent Development',
    description: 'Plataforma empresarial de salud organizacional con análisis de comportamiento mediante IA y cumplimiento NOM-035',
    image: '/alia.png',
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
