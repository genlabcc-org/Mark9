import React, { useRef } from 'react';
import { motion } from 'motion/react';
import useSplitReveal from '../utils/useSplitReveal';
import './Works.css';

export function Works() {
  const worksRef = useRef(null);
  useSplitReveal(worksRef);

  return (
    <section className="works-section" id="work" ref={worksRef}>
      {/* Top Header Row with Horizontal Line */}
      <div className="works-top-header">
        <span className="works-header-label">
          <span className="bullet-square"></span>
          <span>last projects</span>
        </span>
        <div className="works-header-line"></div>
      </div>

      {/* Main Single Project Container (Prada) */}
      <div className="works-single-container">
        <motion.div
          className="single-project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="/works" className="single-project-link" aria-label="Explore Prada Project">
            {/* Image Wrap */}
            <div className="single-project-image-wrap">
              <img
                src="/project3.png"
                alt="prada - iconic project"
                className="single-project-img"
              />
            </div>

            {/* Bottom Caption Line */}
            <div className="single-project-caption">
              <span className="caption-title">prada</span>
              <span className="caption-desc">an iconic project meticulously curated by our agency.</span>
            </div>
          </a>
        </motion.div>

        {/* 2-Column Staggered Grid (Louis Vuitton & Cyber Tesla) */}
        <div className="works-staggered-grid">
          {/* Left Card: Louis Vuitton (Tall Portrait) */}
          <motion.div
            className="staggered-card card-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="/works" className="single-project-link" aria-label="Explore Louis Vuitton Project">
              <div className="staggered-image-wrap tall-wrap">
                <img
                  src="/project2.png"
                  alt="louis vuitton"
                  className="single-project-img"
                />
              </div>

              <div className="staggered-caption">
                <div className="staggered-title-box">
                  <span className="staggered-title">louis</span>
                  <span className="staggered-title">vuitton</span>
                </div>
                <div className="staggered-desc-box">
                  <span className="caption-desc">louis vuitton, an embodiment of luxury and timeless elegance.</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Card: Cyber Tesla (Landscape) */}
          <motion.div
            className="staggered-card card-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/works" className="single-project-link" aria-label="Explore Cyber Tesla Project">
              <div className="staggered-image-wrap wide-wrap">
                <img
                  src="/project5.png"
                  alt="cyber tesla"
                  className="single-project-img"
                />
              </div>

              <div className="staggered-caption">
                <div className="staggered-title-box">
                  <span className="staggered-title">cyber</span>
                  <span className="staggered-title">tesla</span>
                </div>
                <div className="staggered-desc-box">
                  <span className="caption-desc">tesla, a groundbreaking project crafted by our agency.</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom Full-width Card: Music Pro 2 */}
        <motion.div
          className="single-project-card music-pro-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a href="/works" className="single-project-link" aria-label="Explore Music Pro 2 Project">
            <div className="single-project-image-wrap">
              <img
                src="/hero3.jpg"
                alt="music pro 2"
                className="single-project-img"
              />
            </div>

            <div className="single-project-caption">
              <span className="caption-title">music pro 2</span>
              <span className="caption-desc">a visionary project crafted by our agency with a harmonious fusion of creativity</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Works;


