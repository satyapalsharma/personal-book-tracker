import React from 'react';
import { Logger } from '../utils/logger';

export const SocialLinks: React.FC = () => {
  Logger.info('SocialLinks rendered');

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Social Links</h2>
      <p className="text-gray-500">Social links will be configured here.</p>
    </div>
  );
};
