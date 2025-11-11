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
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm text-text-secondary hover:text-accent border border-accent/30 hover:border-accent transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={imageUrl}
            alt={alt}
            className="object-contain rounded-lg shadow-2xl max-w-[90vw] max-h-[90vh]"
          />
        </div>
      </div>
    </BaseModal>
  );
};

export default ProfileImageModal;


