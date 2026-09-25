import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './NotFoundPage.css';

export function NotFoundPage() {
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(pageRef);
  useFooterStackReveal(mainRef, footerRef);

  return (
    <div className="notfound-page-wrapper" ref={pageRef}>
      <Preloader />
      <Header />

      <main className="notfound-main-content main-content-flow" ref={mainRef}>
        <div className="notfound-hero-container">
          {/* Huge 404 Text Graphic */}
          <div className="notfound-404-graphic">
            <span className="notfound-digit">404</span>
          </div>

          {/* Subtitle Message */}
          <p className="notfound-subtext">
            this page was not found. please go to our homepage, and take it from there.
          </p>

          {/* Back to Home Button (No Border) */}
          <div className="notfound-btn-wrap">
            <a href="/" className="notfound-home-btn">
              back to home
            </a>
          </div>
        </div>
      </main>

      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default NotFoundPage;
