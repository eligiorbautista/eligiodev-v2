import React, { useEffect } from 'react';
import { ICONS } from './Icons';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  
  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-full max-w-sm bg-primary border-2 border-accent text-text-main font-mono shadow-lg shadow-accent/20 z-[10000] animate-fade-in-up overflow-hidden"
      role="alert"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-accent mr-3 flex-shrink-0">{ICONS.warning}</span>
          <p>{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-text-secondary hover:text-accent transition-colors ml-4 flex-shrink-0"
          aria-label="Close toast"
          data-cursor-interactive
        >
          {ICONS.close}
        </button>
      </div>
      <div className="h-1 bg-accent/30">
        <div 
          className="h-full bg-accent animate-progress-bar"
          style={{ animationDuration: `${duration}ms` }}
        ></div>
      </div>
    </div>
  );
};

export default Toast;