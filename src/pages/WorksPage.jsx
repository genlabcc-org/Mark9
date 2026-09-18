import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Mark9LogoScroll from '../components/Mark9LogoScroll';
import Works from '../components/Works';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './WorksPage.css';

gsap.registerPlugin(ScrollTrigger);

export function WorksPage() {
  const worksPageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(worksPageRef);
  useFooterStackReveal(mainRef, footerRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="works-page-wrapper" ref={worksPageRef}>
      <Preloader />
      <Header />
      <main className="works-main main-content-flow" ref={mainRef}>
        {/* Same First Section from About Page: MARK9 Logo Infinite Scrolling Banner */}
        <Mark9LogoScroll />

        {/* Works Component */}
        <Works />
      </main>
      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default WorksPage;

