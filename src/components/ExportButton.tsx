import React from 'react';
import { Logger } from '../utils/logger';

export const ExportButton: React.FC = () => {
  const handleExport = () => {
    Logger.info('Export triggered');
    // Placeholder: copy markdown to clipboard
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Export Markdown to Clipboard
    </button>
  );
};
