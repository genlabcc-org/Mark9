import React from 'react';
import Header from './Header';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <Header />

      {/* Sub Meta Line */}
      <div className="hero-meta-bar">
        <div className="meta-left">
          <span className="square-bullet"></span>
          <span>mark9 studio — design school</span>
        </div>
        <div className="meta-right">
          <span>design school — 2026</span>
        </div>
      </div>

      {/* Hero Title and Bio Content Block */}
      <div className="hero-main-content">
        <div className="hero-title-container">
          <h1 className="hero-title">
            <div className="title-row">
              <span>we design interfaces</span>
            </div>
            <div className="title-row">
              <span>that <span>move</span> people<span className="orange-text">.</span></span>
            </div>
          </h1>
        </div>

        <div className="hero-bio">
          <p>
            I design websites and digital products for universities, research institutes and finance companies — work that has to win over a boardroom and still feel effortless to use.
          </p>
          <a href="/contact" className="hero-talk-btn">
            <span>let’s talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;

