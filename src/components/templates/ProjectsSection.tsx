import React from 'react';
import { ProjectsSection as ProjectsSectionType } from '../../types/section';

interface ProjectsSectionProps {
  section: ProjectsSectionType;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ section }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {section.title}
      </h3>
      <div className="space-y-4">
        {section.projects.map((project) => (
          <div key={project.title} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
