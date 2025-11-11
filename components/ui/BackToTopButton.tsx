import React, { useState, useEffect } from 'react';
import { ICONS } from './Icons';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-30 group transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
      aria-label="Go to top"
      data-cursor-interactive
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Main button */}
      <div className="relative bg-primary border-2 border-accent/40 rounded-full p-4 shadow-lg shadow-accent/10 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:scale-110 active:scale-95">
        {/* Inner gradient background on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <div className="relative text-accent group-hover:text-accent-secondary transition-colors duration-300">
          {ICONS.arrowUp}
        </div>
        
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/0 group-hover:border-accent/30 transition-all duration-300"></div>
      </div>
    </button>
  );
};

export default BackToTopButton;