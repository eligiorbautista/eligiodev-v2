import React, { useState } from 'react';
import { Project } from '../../types';
import { ICONS } from '../ui/Icons';
import ProjectModal from '../ui/modals/ProjectModal';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-primary/30 border border-accent/10 p-5 sm:p-6 flex flex-col h-full hover:border-accent/25 transition-all duration-300">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300" />
        
        <div
          className="relative mb-4 overflow-hidden cursor-pointer bg-primary/40 border border-accent/5 group-hover:border-accent/10 transition-all duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-300" />
        </div>
        <div className="flex-grow flex flex-col min-h-0">
          <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-1 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
          <p className="text-xs sm:text-sm font-mono text-text-secondary/60 mb-3">{project.date}</p>
          <p className="text-sm sm:text-base text-text-secondary mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span key={i} className="text-xs font-mono border border-accent/15 text-accent/70 px-2 py-1">{tag}</span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs font-mono text-text-secondary/50 px-2 py-1">+{project.tags.length - 4}</span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-accent/10">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wide text-text-secondary hover:text-accent transition-colors"
            data-cursor-interactive
          >
            {ICONS.eye}
            View Details
          </button>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wide text-text-secondary hover:text-accent transition-colors"
              data-cursor-interactive
            >
              {ICONS.github}
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wide text-text-secondary hover:text-accent transition-colors"
              data-cursor-interactive
            >
              {ICONS.link}
              Live Demo
            </a>
          )}
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        imageUrl={project.image}
        alt={project.title}
        onClose={() => setIsModalOpen(false)}
        projectData={project}
      />
    </>
  );
};

export default ProjectCard;