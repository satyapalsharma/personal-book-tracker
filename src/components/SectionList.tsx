import React from 'react';
import { useUndoRedo } from '../hooks/useUndoRedo';
import { Logger } from '../utils/logger';

export const SectionList: React.FC = () => {
  const { state } = useUndoRedo();

  Logger.info('SectionList rendered');

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Sections</h2>
      {state.sections.length === 0 ? (
        <p className="text-gray-500">Drag sections from the templates to start building your profile.</p>
      ) : (
        <ul className="space-y-2">
          {state.sections.map(section => (
            <li key={section.id} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              {section.type} (order: {section.order})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
