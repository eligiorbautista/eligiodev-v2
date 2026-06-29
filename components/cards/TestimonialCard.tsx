import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { ICONS } from '../ui/Icons';
import TestimonialModal from '../ui/modals/TestimonialModal';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-primary/30 border border-accent/10 flex flex-col h-full group transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer relative hover:border-accent/25" onClick={() => setIsModalOpen(true)}>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300" />
        <div className="p-5 sm:p-6 flex flex-col flex-grow relative min-h-0">
          {/* Quote icon with creative positioning */}
          <div className="absolute top-4 right-4 h-8 w-8 text-accent/10 pointer-events-none">
            {ICONS.quote}
          </div>
          <div className="flex-grow mb-5 sm:mb-6 pt-2 min-h-0">
            <p className="text-sm sm:text-base text-text-secondary italic line-clamp-4 leading-relaxed">{testimonial.quote}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-accent/10">
            <img src={testimonial.clientImage ? testimonial.clientImage : 'https://ui-avatars.com/api/?name=' + testimonial.name + '?background=0000000&color=000'} alt={testimonial.name} className="w-12 h-12 sm:w-14 sm:h-14 object-cover border border-accent/20 flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-text-main truncate">{testimonial.name}</h3>
              <p className="text-text-secondary font-mono text-xs sm:text-sm truncate">{testimonial.position} • {testimonial.company}</p>
              <p className="text-text-secondary/60 font-mono text-xs truncate">{testimonial.date}</p>
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