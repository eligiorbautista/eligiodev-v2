import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../config/site';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scrolling to hash sections when on home page
  useEffect(() => {
    if (location.pathname === '/') {
      // Small delay to ensure page is rendered
      const scrollToHash = () => {
        if (location.hash) {
          const targetId = location.hash.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        setTimeout(scrollToHash, 50);
      });
    }
  }, [location.pathname, location.hash]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // If we're not on the home page, navigate there first, then add hash
      if (location.pathname !== '/') {
        navigate('/');
        // After navigation, update hash so HomePage can handle scrolling
        setTimeout(() => {
          window.history.replaceState(null, '', href);
          // Trigger scroll by dispatching hashchange or directly scrolling
          const targetId = href.substring(1);
          setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        }, 50);
      } else {
        // Already on home, just scroll to section
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash without causing scroll (we already scrolled)
          window.history.replaceState(null, '', href);
        }
      }
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // Scroll to top if already on home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLink = (link: { href: string; label: string; }, className: string) => (
     <a 
      key={link.href} 
      href={link.href}
      onClick={(e) => handleLinkClick(e, link.href)}
      className={className}
      data-cursor-interactive
    >
      {link.label}
    </a>
  );

  return (
    <>
      <header className={`px-4 lg:px-16 xl:px-24 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-lg shadow-accent/10' : 'bg-transparent'}`}>
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="text-xl sm:text-2xl font-mono text-accent hover:animate-pulse"
            data-cursor-interactive
          >
            &lt;ELI DEV/&gt;
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_LINKS.map((link) => renderNavLink(link, "font-mono text-lg text-text-main hover:text-accent transition-colors duration-300"))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 text-text-main focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              data-cursor-interactive
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6">
            {NAVIGATION_LINKS.map((link) => renderNavLink(link, "font-mono text-2xl text-text-main hover:text-accent transition-colors duration-300"))}   
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;