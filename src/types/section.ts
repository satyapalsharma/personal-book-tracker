/**
 * Section types for the resume/profile builder.
 */

/** A stats counter section displaying a numeric value with optional suffix. */
export interface StatsSection {
  type: 'stats';
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

/** A skills section showing a list of skills with proficiency levels. */
export interface SkillsSection {
  type: 'skills';
  id: string;
  title: string;
  skills: Skill[];
}

/** A single skill with name and proficiency level (0-100). */
export interface Skill {
  name: string;
  level: number; // 0-100
}

/** A projects section showcasing a list of projects. */
export interface ProjectsSection {
  type: 'projects';
  id: string;
  title: string;
  projects: Project[];
}

/** A single project entry. */
export interface Project {
  title: string;
  description: string;
  link?: string;
}

/** An about section with a markdown bio. */
export interface AboutSection {
  type: 'about';
  id: string;
  bio: string; // markdown
}

/** A social links section containing multiple platform links. */
export interface SocialLinksSection {
  type: 'social';
  id: string;
  links: SocialLink[];
}

/** A single social media link entry. */
export interface SocialLink {
  platform: string;
  url: string;
}

/** Union type of all possible section shapes. */
export type Section =
  | StatsSection
  | SkillsSection
  | ProjectsSection
  | AboutSection
  | SocialLinksSection;
