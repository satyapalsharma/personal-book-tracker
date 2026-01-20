import React from 'react';

interface SectionData {
  id: string;
  title: string;
}

interface SectionCardProps {
  section: SectionData;
  index: number;
  isDragging: boolean;
  isOver: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  index,
  isDragging,
  isOver,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
}) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragEnd={onDragEnd}
      className={`p-2 bg-gray-100 dark:bg-gray-700 rounded flex items-center gap-2 ${
        isDragging ? 'opacity-50' : ''
      } ${isOver ? 'border-t-2 border-blue-500' : 'border-t-2 border-transparent'}`}
    >
      <span className="cursor-grab active:cursor-grabbing" aria-label="Drag handle">
        ⠿
      </span>
      <span>{section.title}</span>
    </div>
  );
};
