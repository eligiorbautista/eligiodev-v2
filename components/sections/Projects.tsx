import React from 'react';
import { Link } from 'react-router-dom';
import { SECTION_TITLES } from '../../config/site';
import { PROJECTS } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../cards/ProjectCard';

const Projects: React.FC = () => {
  const projectsToShow = PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
       <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <SectionTitle>{SECTION_TITLES.projects}</SectionTitle>
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {PROJECTS.length > 4 && (
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block font-mono text-sm sm:text-base bg-transparent border-2 border-accent text-accent px-5 py-2.5 sm:px-7 sm:py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              View All Projects
            </Link>
          </div>
        )}
       </div>
    </section>
  );
};

export default Projects;