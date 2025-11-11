import React from 'react';
import { USER_INFO, SOCIAL_LINKS } from '../../config/site';
import { ICONS } from '../ui/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center text-text-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300" data-cursor-interactive>
            {ICONS.github}
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300" data-cursor-interactive>
            {ICONS.linkedin}
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300" data-cursor-interactive>
            {ICONS.facebook}
          </a>
          <a href={SOCIAL_LINKS.email} className="hover:text-accent transition-colors duration-300" data-cursor-interactive>
            {ICONS.email}
          </a>
        </div>
        <p className="font-mono text-sm">
          Designed & Built by {USER_INFO.name}
        </p>
        <p className="font-mono text-xs mt-1">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;