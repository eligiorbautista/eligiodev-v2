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
        <SectionTitle>{SECTION_TITLES.experience}</SectionTitle>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 min-h-[300px]">
          {/* Company Tabs */}
          <div ref={containerRef} className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-accent/20">
            {EXPERIENCE.map((job, index) => (
              <button
                key={index}
                ref={(el) => { if (el) tabsRef.current[index] = el; }}
                onClick={() => setActiveJobIndex(index)}
                className={`relative z-10 w-full text-left font-mono whitespace-nowrap px-3 py-2.5 text-xs sm:text-sm hover:bg-accent/10 hover:text-accent transition-colors duration-300 ${
                  activeJobIndex === index ? 'text-accent bg-accent/5' : 'text-text-secondary'
                }`}
              >
                {job.company}
              </button>
            ))}
            <div
                className="hidden md:block absolute left-0 w-1 bg-accent rounded-sm transition-transform duration-300 ease-out"
                style={{ 
                  transform: indicatorStyle.transform,
                  height: '42px',
                  top: '0'
                }}
              />
          </div>
          
          {/* Job Details */}
          <div className="flex-grow space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-text-main">
              {activeJob.role} <span className="text-accent">@ {activeJob.company}</span>
            </h3>
            <p className="font-mono text-xs sm:text-sm text-text-secondary">{activeJob.duration}</p>
            <ul className="space-y-3">
              {activeJob.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent font-mono mr-3 text-base sm:text-lg">{'>'}</span>
                  <span className="text-sm sm:text-base text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;