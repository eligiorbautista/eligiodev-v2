import React from 'react';
import BaseModal from './BaseModal';

interface SimpleImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const SimpleImageModal: React.FC<SimpleImageModalProps> = ({ 
  isOpen, 
  imageUrl, 
  alt, 
  onClose 
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Image modal">
      <div 
        className="flex items-center justify-center w-full h-full p-4"
        style={{ width: '100%', height: '100%' }}
      >
        <img 
          src={imageUrl} 
          alt={alt} 
          className="object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ 
            maxWidth: '90vw', 
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>
    </BaseModal>
  );
};

export default SimpleImageModal;

