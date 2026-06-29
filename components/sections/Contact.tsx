import React from 'react';
import { USER_INFO, SOCIAL_LINKS } from '../../config/site';

const ArrowIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const GithubIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const SOCIAL_LINKS_LIST = [
  { href: SOCIAL_LINKS.github, label: 'GitHub', icon: <GithubIcon /> },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: SOCIAL_LINKS.email, label: 'Email', icon: <MailIcon /> },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
        {/* Large CTA Area */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-6 left-0 w-px h-24 bg-accent/10" />
          <div className="absolute -top-6 left-0 w-24 h-px bg-accent/10" />
          <div className="absolute -bottom-6 right-0 w-px h-24 bg-accent/10" />
          <div className="absolute -bottom-6 right-0 w-24 h-px bg-accent/10" />

          <div className="bg-primary/30 border border-accent/10 p-8 sm:p-12 lg:p-16 text-center hover:border-accent/20 transition-all duration-300">
            {/* Status badge */}
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-xs sm:text-sm text-text-secondary/60 tracking-wider uppercase">
                Currently Available
              </span>
            </div>

            {/* Section label */}
            <span className="font-mono text-xs sm:text-sm text-accent/60 tracking-widest uppercase mb-4 sm:mb-6 block">
              {USER_INFO.contact.title}
            </span>

            {/* Headline */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-main mb-5 sm:mb-6 tracking-tight leading-none">
              {USER_INFO.contact.headline}
            </h3>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="w-16 h-px bg-accent/30" />
              <div className="w-2 h-2 bg-accent/40 rotate-45" />
              <div className="w-16 h-px bg-accent/30" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
              {USER_INFO.contact.description}
            </p>

            {/* CTA Button */}
            <a 
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center gap-3 font-mono text-sm sm:text-base bg-accent text-background px-8 py-4 sm:px-10 sm:py-5 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 btn-press mb-12 sm:mb-14"
              data-cursor-interactive
            >
              {USER_INFO.contact.cta}
              <ArrowIcon />
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {SOCIAL_LINKS_LIST.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 border border-accent/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                  data-cursor-interactive
                >
                  <span className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                    {link.icon}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-text-secondary group-hover:text-text-main transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
