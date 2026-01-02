export interface Section {
  id: string;
  type: SectionType;
  order: number;
  content: Record<string, unknown>;
}

export type SectionType = 'stats' | 'skills' | 'social' | 'custom';

export interface AppState {
  sections: Section[];
  theme: 'light' | 'dark';
  history: AppState[];
  future: AppState[];
}

export interface StatsCardData {
  username: string;
  showStars: boolean;
  showForks: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}
