import type {
  StatsSection,
  SkillsSection,
  ProjectsSection,
  AboutSection,
  SocialLinksSection,
} from '../types/section';

export const defaultStatsSection: StatsSection = {
  type: 'stats',
  id: 'stats-1',
  label: 'Years of Experience',
  value: 5,
  suffix: '+',
};

export const defaultSkillsSection: SkillsSection = {
  type: 'skills',
  id: 'skills-1',
  title: 'Technical Skills',
  skills: [
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
  ],
};

export const defaultProjectsSection: ProjectsSection = {
  type: 'projects',
  id: 'projects-1',
  title: 'Projects',
  projects: [
    {
      title: 'Resume Builder',
      description: 'A drag-and-drop resume builder built with React and TypeScript.',
      link: 'https://example.com/resume-builder',
    },
  ],
};

export const defaultAboutSection: AboutSection = {
  type: 'about',
  id: 'about-1',
  bio: '## About Me\n\nI am a full-stack developer with a passion for building great user experiences.',
};

export const defaultSocialLinksSection: SocialLinksSection = {
  type: 'social',
  id: 'social-1',
  links: [
    { platform: 'GitHub', url: 'https://github.com/username' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  ],
};
