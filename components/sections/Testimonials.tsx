import React from 'react';
import { Link } from 'react-router-dom';
import { SECTION_TITLES } from '../../config/site';
import { TESTIMONIALS } from '../../data/testimonials';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../cards/TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonialsToShow = TESTIMONIALS.slice(0, 2);
  
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
        <SectionTitle>{SECTION_TITLES.testimonials}</SectionTitle>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {testimonialsToShow.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        {TESTIMONIALS.length > 2 && (
           <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-block font-mono text-sm sm:text-base bg-transparent border-2 border-accent text-accent px-5 py-2.5 sm:px-7 sm:py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              View All Testimonials
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;