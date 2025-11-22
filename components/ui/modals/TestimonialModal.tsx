import React from 'react';
import { Testimonial } from '../../../types';
import { ICONS } from '../Icons';
import BaseModal from '../BaseModal';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonialData: Testimonial;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, onClose, testimonialData }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} ariaLabel="Testimonial modal">
      <div
        className="flex flex-col gap-3 sm:gap-4 md:gap-6 max-w-3xl w-full p-2 sm:p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 p-3 sm:p-4 md:p-6 bg-primary/50 border border-accent/20 rounded-lg max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] overflow-y-auto">
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent/20">
              {ICONS.quote}
            </div>
            <p className="text-text-secondary italic text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 pt-4 sm:pt-6 md:pt-8 pl-4 sm:pl-6 md:pl-8 leading-relaxed">
              "{testimonialData.quote}"
            </p>
          </div>
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4 border-t border-accent/10">
            <img
              src={testimonialData.clientImage ? testimonialData.clientImage : 'https://ui-avatars.com/api/?name=' + testimonialData.name + '?background=0000000&color=000'}
              alt={testimonialData.name}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-accent/50 flex-shrink-0"
            />
            <div className="space-y-0.5 sm:space-y-1 text-left min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-main mt-1">{testimonialData.name}</h3>
              <p className="text-text-secondary font-mono text-xs sm:text-sm">{testimonialData.position} • {testimonialData.company}</p>
              <p className="text-text-secondary font-mono text-xs">{testimonialData.date}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default TestimonialModal;


