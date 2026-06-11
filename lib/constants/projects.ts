import { Zap, Sparkles, TrendingUp, Users, Shield, ScanLine, Video, BarChart2, Brain } from 'lucide-react';
import type { Project } from '@/lib/types';

export const PROJECTS: Project[] = [
  {
    title: 'al1A Platform',
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
    title: 'DOK Imagen Dental',
    subtitle: 'Dental Clinic Management Platform',
    description: 'Plataforma web para clínicas dentales con gestión de pacientes, estudios radiológicos y control de acceso multi-rol',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
    techs: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare', 'Cloudflare R2'],
    highlights: [
      'Sistema multi-rol (Admin / Doctor) con Supabase Auth y RLS',
      'Almacenamiento de estudios médicos en Cloudflare R2 con presigned URLs',
      'Generación de PDFs de reportes clínicos con jsPDF',
      'Desplegado en Cloudflare Pages con Edge Runtime'
    ],
    metrics: [
      { label: 'Roles', value: '2', icon: Shield },
      { label: 'Storage', value: 'R2', icon: ScanLine },
      { label: 'Deploy', value: 'Edge', icon: Zap }
    ],
    featured: true
  },
  {
    title: 'Learning Analytics',
    subtitle: 'Educational Analytics Platform',
    description: 'Plataforma de analíticas educativas que permite a profesores monitorear el comportamiento de estudiantes en videos con transcripción automática mediante IA',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=600&fit=crop',
    techs: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare R2', 'Groq AI'],
    highlights: [
      'Transcripción automática de videos con Whisper Large V3 (Groq)',
      'Análisis contextual de contenido con Llama 3.3 70B',
      'Dashboard para profesores con métricas de visualización y eventos',
      'Edge Runtime en Cloudflare Pages para mínima latencia global'
    ],
    metrics: [
      { label: 'Videos', value: 'R2', icon: Video },
      { label: 'Análisis', value: 'LLM', icon: Brain },
      { label: 'Analytics', value: 'Real-time', icon: BarChart2 }
    ],
    featured: true
  }
];
