import { Code, Zap, Calendar, Users } from 'lucide-react';
import type { Stat } from '@/lib/types';

export const STATS: Stat[] = [
  {
    label: 'Proyectos',
    value: '10+',
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
    value: '2+',
    icon: Calendar,
    color: 'blue'
  },
  {
    label: 'Clientes',
    value: '5+',
    icon: Users,
    color: 'amber'
  }
];
