/**
 * Generic undo/redo action interface for state management.
 */

/** Provides undo/redo controls over a generic state type T. */
export interface UndoRedoActions<T> {
  /** The current state value. */
  state: T;
  /** Setter to update the current state. */
  setState: (newState: T) => void;
  /** Revert to the previous state, if available. */
  undo: () => void;
  /** Re-apply a previously undone state, if available. */
  redo: () => void;
  /** Whether an undo operation is currently possible. */
  canUndo: boolean;
  /** Whether a redo operation is currently possible. */
  canRedo: boolean;
  /** Clear the entire undo/redo history. */
  clear: () => void;
}
