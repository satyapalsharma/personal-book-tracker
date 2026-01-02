import React, { createContext, useContext, useState, useCallback } from 'react';
import { AppState } from '../types';

interface UndoRedoContextValue {
  state: AppState;
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  setState: (newState: AppState) => void;
}

const initialAppState: AppState = {
  sections: [],
  theme: 'light',
  history: [],
  future: [],
};

const UndoRedoContext = createContext<UndoRedoContextValue>({
  state: initialAppState,
  canUndo: false,
  canRedo: false,
  undo: () => {},
  redo: () => {},
  setState: () => {},
});

export const UndoRedoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setInternalState] = useState<AppState>(initialAppState);

  const setState = useCallback((newState: AppState) => {
    setInternalState(prev => ({
      ...newState,
      history: [...prev.history, prev],
      future: [],
    }));
  }, []);

  const undo = useCallback(() => {
    setInternalState(prev => {
      if (prev.history.length === 0) return prev;
      const previous = prev.history[prev.history.length - 1];
      const newHistory = prev.history.slice(0, -1);
      return {
        ...previous,
        history: newHistory,
        future: [prev, ...prev.future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setInternalState(prev => {
      if (prev.future.length === 0) return prev;
      const next = prev.future[0];
      const newFuture = prev.future.slice(1);
      return {
        ...next,
        history: [...prev.history, prev],
        future: newFuture,
      };
    });
  }, []);

  const canUndo = state.history.length > 0;
  const canRedo = state.future.length > 0;

  return (
    <UndoRedoContext.Provider value={{ state, canUndo, canRedo, undo, redo, setState }}>
      {children}
    </UndoRedoContext.Provider>
  );
};

export const useUndoRedo = (): UndoRedoContextValue => useContext(UndoRedoContext);
