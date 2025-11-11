import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  showCloseButton?: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children, ariaLabel = "Modal", showCloseButton = true }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-sm z-[10001] animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
      }}
    >
      {showCloseButton && (
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-text-secondary hover:text-accent transition-colors duration-300 z-[10002] bg-background/80 backdrop-blur-sm p-2 rounded-full border border-accent/30 hover:border-accent"
          aria-label="Close modal"
          data-cursor-interactive
          style={{ position: 'fixed' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      {children}
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default BaseModal;

