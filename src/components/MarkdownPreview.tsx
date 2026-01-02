import React from 'react';
import { useUndoRedo } from '../hooks/useUndoRedo';
import { Logger } from '../utils/logger';

export const MarkdownPreview: React.FC = () => {
  const { state } = useUndoRedo();

  // Placeholder: will generate markdown from sections
  const markdown = state.sections
    .map(section => `<!-- Section: ${section.type} -->\n${JSON.stringify(section.content)}`)
    .join('\n\n');

  Logger.info('MarkdownPreview rendered');

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Markdown Preview</h2>
      <pre className="whitespace-pre-wrap text-sm font-mono">{markdown || 'No sections added yet.'}</pre>
    </div>
  );
};
