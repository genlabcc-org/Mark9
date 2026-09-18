import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Services from '../components/Services';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './ServicesPage.css';

export function ServicesPage() {
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(pageRef);
  useFooterStackReveal(mainRef, footerRef);

  return (
    <div className="services-page-container" ref={pageRef}>
      <Preloader />
      <Header />
      <main className="services-main main-content-flow" ref={mainRef}>
        <Services />
      </main>
      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;

