import React, { useState, useCallback } from 'react';
import { useReorderableList } from '../hooks/useReorderableList';
import { SectionCard } from './SectionCard';

interface SectionData {
  id: string;
  title: string;
}

interface SectionListProps {
  initialSections?: SectionData[];
}

export const SectionList: React.FC<SectionListProps> = ({ initialSections = [] }) => {
  const { items, setItems } = useReorderableList<SectionData>(initialSections);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      setDraggedIndex(index);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(index));
    },
    []
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.preventDefault();
      setOverIndex(index);
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
      e.preventDefault();
      if (draggedIndex === null || draggedIndex === dropIndex) {
        setDraggedIndex(null);
        setOverIndex(null);
        return;
      }

      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(draggedIndex, 1);
      updatedItems.splice(dropIndex, 0, movedItem);
      setItems(updatedItems);

      setDraggedIndex(null);
      setOverIndex(null);
    },
    [draggedIndex, items, setItems]
  );

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setOverIndex(null);
  }, []);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Sections</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Drag sections from the templates to start building your profile.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((section, index) => (
            <li key={section.id}>
              <SectionCard
                section={section}
                index={index}
                isDragging={draggedIndex === index}
                isOver={overIndex === index}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
