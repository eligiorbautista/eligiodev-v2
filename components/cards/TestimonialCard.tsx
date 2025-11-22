import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { ICONS } from '../ui/Icons';
import TestimonialModal from '../ui/modals/TestimonialModal';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-primary border border-accent/20 flex flex-col h-full group transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <div className="p-5 sm:p-6 flex flex-col flex-grow relative min-h-0">
          <div className="absolute top-5 sm:top-6 left-5 sm:left-6 h-10 sm:h-12 w-10 sm:w-12 text-accent/20 pointer-events-none">
            {ICONS.quote}
          </div>
          <div className="flex-grow mb-5 sm:mb-6 pt-1 sm:pt-2 pl-12 sm:pl-16 min-h-0">
            <p className="text-sm sm:text-base text-text-secondary italic line-clamp-4">{testimonial.quote}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-auto">
            <img src={testimonial.clientImage ? testimonial.clientImage : 'https://ui-avatars.com/api/?name=' + testimonial.name + '?background=0000000&color=000'} alt={testimonial.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-accent/50 flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-text-main mt-1 truncate">{testimonial.name}</h3>
              <p className="text-text-secondary font-mono text-xs sm:text-sm truncate">{testimonial.position} • {testimonial.company}</p>
              <p className="text-text-secondary font-mono text-xs truncate">{testimonial.date}</p>
            </div>
          </div>
        </div>
      </div>
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonialData={testimonial}
      />
    </>
  );
};

export default TestimonialCard;