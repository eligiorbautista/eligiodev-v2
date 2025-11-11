import React from 'react';
import { USER_INFO, SOCIAL_LINKS } from '../../config/site';
import { ICONS } from '../ui/Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
       <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
        <h2 className="text-2xl font-mono text-accent mb-4">{USER_INFO.contact.title}</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-text-main mb-6">{USER_INFO.contact.headline}</h3>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
          {USER_INFO.contact.description}
        </p>
        <a 
          href={SOCIAL_LINKS.email}
          className="inline-block font-mono text-lg bg-transparent border-2 border-accent text-accent px-8 py-3 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
          data-cursor-interactive
        >
          {USER_INFO.contact.cta}
        </a>
       </div>
    </section>
  );
};

export default Contact;