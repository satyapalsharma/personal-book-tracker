import React, { useState, useEffect, useCallback } from 'react';
import { useUndoRedo } from '../hooks/useUndoRedo';

const UndoRedoDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const { state, setState, undo, redo, canUndo, canRedo } = useUndoRedo(count, setCount);

  const increment = useCallback(() => {
    setState(state + 1);
  }, [setState, state]);

  const decrement = useCallback(() => {
    setState(state - 1);
  }, [setState, state]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'z') {
        e.preventDefault();
        undo();
      } else if (e.ctrlKey && e.key === 'y') {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Undo/Redo Counter</h2>
      <p className="mb-2">Count: {state}</p>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -1
        </button>
        <button
          onClick={undo}
          disabled={!canUndo}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Redo
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">Ctrl+Z / Ctrl+Y</p>
    </div>
  );
};

export default UndoRedoDemo;
