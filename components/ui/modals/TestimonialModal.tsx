import React from 'react';
import { Testimonial } from '../../../types';
import { ICONS } from '../Icons';
import BaseModal from '../BaseModal';

interface TestimonialModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
  testimonialData: Testimonial;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, imageUrl, alt, onClose, testimonialData }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Testimonial modal">
      <div
        className="flex flex-col gap-6 max-w-3xl w-full p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center">
          <img
            src={imageUrl}
            alt={alt}
            className="object-cover h-[45vh] rounded-lg shadow-2xl w-full"
            style={{ maxWidth: '100%' }}
          />
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center space-y-6 p-6 bg-primary/50 border border-accent/20 rounded-lg max-h-[85vh] overflow-y-auto">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 text-accent/20">
              {ICONS.quote}
            </div>
            <p className="text-text-secondary italic text-lg mb-6 pt-8 pl-8 leading-relaxed">
              "{testimonialData.quote}"
            </p>
          </div>
          <div className="flex items-start gap-4 pt-4 border-t border-accent/10">
            <img
              src={testimonialData.clientImage}
              alt={testimonialData.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-accent/50 flex-shrink-0"
            />
            <div className="space-y-1 text-left min-w-0">
              <h3 className="text-xl font-bold text-text-main mt-1">{testimonialData.name}</h3>
              <p className="text-text-secondary font-mono text-sm">{testimonialData.position} • {testimonialData.company}</p>
              <p className="text-text-secondary font-mono text-xs">{testimonialData.date}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default TestimonialModal;


