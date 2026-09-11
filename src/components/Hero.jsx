import React, { useRef } from 'react';
import Header from './Header';
import Button from './Button';
import useSplitReveal from '../utils/useSplitReveal';
import './Hero.css';

export function Hero() {
  const heroRef = useRef(null);
  useSplitReveal(heroRef);

  return (
    <section className="hero-section" ref={heroRef}>
      <Header />

      {/* Eyebrow Tag */}
      <div className="hero-meta-bar">
        <div className="meta-left">
          <span className="square-bullet"></span>
          <span>design · strategy · marketing</span>
        </div>
      </div>

      {/* Hero Main Content */}
      <div className="hero-main-content">
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span className="split-line-wrap">
              <span className="split-line-content">we don't just design brands.</span>
            </span>
            <span className="split-line-wrap">
              <span className="split-line-content">
                we build the ones people <span className="people-bg-text">remember</span><span className="orange-text">.</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="hero-bio">
          <p>
            MARK9 is a full-stack design partner — branding, UI/UX, packaging, strategy and marketing, all working from one table, one vision, one goal: making your brand impossible to ignore.
          </p>

          <div className="hero-cta-group">
            <Button href="/contact" variant="primary">
              let's build something
            </Button>
            <Button href="/works" variant="secondary" showIcon={false}>
              see our work
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;

