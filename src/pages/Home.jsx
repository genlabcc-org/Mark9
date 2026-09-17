import React, { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import useFooterStackReveal from '../utils/useStackedPanels';
import './Home.css';

export function Home() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  useFooterStackReveal(mainRef, footerRef);

  return (
    <div className="home-container">
      <Preloader />
      <div className="main-content-flow" ref={mainRef}>
        <Hero />
        <About />
        <Works />
        <Services />
        <FAQ />
      </div>
      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
