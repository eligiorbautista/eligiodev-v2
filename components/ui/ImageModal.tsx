import React from 'react';
import { Project, Certificate, Testimonial } from '../../types';
import { ICONS } from './Icons';
import BaseModal from './BaseModal';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
  projectData?: Project;
  certificateData?: Certificate;
  testimonialData?: Testimonial;
}

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'text-accent' : 'text-accent/30'}>
          {ICONS.star}
        </span>
      ))}
    </div>
  );
};

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  imageUrl, 
  alt, 
  onClose, 
  projectData, 
  certificateData, 
  testimonialData 
}) => {
  const hasDetails = projectData || certificateData || testimonialData;
  const hasValidCertificateUrl = (() => {
    if (!certificateData) return false;
    const trimmed = certificateData.url?.trim();
    if (!trimmed) return false;
    if (trimmed === '#') return false;
    if (trimmed === 'javascript:void(0)') return false;
    if (trimmed.toLowerCase().startsWith('tel:')) return false;
    if (trimmed.toLowerCase().startsWith('mailto:')) return false;
    return true;
  })();

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Image modal">
      <div 
        className={`flex ${hasDetails ? 'flex-col lg:flex-row' : 'items-center justify-center'} gap-6 max-w-7xl w-full p-4 my-auto`}
        onClick={(e) => e.stopPropagation()}
        style={{
          margin: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={`${hasDetails ? 'w-full lg:w-2/3' : 'w-full'} flex items-center justify-center`}>
          <img 
            src={imageUrl} 
            alt={alt} 
            className="object-contain rounded-lg shadow-2xl w-full h-auto"
            style={{ 
              maxWidth: hasDetails ? '100%' : '90vw', 
              maxHeight: '85vh',
            }}
          />
        </div>
        
        {hasDetails && (
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6 p-6 bg-primary/50 border border-accent/20 rounded-lg max-h-[85vh] overflow-y-auto">
            {projectData && (
              <>
                <div>
                  <h2 className="text-3xl font-mono text-accent mb-2">{projectData.title}</h2>
                  <p className="text-sm font-mono text-text-secondary mb-4">{projectData.date}</p>
                  <p className="text-text-secondary mb-4 leading-relaxed">{projectData.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projectData.tags.map((tag, i) => (
                    <span key={i} className="text-sm font-mono bg-background text-accent/80 px-3 py-1 border border-accent/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 pt-4 border-t border-accent/10">
                  {projectData.repoUrl && (
                    <a 
                      href={projectData.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
                      data-cursor-interactive
                    >
                      {ICONS.github}
                      <span className="font-mono text-sm">GitHub</span>
                    </a>
                  )}
                  {projectData.liveUrl && (
                    <a 
                      href={projectData.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
                      data-cursor-interactive
                    >
                      {ICONS.link}
                      <span className="font-mono text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </>
            )}

            {certificateData && (
              <>
                <div>
                  <h2 className="text-3xl font-bold text-text-main mb-2">{certificateData.title}</h2>
                  <p className="text-text-secondary text-lg mb-4">
                    {certificateData.issuer} - <span className="font-mono">{certificateData.year}</span>
                  </p>
                </div>
                {hasValidCertificateUrl && (
                  <a
                    href={certificateData.url.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-300 font-mono border border-accent/30 hover:border-accent px-4 py-2"
                    data-cursor-interactive
                  >
                    {ICONS.link}
                    <span>View Certificate</span>
                  </a>
                )}
              </>
            )}

            {testimonialData && (
              <>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 text-accent/20">
                    {ICONS.quote}
                  </div>
                  <p className="text-text-secondary italic text-lg mb-6 pt-8 pl-8 leading-relaxed">
                    "{testimonialData.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4 border-t border-accent/10">
                  <img 
                    src={testimonialData.clientImage} 
                    alt={testimonialData.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/50" 
                  />
                  <div>
                    <h3 className="text-xl font-bold text-text-main mt-2">{testimonialData.name}</h3>
                    <p className="text-text-secondary font-mono text-sm">{testimonialData.position} • {testimonialData.company}</p>
                    <p className="text-text-secondary font-mono text-xs">{testimonialData.date}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </BaseModal>
  );
};

export default ImageModal;

 