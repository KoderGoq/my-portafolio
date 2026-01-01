import type { Experience } from '@/lib/types';

export const EXPERIENCE: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'aliA Platform',
    location: 'Jalisco, México',
    startDate: '09/2025',
    endDate: 'Presente',
    isCurrent: true,
    description: 'Desarrollo de plataforma empresarial de salud organizacional con análisis de comportamiento mediante IA',
    highlights: [
      'Next.js 16 con SSR y RSC',
      'IA con 95%+ precisión',
      '5 microservicios',
      '-40% latencia'
    ],
    achievements: [
      'Implementación de arquitectura de microservicios escalable',
      'Integración de sistema de IA con LLM',
      'Optimización de rendimiento y reducción de latencia en 40%'
    ]
  },
  {
    title: 'Freelancer Front-End',
    company: 'Digital Kiosk Project',
    location: 'Colima, México',
    startDate: '2023',
    endDate: '2025',
    isCurrent: false,
    description: 'Desarrollo de sistema de autoservicio para fast food con gestión de pedidos en tiempo real',
    highlights: [
      'Eficiencia +40%',
      'Conversión +25%',
      'Errores -95%'
    ],
    achievements: [
      'Diseño responsive optimizado para tablets',
      'Implementación de sistema de gestión de estado robusto',
      'Reducción de errores en pedidos en un 95%'
    ]
  }
];
