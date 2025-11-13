import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-mono text-accent mb-6 sm:mb-8 relative">
    {children}
    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent/50"></span>
  </h2>
);

export default SectionTitle;