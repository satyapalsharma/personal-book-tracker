import React from 'react';
import { Logger } from '../utils/logger';

export const SkillsSection: React.FC = () => {
  Logger.info('SkillsSection rendered');

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Skills</h2>
      <p className="text-gray-500">Skills with icons will be added here.</p>
    </div>
  );
};
