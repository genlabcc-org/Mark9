import React from 'react';
import Header from './Header';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
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
            <div className="title-row">we don't just design brands.</div>
            <div className="title-row">
              we build the ones people <span className="people-bg-text">remember</span><span className="orange-text">.</span>
            </div>
          </h1>
        </div>

        <div className="hero-bio">
          <p>
            MARK9 is a full-stack design partner — branding, UI/UX, packaging, strategy and marketing, all working from one table, one vision, one goal: making your brand impossible to ignore.
          </p>

          <div className="hero-cta-group">
            <a href="/contact" className="hero-talk-btn">
              <span>let's build something</span>
              <ArrowUpRight size={16} />
            </a>
            <a href="/works" className="hero-secondary-btn">
              <span>see our work</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;

