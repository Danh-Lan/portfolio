import React from 'react';
import projects from '../data/projects.json';
import { Project } from '../types/Project';

const Projects: React.FC = () => {
  return (
    <div className="bg-white text-black p-4">
      {projects.map((project: Project, index: number) => (
        <div 
          key={index} 
          className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 transition-shadow hover:shadow-xl"
        >
          <h3 className="text-xl font-bold mb-2">
            <a href={project.url} className="text-blue-500 hover:underline">{project.name}</a>
          </h3>
          <p className="font-semibold">{project.technologies.join(", ")}</p>
          <p className="mb-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;