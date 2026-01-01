import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiDocker,
  SiRedis,
  SiPrisma
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import type { TechStack } from '@/lib/types';

export const TECH_STACK: TechStack[] = [
  {
    name: 'React',
    icon: SiReact,
    category: 'Frontend',
    color: '#61DAFB'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    category: 'Frontend',
    color: '#000000'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Language',
    color: '#3178C6'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    category: 'Backend',
    color: '#339933'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    category: 'Database',
    color: '#336791'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    category: 'Database',
    color: '#47A248'
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    category: 'Frontend',
    color: '#06B6D4'
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    category: 'Mobile',
    color: '#61DAFB'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    category: 'DevOps',
    color: '#2496ED'
  },
  {
    name: 'Redis',
    icon: SiRedis,
    category: 'Database',
    color: '#DC382D'
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    category: 'Backend',
    color: '#2D3748'
  },
  {
    name: 'Express',
    icon: SiExpress,
    category: 'Backend',
    color: '#000000'
  }
];
