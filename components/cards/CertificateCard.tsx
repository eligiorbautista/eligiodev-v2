import React, { useState } from 'react';
import { Certificate } from '../../types';
import { ICONS } from '../ui/Icons';
import ImageModal from '../ui/ImageModal';

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const sanitizedUrl = certificate.url?.trim();
  const hasExternalUrl =
    Boolean(sanitizedUrl) &&
    sanitizedUrl !== '#' &&
    sanitizedUrl !== 'javascript:void(0)' &&
    !sanitizedUrl?.toLowerCase().startsWith('tel:') &&
    !sanitizedUrl?.toLowerCase().startsWith('mailto:');

  return (
    <>
      {hasExternalUrl ? (
        <a
          href={sanitizedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-primary border border-accent/20 p-4 h-full group hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row items-center md:items-stretch gap-6"
          data-cursor-interactive
        >
          <div className="relative w-full md:w-1/3 lg:w-1/4 flex-shrink-0 overflow-hidden cursor-pointer" onClick={handleImageClick}>
            <img src={certificate.image} alt={certificate.title} className="w-full h-auto transition-transform duration-500" />
          </div>

          <div className="flex-1 w-full min-h-0 flex justify-between items-center self-stretch">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors duration-300 line-clamp-2 mb-2">{certificate.title}</h3>
              <p className="text-text-secondary">{certificate.issuer} - <span className="font-mono">{certificate.year}</span></p>
            </div>
            <div className="text-accent/50 group-hover:text-accent transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0 ml-4">
              {ICONS.link}
            </div>
          </div>
        </a>
      ) : (
        <div
          className="block bg-primary border border-accent/20 p-4 h-full group hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row items-center md:items-stretch gap-6"
          data-cursor-interactive
        >
          <div className="relative w-full md:w-1/3 lg:w-1/4 flex-shrink-0 overflow-hidden cursor-pointer" onClick={handleImageClick}>
            <img src={certificate.image} alt={certificate.title} className="w-full h-auto transition-transform duration-500" />
          </div>
          <div className="flex-1 w-full min-h-0 flex justify-between items-center self-stretch">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors duration-300 line-clamp-2 mb-2">{certificate.title}</h3>
              <p className="text-text-secondary">{certificate.issuer} - <span className="font-mono">{certificate.year}</span></p>
            </div>
            {/* No link icon when no URL */}
          </div>
        </div>
      )}
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={certificate.image}
        alt={certificate.title}
        onClose={() => setIsModalOpen(false)}
        certificateData={certificate}
      />
    </>
  );
};

export default CertificateCard;