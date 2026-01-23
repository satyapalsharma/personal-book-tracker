import React from 'react';
import { AboutSection as AboutSectionType } from '../../types/section';

interface AboutSectionProps {
  section: AboutSectionType;
}

const AboutSection: React.FC<AboutSectionProps> = ({ section }) => {
  // For simplicity, render bio as plain text. Could use a markdown renderer.
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        About
      </h3>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {section.bio}
      </p>
    </div>
  );
};

export default AboutSection;
