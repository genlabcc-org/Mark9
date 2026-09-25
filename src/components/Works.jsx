import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSplitReveal from '../utils/useSplitReveal';
import './Works.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'apollo',
    title: 'Apollo',
    desc: 'an iconic project meticulously curated by our agency.',
    image: '/apollo.jpg',
    alt: 'apollo - iconic project',
    link: '/works'
  },
  {
    id: 'anika',
    title: 'Anika',
    desc: 'an embodiment of luxury and timeless elegance.',
    image: '/project1.png',
    alt: 'anika jewellery',
    link: '/works'
  },
  {
    id: 'faywalk',
    title: 'FayWalk',
    desc: 'a groundbreaking project crafted by our agency.',
    image: '/project5.png',
    alt: 'faywalk',
    link: '/works'
  },
  {
    id: 'invenza',
    title: 'Invenza',
    desc: 'a visionary project crafted by our agency with a harmonious fusion of creativity',
    image: '/project3.png',
    alt: 'invenza',
    link: '/works'
  }
];

export function Works() {
  const worksRef = useRef(null);
  useSplitReveal(worksRef);

  // Smooth GSAP Image Parallax for each card in the 2-column grid
  useEffect(() => {
    if (!worksRef.current) return;

    const ctx = gsap.context(() => {
      const wraps = worksRef.current.querySelectorAll('.work-grid-image-wrap');
      wraps.forEach((wrap) => {
        const img = wrap.querySelector('.work-grid-img');
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -2, scale: 1.02, force3D: true, transformOrigin: '50% 50%' },
            {
              yPercent: 2,
              ease: 'none',
              scrollTrigger: {
                trigger: wrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
                invalidateOnRefresh: true
              }
            }
          );
        }
      });
    }, worksRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

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

      {/* 2 Images in 1 Line Grid Layout */}
      <div className="works-grid-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="work-grid-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
          >
            <a href={project.link} className="work-grid-link" aria-label={`Explore ${project.title} Project`}>
              {/* Image Wrap */}
              <div className="work-grid-image-wrap">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="work-grid-img"
                  loading="lazy"
                />
              </div>

              {/* Bottom Caption Line */}
              <div className="work-grid-caption">
                <div className="work-title-box">
                  <span className="work-title">{project.title}</span>
                </div>
                <div className="work-desc-box">
                  <span className="work-desc">{project.desc}</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Works;
