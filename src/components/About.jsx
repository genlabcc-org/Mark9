import React, { useRef } from 'react';
import { motion } from 'motion/react';
import useSplitReveal from '../utils/useSplitReveal';
import './About.css';

export function About() {
  const aboutRef = useRef(null);
  useSplitReveal(aboutRef);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-header">
        <span className="about-tag">
          <span className="bullet-square"></span>
          <span>who we are</span>
        </span>
      </div>

      <div className="about-container">
        {/* Left Column: Title */}
        <motion.div
          className="about-left-col"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-headline">
            <span className="split-line-wrap">
              <span className="split-line-content">your brand's biggest fan<span className="orange-text">.</span></span>
            </span>
            <span className="split-line-wrap">
              <span className="split-line-content">and its toughest critic<span className="orange-text">.</span></span>
            </span>
          </h2>
        </motion.div>

        {/* Right Column: Bio Paragraphs, Stats & Button */}
        <motion.div
          className="about-right-col"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="about-bio-text">
            <p>
              MARK9 exists for one reason — to turn ideas into brands people actually feel something for. We're your design partner from the very first sketch to the final scroll-stopping ad.
            </p>

            <p>
              We sit with your business, understand what makes it tick, and build a brand identity that works as hard as you do — on shelves, on screens, and in people's minds.
            </p>

            <p className="dimmed-paragraph">
              One studio. Every discipline your brand needs. Zero disconnect.
            </p>
          </div>

          {/* Stats Bar (4 Stats) */}
          <div className="about-stats-grid">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">brands built</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">years of design thinking</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">cities and counting</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">obsessed with getting it right</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;
