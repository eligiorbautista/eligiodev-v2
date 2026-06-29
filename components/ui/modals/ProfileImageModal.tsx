import React from 'react';
import BaseModal from '../BaseModal';

interface ProfileImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const ProfileImageModal: React.FC<ProfileImageModalProps> = ({
  isOpen,
  imageUrl,
  alt,
  onClose,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Profile image modal" showCloseButton={false}>
      <div
        className="flex items-center justify-center w-full h-full p-4"
        style={{ width: '100%', height: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/30" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/30" />
          
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-10 h-10 w-10 bg-primary border border-accent/20 hover:border-accent/40 text-text-secondary hover:text-accent transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={imageUrl}
            alt={alt}
            className="object-contain border border-accent/10 max-w-[85vw] max-h-[75vh] sm:max-w-[90vw] sm:max-h-[90vh]"
          />
        </div>
      </div>
    </BaseModal>
  );
};

export default ProfileImageModal;


