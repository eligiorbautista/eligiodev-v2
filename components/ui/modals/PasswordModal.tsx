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
        className="bg-primary border-2 border-accent/50 p-4 sm:p-6 md:p-8 w-full max-w-sm m-2 sm:m-4 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        data-cursor-interactive
      >
        <button 
          onClick={onClose} 
          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-text-secondary hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="password-modal-title" className="font-mono text-lg sm:text-xl md:text-2xl text-accent mb-3 sm:mb-4">ACCESS RESTRICTED</h2>
        <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">Please enter the password to view the resume.</p>
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
            className="w-full font-mono text-base sm:text-lg bg-transparent border-2 border-accent text-accent px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-all duration-300"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;