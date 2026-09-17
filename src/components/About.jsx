import React, { useRef } from 'react';
import { motion } from 'motion/react';
import useSplitReveal from '../utils/useSplitReveal';
import './About.css';

const ABOUT_STATS = [
  {
    num: '50+',
    label: 'brands built'
  },
  {
    num: '7+',
    label: 'years of design thinking'
  },
  {
    num: '4',
    label: 'cities and counting'
  },
  {
    num: '100%',
    label: 'obsessed with getting it right'
  }
];

export function About() {
  const aboutRef = useRef(null);
  useSplitReveal(aboutRef);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      {/* Top Header Row with Horizontal Line */}
      <div className="about-top-header">
        <span className="about-header-label">
          <span className="bullet-square"></span>
          <span>who we are</span>
        </span>
        <div className="about-header-line"></div>
      </div>

      <div className="about-container">
        {/* Left Spacer for Offset Grid Layout */}
        <div className="about-left-spacer"></div>

        {/* Right Content Block */}
        <motion.div
          className="about-right-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Paragraph Narrative */}
          <p className="about-paragraph">
            founded in 2023, mark9 is a creative design and marketing studio that transforms ideas into impactful brands. we offer branding, design, strategy, marketing, packaging, ui/ux, and more under one roof, helping businesses build strong and memorable brand identities.
          </p>

          {/* 3-Column Big Stats Grid */}
          <div className="about-stats-grid">
            {ABOUT_STATS.map((stat, idx) => (
              <div className="about-stat-card" key={idx}>
                <span className="about-stat-num">{stat.num}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

