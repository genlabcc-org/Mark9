import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WorksPage from './pages/WorksPage';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept links for seamless client-side routing & cross-page anchor scrolling
  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '/contact' || href === '#contact') {
        e.preventDefault();
        window.history.pushState({}, '', '/contact');
        setCurrentPath('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href === '/works' || href === '#works') {
        e.preventDefault();
        window.history.pushState({}, '', '/works');
        setCurrentPath('/works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href === '/about' || href === '#about') {
        e.preventDefault();
        window.history.pushState({}, '', '/works');
        setCurrentPath('/works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href === '/' || href === '#home') {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href.startsWith('#')) {
        // Section anchors like #services, #what-we-do, #insights
        const sectionId = href.substring(1);
        if (window.location.pathname !== '/') {
          e.preventDefault();
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  if (currentPath === '/contact') {
    return <Contact />;
  }

  if (currentPath === '/works' || currentPath === '/about') {
    return <WorksPage />;
  }

  return <Home />;
}

export default App;
