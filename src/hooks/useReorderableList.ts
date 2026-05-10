import { useState, useCallback, useRef } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ListItem {
  id: string;
  [key: string]: unknown;
}

export interface DragState {
  draggedIndex: number | null;
  overIndex: number | null;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useReorderableList<T extends { id: string }>(initialItems: T[]) {
  const [items, setItems] = useState<T[]>(initialItems);
  const dragStateRef = useRef<DragState>({
    draggedIndex: null,
    overIndex: null,
  });

  // Keep a ref to the latest items so callbacks always have the current value
  const itemsRef = useRef<T[]>(items);
  itemsRef.current = items;

  const onDragStart = useCallback(
    (e: React.DragEvent<HTMLElement>, index: number) => {
      dragStateRef.current.draggedIndex = index;
      dragStateRef.current.overIndex = null;

      // Required for Firefox
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(index));
    },
    [],
  );

  const onDragOver = useCallback(
    (e: React.DragEvent<HTMLElement>, index: number) => {
      e.preventDefault(); // Allow drop
      e.dataTransfer.dropEffect = 'move';

      const { draggedIndex } = dragStateRef.current;
      if (draggedIndex === null || draggedIndex === index) {
        return;
      }

      dragStateRef.current.overIndex = index;
    },
    [],
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLElement>, index: number) => {
      e.preventDefault();

      const { draggedIndex } = dragStateRef.current;
      if (draggedIndex === null || draggedIndex === index) {
        // Reset drag state
        dragStateRef.current = { draggedIndex: null, overIndex: null };
        return;
      }

      const currentItems = itemsRef.current;
      const newItems = [...currentItems];
      const [removed] = newItems.splice(draggedIndex, 1);
      newItems.splice(index, 0, removed);

      setItems(newItems);

      // Reset drag state
      dragStateRef.current = { draggedIndex: null, overIndex: null };
    },
    [],
  );

  const onDragEnd = useCallback(() => {
    dragStateRef.current = { draggedIndex: null, overIndex: null };
  }, []);

  return {
    items,
    setItems,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnd,
  };
}
