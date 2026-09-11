import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WorksPage from './pages/WorksPage';
import ServicesPage from './pages/ServicesPage';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const lenisRef = useRef(null);

  // Global Lenis Smooth Scroll Initialization across entire site
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Handle route change scroll to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  // Intercept links for seamless client-side routing & smooth anchor scrolling via Lenis
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
      } else if (href === '/services' || href === '#services') {
        e.preventDefault();
        window.history.pushState({}, '', '/services');
        setCurrentPath('/services');
      } else if (href === '/works' || href === '#works') {
        e.preventDefault();
        window.history.pushState({}, '', '/works');
        setCurrentPath('/works');
      } else if (href === '/about' || href === '#about') {
        e.preventDefault();
        window.history.pushState({}, '', '/works');
        setCurrentPath('/works');
      } else if (href === '/' || href === '#home') {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
      } else if (href.startsWith('#')) {
        const sectionId = href.substring(1);
        if (window.location.pathname !== '/') {
          e.preventDefault();
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el && lenisRef.current) {
              lenisRef.current.scrollTo(el);
            } else if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            e.preventDefault();
            if (lenisRef.current) {
              lenisRef.current.scrollTo(el);
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
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

  if (currentPath === '/services') {
    return <ServicesPage />;
  }

  if (currentPath === '/works' || currentPath === '/about') {
    return <WorksPage />;
  }

  return <Home />;
}

export default App;

