import React from 'react';
import { Section } from '../../types/section';
import StatsSection from './StatsSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import SocialLinksSection from './SocialLinksSection';

interface SectionRendererProps {
  section: Section;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  switch (section.type) {
    case 'stats':
      return <StatsSection section={section} />;
    case 'skills':
      return <SkillsSection section={section} />;
    case 'projects':
      return <ProjectsSection section={section} />;
    case 'about':
      return <AboutSection section={section} />;
    case 'social':
      return <SocialLinksSection section={section} />;
    default: {
      // Exhaustive check – if a new type is added, TypeScript will error here.
      const _exhaustive: never = section;
      void _exhaustive;
      return <div>Unknown section type</div>;
    }
  }
};

export default SectionRenderer;
