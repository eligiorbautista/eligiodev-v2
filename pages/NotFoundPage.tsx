import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 min-h-screen flex items-center justify-center text-center animate-fade-in">
      <div className="relative">
        {/* Decorative corners */}
        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-accent/20" />
        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-accent/20" />
        
        <div className="bg-primary/30 border border-accent/10 p-10 sm:p-14 lg:p-16 max-w-lg">
          {/* Status */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-text-secondary/50 tracking-wider uppercase">
              Error
            </span>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-accent/20 tracking-tighter leading-none mb-2">
            404
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
            <div className="w-8 h-px bg-accent/30" />
            <div className="w-2 h-2 bg-accent/30 rotate-45" />
            <div className="w-8 h-px bg-accent/30" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-main mb-3 sm:mb-4">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            Oops! The page you're looking for seems to have gotten lost in the digital ether. Let's get you back on track.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 font-mono text-sm sm:text-base bg-accent text-background px-6 py-3 sm:px-8 sm:py-4 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
            data-cursor-interactive
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
