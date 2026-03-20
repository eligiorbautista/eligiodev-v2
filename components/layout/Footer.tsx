import React from 'react';
import { Link } from 'react-router-dom';
import { USER_INFO, SOCIAL_LINKS, NAVIGATION_LINKS } from '../../config/site';
import { ICONS } from '../ui/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith('#') ? '/' : link.href}
                className="font-mono text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                data-cursor-interactive
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" data-cursor-interactive>
              {ICONS.github}
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" data-cursor-interactive>
              {ICONS.linkedin}
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" data-cursor-interactive>
              {ICONS.facebook}
            </a>
            <a href={SOCIAL_LINKS.email} className="text-text-secondary hover:text-accent transition-colors duration-300" data-cursor-interactive>
              {ICONS.email}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-accent/5">
          <p className="font-mono text-sm text-text-secondary">
            Built by <span className="text-accent">{USER_INFO.name}</span>
          </p>
          <p className="font-mono text-xs text-text-secondary/50 mt-1">
            © {new Date().getFullYear()} · Based in {USER_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;