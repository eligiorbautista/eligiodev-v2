import React from 'react';

const Loader: React.FC<{ isFinishing: boolean }> = ({ isFinishing }) => {
  const logoText = '<ELI DEV/>'.split('');

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFinishing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-4xl font-mono text-accent flex items-center">
        {logoText.map((char, index) => (
          <span
            key={index}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
         <span className="inline-block w-1 h-8 ml-1 animate-typing-b border-r-4 border-accent" />
      </div>
    </div>
  );
};

export default Loader;