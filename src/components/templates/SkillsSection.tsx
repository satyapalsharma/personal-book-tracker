import React from 'react';
import { SkillsSection as SkillsSectionType } from '../../types/section';

interface SkillsSectionProps {
  section: SkillsSectionType;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ section }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {section.title}
      </h3>
      <div className="space-y-2">
        {section.skills.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <span className="w-24 text-sm text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
