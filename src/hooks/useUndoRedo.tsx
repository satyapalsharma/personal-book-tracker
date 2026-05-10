import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { UndoRedoActions } from '../types/history';
import type { AppState } from '../types';

// ---------------------------------------------------------------------------
// Provider + context-based hook (used by App, MarkdownPreview, UndoRedoControls)
// ---------------------------------------------------------------------------

export interface UndoRedoContextValue {
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

export const UndoRedoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

// ---------------------------------------------------------------------------
// Standalone generic undo/redo hook (used by UndoRedoDemo)
// ---------------------------------------------------------------------------

export function useUndoRedoHistory<T>(
  initialState: T,
  setState: Dispatch<SetStateAction<T>>,
): UndoRedoActions<T> {
  const pastRef = useRef<T[]>([]);
  const futureRef = useRef<T[]>([]);

  const [current, setCurrent] = useState<T>(initialState);

  const setStateWithHistory = useCallback(
    (newState: T) => {
      pastRef.current.push(current);
      futureRef.current = [];
      setCurrent(newState);
      setState(newState);
    },
    [current, setState],
  );

  const undo = useCallback(() => {
    const past = pastRef.current;
    if (past.length === 0) return;
    const previous = past.pop() as T;
    futureRef.current.push(current);
    setCurrent(previous);
    setState(previous);
  }, [current, setState]);

  const redo = useCallback(() => {
    const future = futureRef.current;
    if (future.length === 0) return;
    const next = future.pop() as T;
    pastRef.current.push(current);
    setCurrent(next);
    setState(next);
  }, [current, setState]);

  const clear = useCallback(() => {
    pastRef.current = [];
    futureRef.current = [];
  }, []);

  return {
    state: current,
    setState: setStateWithHistory,
    undo,
    redo,
    canUndo: pastRef.current.length > 0,
    canRedo: futureRef.current.length > 0,
    clear,
  };
}
