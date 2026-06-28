import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode; number: string }> = ({ children, number }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-mono text-accent mb-6 sm:mb-8 relative flex items-center gap-4">
      <span className="text-2xl sm:text-3xl text-text-secondary/30 font-mono">
        {number}.
      </span>
      <span className="relative">
        {children}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent/50"></span>
      </span>
    </h2>
  );
};

export default SectionTitle;