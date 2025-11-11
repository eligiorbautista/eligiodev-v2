import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certificates from '../components/sections/Certificates';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import BackToTopButton from '../components/ui/BackToTopButton';

const HomePage: React.FC = () => {
  const location = useLocation();

  // Handle hash scrolling when landing on home page with a hash
  useEffect(() => {
    if (location.hash) {
      // Wait for page to render, then scroll to hash
      const timer = setTimeout(() => {
        const targetId = location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default HomePage;

