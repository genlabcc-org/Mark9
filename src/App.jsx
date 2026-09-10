import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
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

  // Intercept links to /contact or #contact for seamless routing
  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');

      if (href === '/contact' || href === '#contact') {
        e.preventDefault();
        window.history.pushState({}, '', '/contact');
        setCurrentPath('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href === '/' || href === '#home') {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  if (currentPath === '/contact') {
    return <Contact />;
  }

  return <Home />;
}

export default App;
