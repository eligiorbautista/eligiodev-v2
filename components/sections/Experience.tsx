import React, { useState } from 'react';
import { SECTION_TITLES } from '../../config/site';
import { EXPERIENCE } from '../../data/experience';
import SectionTitle from '../ui/SectionTitle';

const Experience: React.FC = () => {
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const activeJob = EXPERIENCE[activeJobIndex];

  return (
    <section id="experience" className="py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <SectionTitle>{SECTION_TITLES.experience}</SectionTitle>
        <div className="flex flex-col md:flex-row gap-8 min-h-[340px]">
          {/* Company Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-accent/20">
            {EXPERIENCE.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveJobIndex(index)}
                className={`w-full text-left font-mono whitespace-nowrap p-3 px-4 text-sm hover:bg-accent/10 hover:text-accent transition-colors duration-300 ${
                  activeJobIndex === index ? 'text-accent bg-accent/5' : 'text-text-secondary'
                }`}
              >
                {job.company}
              </button>
            ))}
            <div
                className="hidden md:block absolute h-[42px] w-1 bg-accent rounded-sm transition-transform duration-300"
                style={{ transform: `translateY(${activeJobIndex * 42}px)` }}
             />
          </div>
          
          {/* Job Details */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-text-main mb-1">
              {activeJob.role} <span className="text-accent">@ {activeJob.company}</span>
            </h3>
            <p className="font-mono text-text-secondary mb-6">{activeJob.duration}</p>
            <ul className="space-y-3">
              {activeJob.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent font-mono mr-3 text-lg">&gt;</span>
                  <span className="text-text-secondary">{item}</span>
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