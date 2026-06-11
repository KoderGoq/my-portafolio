import { Code, Zap, Calendar, Users } from 'lucide-react';
import type { Stat } from '@/lib/types';

export const STATS: Stat[] = [
  {
    label: 'Proyectos',
    value: '20+',
    icon: Code,
    color: 'emerald'
  },
  {
    label: 'Tecnologías',
    value: '15+',
    icon: Zap,
    color: 'violet'
  },
  {
    label: 'Experiencia',
    value: '4+',
    icon: Calendar,
    color: 'blue'
  },
  {
    label: 'Clientes',
    value: '10+',
    icon: Users,
    color: 'amber'
  }
];
