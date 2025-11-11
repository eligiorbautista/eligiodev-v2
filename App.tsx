import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const finishTimer = setTimeout(() => {
      setIsFinishing(true);
    }, 1800);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <Loader isFinishing={isFinishing} />}
      <div className={`bg-background text-text-main font-sans min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
