import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { UndoRedoProvider } from './hooks/useUndoRedo';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Logger } from './utils/logger';
import { MarkdownPreview } from './components/MarkdownPreview';
import { SectionList } from './components/SectionList';
import { SectionTemplates } from './components/SectionTemplates';
import { StatsCard } from './components/StatsCard';
import { SkillsSection } from './components/SkillsSection';
import { SocialLinks } from './components/SocialLinks';
import { ExportButton } from './components/ExportButton';
import { ThemeToggle } from './components/ThemeToggle';
import { UndoRedoControls } from './components/UndoRedoControls';

const App: React.FC = () => {
  Logger.info('App rendered');

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <UndoRedoProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Profilr</h1>
              <div className="flex items-center gap-2">
                <UndoRedoControls />
                <ThemeToggle />
              </div>
            </header>
            <main className="flex flex-col lg:flex-row gap-4 p-4">
              <aside className="w-full lg:w-1/3 space-y-4">
                <SectionTemplates />
                <StatsCard />
                <SkillsSection />
                <SocialLinks />
              </aside>
              <section className="flex-1 space-y-4">
                <SectionList />
                <MarkdownPreview />
                <ExportButton />
              </section>
            </main>
          </div>
        </UndoRedoProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
