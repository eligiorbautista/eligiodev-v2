import React, { useState, useRef, useEffect } from 'react';
import { SECTION_TITLES } from '../../config/site';
import { EXPERIENCE } from '../../data/experience';
import SectionTitle from '../ui/SectionTitle';

const Experience: React.FC = () => {
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ transform: 'translateY(0)' });
  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeJob = EXPERIENCE[activeJobIndex];

  useEffect(() => {
    const activeTab = tabsRef.current[activeJobIndex];
    if (activeTab && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const offsetTop = tabRect.top - containerRect.top;
      setIndicatorStyle({ transform: `translateY(${offsetTop}px)` });
    }
  }, [activeJobIndex]);

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-14 lg:mb-16">
          <div>
            <SectionTitle number="04">{SECTION_TITLES.experience}</SectionTitle>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mt-4">
              My professional journey so far — roles that shaped my skills as a developer.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-accent/30" />
            <span className="font-mono text-xs text-text-secondary/40 tracking-wider">
              {EXPERIENCE.length} ROLES
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 min-h-[300px]">
          {/* Company Tabs */}
          <div ref={containerRef} className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible md:w-64 lg:w-72 flex-shrink-0">
            {/* Decorative top accent */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-px bg-accent/10" />
            
            {EXPERIENCE.map((job, index) => (
              <button
                key={index}
                ref={(el) => { if (el) tabsRef.current[index] = el; }}
                onClick={() => setActiveJobIndex(index)}
                className={`relative z-10 w-full text-left font-mono whitespace-nowrap px-4 py-3.5 sm:px-5 sm:py-4 text-xs sm:text-sm border-l-2 transition-all duration-300 ${
                  activeJobIndex === index 
                    ? 'text-accent border-accent bg-accent/5' 
                    : 'text-text-secondary border-accent/10 hover:text-accent hover:bg-accent/5 hover:border-accent/30'
                }`}
              >
                <span className="block font-bold">{job.company}</span>
                <span className="block text-[10px] sm:text-xs text-text-secondary/50 mt-1">{job.duration}</span>
              </button>
            ))}
            <div
              className="hidden md:block absolute left-0 w-0.5 bg-accent transition-transform duration-300 ease-out"
              style={{ 
                transform: indicatorStyle.transform,
                height: '48px',
                top: '0'
              }}
            />
            {/* Decorative bottom accent */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-px bg-accent/10" />
          </div>
          
          {/* Job Details */}
          <div className="flex-grow relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/20" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/20" />
            
            <div className="bg-primary/30 border border-accent/10 p-6 sm:p-8 lg:p-10 h-full hover:border-accent/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-mono text-xs text-text-secondary/50 tracking-wider uppercase">
                  {activeJobIndex === 0 ? 'Current Role' : 'Previous Role'}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-main mb-2">
                {activeJob.role}
              </h3>
              <p className="text-accent font-mono text-sm sm:text-base mb-1">
                @ {activeJob.company}
              </p>
              <p className="font-mono text-xs sm:text-sm text-text-secondary/60 mb-8">
                {activeJob.duration}
              </p>
              
              <div className="relative pl-5 sm:pl-6 border-l border-accent/10">
                <ul className="space-y-4">
                  {activeJob.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent/60 font-mono text-sm mt-0.5 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
