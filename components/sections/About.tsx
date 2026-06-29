import React, { useState } from "react";
import { USER_INFO, SECTION_TITLES } from "../../config/site";
import SectionTitle from "../ui/SectionTitle";
import ProfileImageModal from "../ui/modals/ProfileImageModal";

const CodeIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const ZapIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const HeartIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const GlobeIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m0 0A9.015 9.015 0 013 12c0 .778.099 1.533.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '15+', label: 'Happy Clients' },
  { value: '∞', label: 'Cups of Coffee' },
];

const VALUES = [
  {
    icon: <CodeIcon />,
    title: 'Clean Code',
    description: 'Every line is written with care — maintainable, readable, and built to last.',
  },
  {
    icon: <ZapIcon />,
    title: 'Fast & Light',
    description: 'Performance-first mindset. No bloat, just speed that keeps users engaged.',
  },
  {
    icon: <HeartIcon />,
    title: 'User-First',
    description: 'Designs that feel natural. Intuitive flows that guide, not confuse.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Mobile-Ready',
    description: 'Every pixel responds beautifully, from the smallest phone to the widest screen.',
  },
];

const About: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div
        className="opacity-0 animate-fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        <SectionTitle number="01">{SECTION_TITLES.about}</SectionTitle>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14 lg:mb-16">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center py-5 sm:py-6 px-4 border border-accent/10 hover:border-accent/25 transition-all duration-300"
            >
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-accent tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="font-mono text-xs sm:text-sm text-text-secondary/60 tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Large tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-main font-bold leading-snug tracking-tight">
              I turn complex problems into simple, elegant digital experiences.
            </p>

            {/* Story text */}
            <div className="relative pl-4 sm:pl-6 border-l-2 border-accent/20">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {USER_INFO.about.paragraph1}
              </p>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-sm text-text-secondary/60">
                Based in {USER_INFO.location} · Available worldwide
              </span>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
              data-cursor-interactive
            >
              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/30" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/30" />
              
              <div className="absolute inset-0 border border-accent/20 overflow-hidden transition-all duration-500 group-hover:border-accent/40">
                <img
                  src={USER_INFO.about.profileImageUrl}
                  alt="Eligio Bautista III"
                  className="w-full h-full object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values / Approach */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h3 className="font-mono text-sm sm:text-base text-accent mb-6 sm:mb-8 tracking-wider uppercase">
            How I Work
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {VALUES.map((value, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 border border-accent/10 hover:border-accent/25 transition-all duration-300"
              >
                <div className="text-accent/60 group-hover:text-accent transition-colors duration-300 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-text-main mb-2 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-text-secondary/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProfileImageModal
        isOpen={isImageModalOpen}
        imageUrl={USER_INFO.about.profileImageUrl}
        alt="Eligio Bautista III"
        onClose={() => setIsImageModalOpen(false)}
      />
    </section>
  );
};

export default About;
