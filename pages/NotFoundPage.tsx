import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NotFoundPageProps {
  onBack: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 min-h-screen flex items-center justify-center text-center animate-fade-in">
      <div>
        <h1 className="text-9xl font-mono text-accent animate-pulse">404</h1>
        <h2 className="text-4xl font-bold text-text-main mt-4">Page Not Found</h2>
        <p className="text-text-secondary mt-4 max-w-md mx-auto">
          Oops! The page you're looking for seems to have gotten lost in the digital ether. Let's get you back on track.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 inline-block font-mono text-lg bg-transparent border-2 border-accent text-accent px-8 py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
          data-cursor-interactive
        >
          &lt; Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
