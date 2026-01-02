import React from 'react';
import { useUndoRedo } from '../hooks/useUndoRedo';
import { Logger } from '../utils/logger';

export const UndoRedoControls: React.FC = () => {
  const { canUndo, canRedo, undo, redo } = useUndoRedo();

  const handleUndo = () => {
    Logger.info('Undo triggered');
    undo();
  };

  const handleRedo = () => {
    Logger.info('Redo triggered');
    redo();
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={handleUndo}
        disabled={!canUndo}
        className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        Undo
      </button>
      <button
        onClick={handleRedo}
        disabled={!canRedo}
        className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        Redo
      </button>
    </div>
  );
};
