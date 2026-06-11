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
    title: 'Freelancer Full Stack',
    company: 'DOK Imagen Dental',
    location: 'Manzanillo, Col',
    startDate: '01/2026',
    endDate: '04/2026',
    isCurrent: false,
    description: 'Desarrollo de plataforma web para clínicas dentales con gestión de pacientes y estudios radiológicos',
    highlights: [
      'Multi-rol Auth',
      'Cloudflare R2',
      'Edge Deploy'
    ],
    achievements: [
      'Sistema multi-rol (Admin / Doctor) con Supabase Auth y Row Level Security',
      'Almacenamiento seguro de estudios médicos en Cloudflare R2 con presigned URLs',
      'Generación de reportes clínicos en PDF y despliegue en Cloudflare Pages'
    ]
  },
  {
    title: 'Proyecto de Maestría',
    company: 'Learning Analytics Platform',
    location: 'Colima, Col',
    startDate: '08/2023',
    endDate: '07/2025',
    isCurrent: false,
    description: 'Plataforma educativa con analíticas de comportamiento de estudiantes en videos y transcripción automática con IA',
    highlights: [
      'IA Whisper + Llama',
      'Cloudflare R2',
      'Edge Runtime'
    ],
    achievements: [
      'Transcripción automática de videos con Whisper Large V3 vía Groq API',
      'Análisis contextual de contenido educativo con Llama 3.3 70B',
      'Dashboard en tiempo real con métricas de visualización y eventos por estudiante'
    ]
  }
];
