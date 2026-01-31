import { useCallback, useRef, useState } from 'react';
import { UndoRedoActions } from '../types/history';

export function useUndoRedo<T>(
  initialState: T,
  setState: React.Dispatch<React.SetStateAction<T>>
): UndoRedoActions<T> {
  // Stack of past states (excluding current)
  const pastRef = useRef<T[]>([]);
  // Stack of future states (for redo)
  const futureRef = useRef<T[]>([]);

  // We keep a local state to expose the current value.
  // The caller's setState is called to keep external state in sync.
  const [current, setCurrent] = useState<T>(initialState);

  const setStateWithHistory = useCallback(
    (newState: T) => {
      // Push current state onto past stack
      pastRef.current.push(current);
      // Clear future stack on new action
      futureRef.current = [];
      // Update local state
      setCurrent(newState);
      // Notify external setter
      setState(newState);
    },
    [current, setState]
  );

  const undo = useCallback(() => {
    const past = pastRef.current;
    if (past.length === 0) return;

    // Pop the most recent past state
    const previous = past.pop()!;
    // Push current state onto future stack
    futureRef.current.push(current);
    // Update local state
    setCurrent(previous);
    // Notify external setter
    setState(previous);
  }, [current, setState]);

  const redo = useCallback(() => {
    const future = futureRef.current;
    if (future.length === 0) return;

    // Pop the most recent future state
    const next = future.pop()!;
    // Push current state onto past stack
    pastRef.current.push(current);
    // Update local state
    setCurrent(next);
    // Notify external setter
    setState(next);
  }, [current, setState]);

  const clear = useCallback(() => {
    pastRef.current = [];
    futureRef.current = [];
    // Optionally reset to initial state? The spec says "reset history", not reset state.
    // We'll keep current state unchanged.
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
