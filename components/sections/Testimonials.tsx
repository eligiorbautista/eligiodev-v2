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
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-14 lg:mb-16">
          <div>
            <SectionTitle number="06">{SECTION_TITLES.testimonials}</SectionTitle>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mt-4">
              What clients and collaborators have to say about working with me.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-accent/30" />
            <span className="font-mono text-xs text-text-secondary/40 tracking-wider">
              {TESTIMONIALS.length} REVIEWS
            </span>
          </div>
        </div>

        {/* Large decorative quote */}
        <div className="relative mb-10 sm:mb-12">
          <div className="absolute -top-6 left-0 text-[8rem] sm:text-[12rem] leading-none text-accent/[0.03] font-serif select-none pointer-events-none">
            "
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {testimonialsToShow.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 z-10 w-8 h-8 bg-primary border border-accent/20 flex items-center justify-center">
                <span className="font-mono text-xs text-accent/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        {TESTIMONIALS.length > 2 && (
          <div className="flex items-center justify-center gap-4 mt-14 sm:mt-16">
            <div className="w-16 sm:w-24 h-px bg-accent/20" />
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-3 font-mono text-sm sm:text-base bg-accent text-background px-6 py-3 sm:px-8 sm:py-4 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 btn-press"
              data-cursor-interactive
            >
              View All Testimonials
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <div className="w-16 sm:w-24 h-px bg-accent/20" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
