import React from 'react';
import { SocialLinksSection as SocialLinksSectionType } from '../../types/section';

interface SocialLinksSectionProps {
  section: SocialLinksSectionType;
}

const SocialLinksSection: React.FC<SocialLinksSectionProps> = ({ section }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Social Links
      </h3>
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {link.platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinksSection;
