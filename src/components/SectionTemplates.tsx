import React from 'react';
import { Logger } from '../utils/logger';

export const SectionTemplates: React.FC = () => {
  Logger.info('SectionTemplates rendered');

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Templates</h2>
      <p className="text-gray-500">Predefined section templates will appear here.</p>
    </div>
  );
};
