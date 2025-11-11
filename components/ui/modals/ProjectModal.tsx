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
        className="flex flex-col lg:flex-row gap-6 max-w-7xl w-full p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={alt}
            className="object-contain rounded-lg shadow-2xl w-full h-auto"
            style={{ maxWidth: '100%', maxHeight: '85vh' }}
          />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6 p-6 bg-primary/50 border border-accent/20 rounded-lg max-h-[85vh] overflow-y-auto">
          <div>
            <h2 className="text-3xl font-mono text-accent mb-2">{projectData.title}</h2>
            <p className="text-sm font-mono text-text-secondary mb-4">{projectData.date}</p>
            <p className="text-text-secondary mb-4 leading-relaxed">{projectData.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {projectData.tags.map((tag, i) => (
              <span key={i} className="text-sm font-mono bg-background text-accent/80 px-3 py-1 border border-accent/30">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 pt-4 border-t border-accent/10">
            {projectData.repoUrl && (
              <a
                href={projectData.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
                data-cursor-interactive
              >
                {ICONS.github}
                <span className="font-mono text-sm">GitHub</span>
              </a>
            )}
            {projectData.liveUrl && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
                data-cursor-interactive
              >
                {ICONS.link}
                <span className="font-mono text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ProjectModal;


