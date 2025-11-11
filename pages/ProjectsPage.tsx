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
      <header className="mb-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center font-mono text-lg text-accent hover:text-accent-secondary transition-colors duration-300 mb-4"
          data-cursor-interactive
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
        <h1 className="text-5xl md:text-6xl font-mono text-text-main">All Projects</h1>
        <p className="text-text-secondary mt-2">Explore my work. Use the filters to find what you're looking for.</p>
      </header>

      <div className="mb-8 sticky top-0 bg-background/90 backdrop-blur-sm py-4 z-10">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-primary border-2 border-accent/30 focus:border-accent focus:ring-accent/50 focus:ring-2 text-text-main p-3 font-mono transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-mono text-text-secondary mb-3">Filter by technology:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`font-mono text-sm px-3 py-1 border-2 transition-colors duration-300 ${selectedTags.includes(tag) ? 'bg-accent text-background border-accent' : 'bg-primary text-accent/80 border-accent/30 hover:border-accent'}`}
                data-cursor-interactive
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <div className="md:col-span-2 lg:col-span-3 text-center py-16">
            <p className="text-2xl font-mono text-text-secondary">No projects match your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;