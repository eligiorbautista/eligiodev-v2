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
        className="bg-primary border-2 border-accent/50 p-8 w-full max-w-sm m-4 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        data-cursor-interactive
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-text-secondary hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="password-modal-title" className="font-mono text-2xl text-accent mb-4">ACCESS RESTRICTED</h2>
        <p className="text-text-secondary mb-6">Please enter the password to view the resume.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="resume-password" className="sr-only">Password</label>
          <input
            id="resume-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-background border-2 border-accent/30 focus:border-accent focus:ring-accent/50 focus:ring-2 text-text-main p-3 font-mono transition-colors duration-300 mb-4"
            placeholder="Password"
            autoFocus
          />
          <button 
            type="submit" 
            className="w-full font-mono text-lg bg-transparent border-2 border-accent text-accent px-8 py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-all duration-300"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;