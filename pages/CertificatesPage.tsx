import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CERTIFICATES } from '../data/certificates';
import CertificateCard from '../components/cards/CertificateCard';

const CertificatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = useMemo(() => {
    if (!searchQuery) {
      return CERTIFICATES;
    }
    return CERTIFICATES.filter(cert =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 min-h-screen animate-fade-in">
      <header className="mb-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center font-mono text-lg text-accent hover:text-accent-secondary transition-colors duration-300 mb-4"
          data-cursor-interactive
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
        <h1 className="text-5xl md:text-6xl font-mono text-text-main">All Certificates</h1>
        <p className="text-text-secondary mt-2">A comprehensive list of my professional certifications.</p>
      </header>

      <div className="mb-8 sticky top-0 bg-background/90 backdrop-blur-sm py-4 z-10">
        <input
          type="text"
          placeholder="Search by title or issuer..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-primary border-2 border-accent/30 focus:border-accent focus:ring-accent/50 focus:ring-2 text-text-main p-3 font-mono transition-colors duration-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert, index) => (
            <div key={index} className="h-full">
              <CertificateCard certificate={cert} />
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl font-mono text-text-secondary">No certificates match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesPage;