// Section types for the resume builder

export interface StatsSection {
  type: 'stats';
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillsSection {
  type: 'skills';
  id: string;
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface ProjectsSection {
  type: 'projects';
  id: string;
  title: string;
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface AboutSection {
  type: 'about';
  id: string;
  bio: string; // markdown
}

export interface SocialLinksSection {
  type: 'social';
  id: string;
  links: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export type Section =
  | StatsSection
  | SkillsSection
  | ProjectsSection
  | AboutSection
  | SocialLinksSection;
