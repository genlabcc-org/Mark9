import React from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import './Works.css';

const WORKS_DATA = [
  {
    id: '01',
    title: 'typography trends',
    subtitle: 'how modern typography is changing the way we communicate online',
    image: '/project2.png',
    tag: 'editorial / 2026'
  },
  {
    id: '02',
    title: 'ai-driven design',
    subtitle: 'how artificial intelligence is transforming the creative process',
    image: '/project3.png',
    tag: '3d & ai / 2026'
  },
  {
    id: '03',
    title: 'digital finance platform',
    subtitle: 'reimagining high-stakes financial interfaces for institutional clients',
    image: '/project5.png',
    tag: 'fintech / 2026'
  },
  {
    id: '04',
    title: 'research & education portal',
    subtitle: 'building scalable web infrastructure for global academic institutes',
    image: '/portrait1.jpg',
    tag: 'web dev / 2026'
  }
];

export function Works() {
  const handleMouseEnter = (e) => {
    const img = e.currentTarget.querySelector('.work-img');
    if (img) {
      gsap.to(img, {
        scale: 1.0,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    }
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector('.work-img');
    if (img) {
      gsap.to(img, {
        scale: 1.12,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    }
  };

  return (
    <section className="works-section" id="work">
      {/* Section Header */}
      <div className="works-header">
        <span className="works-tag">
          <span className="bullet-square"></span>
          <span>selected works</span>
        </span>
      </div>

      {/* 2x2 Grid of 4 Works Cards */}
      <div className="works-grid">
        {WORKS_DATA.map((work, index) => (
          <motion.div
            key={work.id}
            className="work-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image Container */}
            <div className="work-image-wrapper">
              <img src={work.image} alt={work.title} className="work-img" />
            </div>

            {/* Text Information Below Image */}
            <div className="work-info-wrapper">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-subtitle">{work.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Works;
