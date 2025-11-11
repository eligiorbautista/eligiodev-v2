import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { ICONS } from '../ui/Icons';
import ImageModal from '../ui/ImageModal';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-primary border border-accent/20 flex flex-col h-full group transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div className="relative h-48 flex-shrink-0 overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <img src={testimonial.projectImage} alt={`Project for ${testimonial.name}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        <div className="p-6 flex flex-col flex-grow relative min-h-0">
          <div className="absolute top-6 left-6 h-12 w-12 text-accent/20 pointer-events-none">
            {ICONS.quote}
          </div>
          <div className="flex-grow mb-6 pt-2 pl-16 min-h-0">
            <p className="text-text-secondary italic line-clamp-4">{testimonial.quote}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-auto">
            <img src={testimonial.clientImage} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-accent/50 flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-text-main mt-1 truncate">{testimonial.name}</h3>
              <p className="text-text-secondary font-mono text-sm truncate">{testimonial.position} • {testimonial.company}</p>
              <p className="text-text-secondary font-mono text-xs truncate">{testimonial.date}</p>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={testimonial.projectImage}
        alt={`Project for ${testimonial.name}`}
        onClose={() => setIsModalOpen(false)}
        testimonialData={testimonial}
      />
    </>
  );
};

export default TestimonialCard;