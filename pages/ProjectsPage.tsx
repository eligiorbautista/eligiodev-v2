import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import ProjectCard from '../components/cards/ProjectCard';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const queryMatch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const tagsMatch = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));

      return queryMatch && tagsMatch;
    });
  }, [searchQuery, selectedTags]);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 min-h-screen animate-fade-in">
      {/* Header */}
      <header className="mb-12 sm:mb-14">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-accent hover:text-text-main transition-colors duration-300 mb-6 sm:mb-8"
          data-cursor-interactive
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
        
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="font-mono text-xs sm:text-sm text-text-secondary/50 tracking-widest uppercase mb-3 sm:mb-4 block">
              03. Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-main tracking-tight">
              All Projects
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-accent/30" />
            <span className="font-mono text-xs text-text-secondary/40 tracking-wider">
              {PROJECTS.length} TOTAL
            </span>
          </div>
        </div>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mt-4 sm:mt-5">
          Explore my work. Use the filters to find what you're looking for.
        </p>
      </header>

      {/* Filters */}
      <div className="mb-8 sm:mb-10 sticky top-0 bg-background/95 backdrop-blur-sm py-4 sm:py-6 z-10 border-b border-accent/10">
        <div className="mb-4 sm:mb-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary/30 border border-accent/10 focus:border-accent/30 text-text-main p-3 sm:p-4 font-mono text-sm sm:text-base transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary/30">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-mono text-xs sm:text-sm text-text-secondary/60 mb-3 tracking-wider">Filter by technology:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`font-mono text-xs sm:text-sm px-3 py-1.5 border transition-all duration-300 btn-press ${selectedTags.includes(tag) ? 'bg-accent text-background border-accent' : 'bg-primary/30 text-text-secondary border-accent/10 hover:border-accent/30'}`}
                data-cursor-interactive
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="h-full relative">
              <div className="absolute -top-3 -left-3 z-10 w-8 h-8 bg-primary border border-accent/20 flex items-center justify-center">
                <span className="font-mono text-xs text-accent/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="md:col-span-2 text-center py-16">
            <div className="bg-primary/30 border border-accent/10 p-8 sm:p-12 max-w-lg mx-auto">
              <p className="text-xl sm:text-2xl font-bold text-text-secondary mb-4">No projects match your criteria.</p>
              <p className="text-sm text-text-secondary/60">Try adjusting your search or filters.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
