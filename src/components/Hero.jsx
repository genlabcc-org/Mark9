import React from 'react';
import Header from './Header';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <Header />

      {/* Sub Meta Line */}
      <div className="hero-meta-bar">
        <div className="meta-left">
          <span className="square-bullet"></span>
          <span>Mark9 Studio — design school</span>
        </div>
        <div className="meta-right">
          <span>design school — 2026</span>
        </div>
      </div>

      {/* Hero Title in 3 strict lines, natural casing */}
      <div className="hero-title-container">
        <h1 className="hero-title">
          <div className="title-row">
            <span>we design</span>
            <span className="pill-capsule portrait-capsule">
              <img src="/portrait1.jpg" alt="Portrait" />
            </span>
          </div>
          <div className="title-row">
            <span>interfaces</span>
          </div>
          <div className="title-row">
            <span>that <span className="orange-text">move</span> people</span>
            <span className="pill-capsule preview-capsule">
              <img src="/portrait1.jpg" alt="Work Preview" />
            </span>
          </div>
        </h1>
      </div>

      {/* Hero Bottom Bar */}
      <div className="hero-bottom-bar">
        <div className="hero-bio">
          <p>
            I design websites and digital products for universities, research institutes and finance companies — work that has to win over a boardroom and still feel effortless to use.
          </p>
        </div>

        <div className="hero-scroll">
          <span className="scroll-dot">●</span> scroll
        </div>
      </div>
    </section>
  );
}

export default Hero;
