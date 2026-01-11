import React from 'react';
import { Skill } from '../types';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
        {skillsData.map((skill: Skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
