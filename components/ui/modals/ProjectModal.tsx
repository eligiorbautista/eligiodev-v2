import React from 'react';
import { Project } from '../../../types';
import { ICONS } from '../Icons';
import BaseModal from '../BaseModal';

interface ProjectModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
  projectData: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, imageUrl, alt, onClose, projectData }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Project modal">
      <div
        className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 max-w-7xl w-full p-2 sm:p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={alt}
            className="object-contain rounded-lg shadow-2xl w-full h-auto"
            style={{ maxWidth: '100%', maxHeight: '70vh' }}
          />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 p-3 sm:p-4 md:p-6 bg-primary/50 border border-accent/20 rounded-lg max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] overflow-y-auto">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-accent mb-1.5 sm:mb-2">{projectData.title}</h2>
            <p className="text-xs sm:text-sm font-mono text-text-secondary mb-2 sm:mb-3 md:mb-4">{projectData.date}</p>
            <p className="text-sm sm:text-base text-text-secondary mb-3 sm:mb-4 leading-relaxed">{projectData.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {projectData.tags.map((tag, i) => (
              <span key={i} className="text-xs sm:text-sm font-mono bg-background text-accent/80 px-2 py-0.5 sm:px-3 sm:py-1 border border-accent/30">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 pt-2 sm:pt-3 md:pt-4 border-t border-accent/10">
            {projectData.repoUrl && (
              <a
                href={projectData.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1.5 sm:gap-2"
                data-cursor-interactive
              >
                {ICONS.github}
                <span className="font-mono text-xs sm:text-sm">GitHub</span>
              </a>
            )}
            {projectData.liveUrl && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1.5 sm:gap-2"
                data-cursor-interactive
              >
                {ICONS.link}
                <span className="font-mono text-xs sm:text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ProjectModal;


