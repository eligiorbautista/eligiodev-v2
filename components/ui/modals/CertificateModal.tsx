import React from 'react';
import { Certificate } from '../../../types';
import { ICONS } from '../Icons';
import BaseModal from '../BaseModal';

interface CertificateModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
  certificateData: Certificate;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, imageUrl, alt, onClose, certificateData }) => {
  const hasValidCertificateUrl = (() => {
    const trimmed = certificateData.url?.trim();
    if (!trimmed) return false;
    if (trimmed === '#') return false;
    if (trimmed === 'javascript:void(0)') return false;
    if (trimmed.toLowerCase().startsWith('tel:')) return false;
    if (trimmed.toLowerCase().startsWith('mailto:')) return false;
    return true;
  })();

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Certificate modal">
      <div
        className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 max-w-7xl w-full p-2 sm:p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={alt}
            className="object-contain rounded-lg shadow-2xl w-full h-auto"
            style={{ maxWidth: '100%', maxHeight: '70vh' }}
          />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 p-3 sm:p-4 md:p-6 bg-primary/50 border border-accent/20 rounded-lg max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] overflow-y-auto">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-main mb-1.5 sm:mb-2">{certificateData.title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-3 sm:mb-4">
              {certificateData.issuer} - <span className="font-mono">{certificateData.year}</span>
            </p>
          </div>
          {hasValidCertificateUrl && (
            <a
              href={certificateData.url.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-accent hover:text-accent-secondary transition-colors duration-300 font-mono text-sm sm:text-base border border-accent/30 hover:border-accent px-3 py-1.5 sm:px-4 sm:py-2"
              data-cursor-interactive
            >
              {ICONS.link}
              <span>View Certificate</span>
            </a>
          )}
        </div>
      </div>
    </BaseModal>
  );
};

export default CertificateModal;


