import React from 'react';
import { motion } from 'motion/react';
import './About.css';

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <span className="about-tag">
          <span className="bullet-square"></span>
          <span>about us</span>
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
            <span>design with </span>
            <br />
            <span>real stakes<span className="orange-text">.</span></span>
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
              Most of my work is websites and digital products for big, careful organisations — <strong>centuries-old universities</strong>, <strong>national research institutes and global finance</strong>. The kind of projects that have to get past a boardroom and still feel great to use.
            </p>

            <p>
              That work has been good to me over the years, with a few award wins along the way (<strong>CSSDA, Vega, Digital Impact</strong>). But what I really care about is simpler: the moment an interface stops feeling like software and starts feeling like it's <strong>on your side</strong>.
            </p>

            <p className="dimmed-paragraph">
              Away from the screen I'm still thinking about design — redrawing menus in my head, rewinding film titles to study the motion, building little side projects for fun. Design isn't just my job; it's how I look at everything.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="about-stats-grid">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">years in design</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">projects shipped</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">100</span>
              <span className="stat-label">best core web vitals score</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;
