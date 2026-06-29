import React, { useState, useEffect } from 'react';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setPassword('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[9998] flex items-center justify-center animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="password-modal-title"
    >
      <div 
        className="bg-primary/30 border border-accent/10 p-4 sm:p-6 md:p-8 w-full max-w-sm m-2 sm:m-4 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        data-cursor-interactive
      >
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/20" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/20" />
        
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 sm:top-0 sm:right-0 text-text-secondary hover:text-accent transition-colors bg-primary border border-accent/20 hover:border-accent/40 p-1.5 sm:p-2"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <span className="font-mono text-xs text-text-secondary/60 tracking-wider uppercase">Protected</span>
        </div>
        <h2 id="password-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main mb-3 sm:mb-4">Access Restricted</h2>
        <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">Please enter the password to view the resume.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="resume-password" className="sr-only">Password</label>
          <input
            id="resume-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-background border-2 border-accent/30 focus:border-accent focus:ring-accent/50 focus:ring-2 text-text-main p-2.5 sm:p-3 font-mono text-sm sm:text-base transition-colors duration-300 mb-3 sm:mb-4"
            placeholder="Password"
            autoFocus
          />
          <button 
            type="submit" 
            className="w-full font-mono text-sm sm:text-base bg-accent text-background px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;