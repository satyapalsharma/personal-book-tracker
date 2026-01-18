import React from 'react';
import { StatsSection as StatsSectionType } from '../../types/section';

interface StatsSectionProps {
  section: StatsSectionType;
}

const StatsSection: React.FC<StatsSectionProps> = ({ section }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {section.label}
      </h3>
      <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
        {section.value}
        {section.suffix && <span className="text-lg ml-1">{section.suffix}</span>}
      </p>
    </div>
  );
};

export default StatsSection;
