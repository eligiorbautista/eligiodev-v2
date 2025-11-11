import React from 'react';
import { Link } from 'react-router-dom';
import { SECTION_TITLES } from '../../config/site';
import { CERTIFICATES } from '../../data/certificates';
import SectionTitle from '../ui/SectionTitle';
import CertificateCard from '../cards/CertificateCard';

const Certificates: React.FC = () => {
  const certificatesToShow = CERTIFICATES.slice(0, 2);

  return (
    <section id="certificates" className="py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <SectionTitle>{SECTION_TITLES.certificates}</SectionTitle>
        <div className="space-y-6">
          {certificatesToShow.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
        {CERTIFICATES.length > 2 && (
          <div className="text-center mt-12">
            <Link
              to="/certificates"
              className="inline-block font-mono text-lg bg-transparent border-2 border-accent text-accent px-8 py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
              data-cursor-interactive
            >
              View All Certificates
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;