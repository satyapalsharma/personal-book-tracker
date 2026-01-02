import React from 'react';
import { Logger } from '../utils/logger';

export const StatsCard: React.FC = () => {
  Logger.info('StatsCard rendered');

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">GitHub Stats Card</h2>
      <p className="text-gray-500">Customizable stats card will be configured here.</p>
    </div>
  );
};
