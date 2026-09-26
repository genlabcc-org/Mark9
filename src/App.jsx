import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WorksPage from './pages/WorksPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import WorkDetailPage from './pages/WorkDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname + window.location.search);
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

  // Handle route change scroll to top & recalculate ScrollTrigger positions
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [currentPath]);

  // Intercept links for seamless client-side routing
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
      } else if (href === '/work-detail' || href.startsWith('/work-detail') || href.startsWith('/work/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      } else if (href === '/works' || href === '#works') {
        e.preventDefault();
        window.history.pushState({}, '', '/works');
        setCurrentPath('/works');
      } else if (href === '/about' || href === '#about') {
        e.preventDefault();
        window.history.pushState({}, '', '/about');
        setCurrentPath('/about');
      } else if (href === '/pricing' || href === '#pricing') {
        e.preventDefault();
        window.history.pushState({}, '', '/pricing');
        setCurrentPath('/pricing');
      } else if (href === '/blog-detail' || href.startsWith('/blog-detail') || href.startsWith('/blog/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      } else if (href === '/blog' || href === '#blog') {
        e.preventDefault();
        window.history.pushState({}, '', '/blog');
        setCurrentPath('/blog');
      } else if (href === '/404') {
        e.preventDefault();
        window.history.pushState({}, '', '/404');
        setCurrentPath('/404');
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

    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.search);
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const pathOnly = currentPath.split('?')[0];

  if (pathOnly === '/') return <Home />;
  if (pathOnly === '/contact') return <Contact />;
  if (pathOnly === '/services') return <ServicesPage />;
  if (pathOnly === '/work-detail' || pathOnly.startsWith('/work-detail') || pathOnly.startsWith('/work/')) return <WorkDetailPage key={currentPath} />;
  if (pathOnly === '/works') return <WorksPage />;
  if (pathOnly === '/about') return <AboutPage />;
  if (pathOnly === '/pricing') return <PricingPage />;
  if (pathOnly === '/blog-detail' || pathOnly.startsWith('/blog-detail') || pathOnly.startsWith('/blog/')) return <BlogDetailPage key={currentPath} />;
  if (pathOnly === '/blog') return <BlogPage />;
  if (pathOnly === '/404') return <NotFoundPage />;
  return <NotFoundPage />;
}

export default App;
