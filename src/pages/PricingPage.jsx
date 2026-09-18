import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './PricingPage.css';

const PRICING_PACKAGES = [
  {
    id: 'ux-ui-design',
    tag: 'ux/ui design',
    heading: 'crafting memorable user interfaces and scalable design systems that elevate conversions.',
    price: 'starting at 50,000',
    features: [
      'premium wireframing & prototyping',
      'premium figma design system',
      '3x revision & complete handoff'
    ],
    buttonText: 'add to cart',
    image: '/project2.png',
    showcaseTitle: 'leveraging data analytics for effective sustainable supply chain management',
    showcaseDesc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'film-making',
    tag: 'film making',
    heading: 'cinematic visual storytelling and creative direction that commands attention.',
    price: 'starting at 50,000',
    features: [
      'creative concept & scriptwriting',
      '4k production & cinematography',
      'sound design & color grading'
    ],
    buttonText: 'add to cart',
    image: '/project5.png',
    showcaseTitle: 'cinematic visual experiences crafted for visionary modern brands',
    showcaseDesc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'graphic-design',
    tag: 'graphic design',
    heading: 'distinct visual identities, editorial typography, and timeless brand assets.',
    price: 'starting at 50,000',
    features: [
      'bespoke logo & identity guidelines',
      'editorial layouts & brand collateral',
      '3x revision & vector assets'
    ],
    buttonText: 'add to cart',
    image: '/project3.png',
    showcaseTitle: 'curating iconic visual identities across digital and physical mediums',
    showcaseDesc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export function PricingPage() {
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(pageRef);
  useFooterStackReveal(mainRef, footerRef);

  return (
    <div className="pricing-page-container" ref={pageRef}>
      <Preloader />
      <Header />

      <main className="pricing-main-content main-content-flow" ref={mainRef}>
        {/* Editorial Statement Section */}
        <section className="pricing-editorial-section">
          <div className="pricing-editorial-container">
            <h1 className="pricing-editorial-quote">
              crafting <span className="highlight-timeless">timeless</span> designs<br />
              for inspired living
            </h1>
            <p className="pricing-editorial-sub">
              our expertise is the cornerstone of our success. with years of experience in web design, development, and branding, we've honed our skills to perfection.
            </p>
          </div>
        </section>

        {/* Pricing Card Section with the 3 packages */}
        <section className="pricing-card-section" aria-label="pricing packages">
          {PRICING_PACKAGES.map((pkg, index) => (
            <div 
              className={`pricing-card-wrapper ${index % 2 === 1 ? 'is-reversed' : ''}`} 
              key={pkg.id}
            >
              {/* Details Card */}
              <div className="pricing-plan-card">
                <span className="pricing-plan-tag">{pkg.tag}</span>
                <h2 className="pricing-plan-heading">
                  {pkg.heading}
                </h2>
                <div className="pricing-plan-price">
                  {pkg.price}
                </div>
                <ul className="pricing-plan-features">
                  {pkg.features.map((feature, idx) => (
                    <li className="pricing-feature-item" key={idx}>
                      <span className="pricing-feature-check">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="pricing-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="pricing-action-btn" type="button">
                  {pkg.buttonText}
                </button>
              </div>

              {/* Right Card: Visual Showcase */}
              <div className="pricing-showcase-card">
                <div className="pricing-showcase-image-wrap">
                  <img 
                    src={pkg.image} 
                    alt={`${pkg.tag} showcase`} 
                    className="pricing-showcase-image" 
                  />
                </div>
                <div className="pricing-showcase-content">
                  <h3 className="pricing-showcase-title">
                    {pkg.showcaseTitle}
                  </h3>
                  <p className="pricing-showcase-desc">
                    {pkg.showcaseDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default PricingPage;
