/**
 * Core application state and data types.
 */

/** Represents a single section within the profile layout. */
export interface Section {
  id: string;
  type: SectionType;
  order: number;
  content: Record<string, unknown>;
}

/** The supported section type identifiers. */
export type SectionType = 'stats' | 'skills' | 'social' | 'custom';

/** Global application state managed by the undo/redo system. */
export interface AppState {
  sections: Section[];
  theme: 'light' | 'dark';
  history: AppState[];
  future: AppState[];
}

/** Data required to render a GitHub stats card. */
export interface StatsCardData {
  username: string;
  showStars: boolean;
  showForks: boolean;
}

/** A single skill with a display name and icon. */
export interface Skill {
  name: string;
  icon: React.ReactNode;
}

/** A social media link entry. */
export interface SocialLink {
  platform: string;
  url: string;
}
