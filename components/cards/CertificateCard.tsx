import React, { useState } from 'react';
import { Certificate } from '../../types';
import { ICONS } from '../ui/Icons';
import CertificateModal from '../ui/modals/CertificateModal';

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

  const CardContent = (
    <>
      <div
        className="relative w-full md:w-1/3 lg:w-1/4 flex-shrink-0 overflow-hidden cursor-pointer bg-primary/40"
        onClick={handleImageClick}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
      <div className="flex-1 w-full min-h-0 self-stretch flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-text-main leading-snug mb-3">
            {certificate.title}
          </h3>
          <p className="text-text-secondary">
            {certificate.issuer}{" "}
            <span className="font-mono text-sm text-accent/80">• {certificate.year}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-accent/10">
          <button
            type="button"
            onClick={handleImageClick}
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-text-secondary hover:text-accent transition-colors"
            data-cursor-interactive
          >
            {ICONS.eye}
            View Details
          </button>
          {hasExternalUrl && (
            <a
              href={sanitizedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-accent hover:text-accent-secondary transition-colors"
              data-cursor-interactive
              onClick={(e) => e.stopPropagation()}
            >
              {ICONS.link}
              Open Certificate
            </a>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="bg-primary border border-accent/20 p-4 h-full hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row items-center md:items-stretch gap-6">
        {CardContent}
      </div>
      <CertificateModal
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