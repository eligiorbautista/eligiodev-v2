import React, { useState, useEffect } from 'react';

let globalSectionCount = 0;

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sectionNumber, setSectionNumber] = useState<string | null>(null);

  useEffect(() => {
    globalSectionCount += 1;
    setSectionNumber(String(globalSectionCount).padStart(2, '0'));
  }, []);

  return (
    <h2 className="text-3xl sm:text-4xl font-mono text-accent mb-6 sm:mb-8 relative flex items-center gap-4">
      {sectionNumber && (
        <span className="text-2xl sm:text-3xl text-text-secondary/30 font-mono">
          {sectionNumber}.
        </span>
      )}
      <span className="relative">
        {children}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent/50"></span>
      </span>
    </h2>
  );
};

export default SectionTitle;