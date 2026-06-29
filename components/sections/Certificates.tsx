import React from 'react';
import { Link } from 'react-router-dom';
import { SECTION_TITLES } from '../../config/site';
import { CERTIFICATES } from '../../data/certificates';
import SectionTitle from '../ui/SectionTitle';
import CertificateCard from '../cards/CertificateCard';

const Certificates: React.FC = () => {
  const certificatesToShow = CERTIFICATES.slice(0, 2);

  return (
    <section id="certificates" className="py-16 sm:py-20 lg:py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-14 lg:mb-16">
          <div>
            <SectionTitle number="05">{SECTION_TITLES.certificates}</SectionTitle>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mt-4">
              Certifications and credentials that validate my skills and knowledge.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-accent/30" />
            <span className="font-mono text-xs text-text-secondary/40 tracking-wider">
              {CERTIFICATES.length} TOTAL
            </span>
          </div>
        </div>

        {/* Certificates List */}
        <div className="space-y-5 sm:space-y-6">
          {certificatesToShow.map((cert, index) => (
            <div key={index} className="relative">
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 z-10 w-10 h-10 bg-primary border border-accent/20 flex items-center justify-center">
                <span className="font-mono text-sm text-accent/60 font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <CertificateCard certificate={cert} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        {CERTIFICATES.length > 2 && (
          <div className="flex items-center justify-center gap-4 mt-14 sm:mt-16">
            <div className="w-16 sm:w-24 h-px bg-accent/20" />
            <Link
              to="/certificates"
              className="inline-flex items-center gap-3 font-mono text-sm sm:text-base bg-accent text-background px-6 py-3 sm:px-8 sm:py-4 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 btn-press"
              data-cursor-interactive
            >
              View All Certificates
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

export default Certificates;
