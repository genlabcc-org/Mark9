import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Header from './Header';
import useSplitReveal from '../utils/useSplitReveal';
import './Hero.css';

export function Hero() {
  const heroRef = useRef(null);
  useSplitReveal(heroRef);

  const heroCards = [
    {
      id: '01',
      num: '01.',
      title: 'prada',
      desc: 'an iconic project meticulously curated by our agency.',
      image: '/hero1.jpg',
      href: '/works',
    },
    {
      id: '02',
      num: '02.',
      title: 'cyber tesla',
      desc: 'next-gen futuristic digital experience & automotive design.',
      image: '/hero2.jpg',
      href: '/works',
    },
    {
      id: '03',
      num: '03.',
      title: 'louis vuitton',
      desc: 'luxury brand identity & digital storytelling campaign.',
      image: '/hero3.jpg',
      href: '/works',
    },
  ];

  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const desc = card.querySelector('.hero-card-desc');

    if (desc) {
      gsap.to(desc, {
        height: 'auto',
        opacity: 1,
        y: 0,
        marginTop: 6,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const desc = card.querySelector('.hero-card-desc');

    if (desc) {
      gsap.to(desc, {
        height: 0,
        opacity: 0,
        y: 12,
        marginTop: 0,
        duration: 0.45,
        ease: 'power3.inOut',
        overwrite: 'auto',
      });
    }
  };

  return (
    <section className="hero-container-wrap" ref={heroRef}>
      <Header />
      {/* 3-Column Hero Cards Grid */}
      <div className="hero-columns-grid">
        {heroCards.map((card) => (
          <div
            key={card.id}
            className="hero-card"
            style={{ backgroundImage: `url(${card.image})` }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="hero-card-overlay"></div>
            <div className="hero-card-bottom">
              <div className="hero-card-content-block">
                <span className="hero-card-title">{card.num} {card.title}</span>
                <p className="hero-card-desc">{card.desc}</p>
              </div>
              <a href={card.href} className="hero-arrow-btn" aria-label={`Explore ${card.title}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lower Hero Content Section */}
      <div className="hero-lower-banner">
        <div className="hero-content-wrap">
          {/* Body Row: MARK9 Logo Left, Description Right */}
          <div className="hero-body-row">
            <div className="hero-body-logo">
              <img src="/logo.svg" alt="MARK9" className="hero-body-logo-img" />
            </div>
            <div className="hero-description-block">
              <div className="agency-bullet-tag">
                <span className="bullet-square"></span>
                <span>creative agency</span>
              </div>
              <p className="hero-subheadline">
                mark9 is a full-stack design partner — branding, ui/ux, packaging, strategy and marketing, all working from one table, one vision, one goal: making your brand impossible to ignore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;




