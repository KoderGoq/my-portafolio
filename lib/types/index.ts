import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface TechStack {
  name: string;
  icon: IconType;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Mobile' | 'Language';
  color: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techs: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  color: 'emerald' | 'violet' | 'blue' | 'amber';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Presente';
  isCurrent: boolean;
  description: string;
  highlights: string[];
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: LucideIcon;
  type: 'email' | 'linkedin' | 'github' | 'location';
}
