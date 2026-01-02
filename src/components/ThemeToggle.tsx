import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Logger } from '../utils/logger';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    Logger.info(`Theme toggled from ${theme} to ${theme === 'light' ? 'dark' : 'light'}`);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
