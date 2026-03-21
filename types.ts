import { LucideIcon } from 'lucide-react';

export type ProjectCategory = 'All' | 'AI/ML' | 'Full Stack' | 'Web Dev' | 'Database';
export type BlogCategory = 'All' | 'Hackathon' | 'Workshop' | 'Presentation';

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: LucideIcon;
}

export interface ProjectLinks {
  demo?: string;
  code?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription?: string;
  tags?: string[];
  tech: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
  links?: ProjectLinks;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  type: 'Education' | 'Work' | 'Hackathon' | 'Workshop';
  logo?: string;
  image?: string; // Certificate proof
}

export interface Certification {
  pdf?: string;
  id: number;
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  url?: string; // Link to credential
  image?: string; // For the popup
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: string;
  image?: string; // Certificate proof
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  roles: string[];
  tagline: string;
  email: string;
  phone: string;
  about: string;
  aboutImage?: string;
  location: string;
  degree?: string;
  resumeUrl?: string;
  profileImage?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  certifications: Certification[];
  blogs: Blog[];
  socialLinks: SocialLink[];
}