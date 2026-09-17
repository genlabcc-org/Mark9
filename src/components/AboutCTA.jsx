import React, { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import useSplitReveal from '../utils/useSplitReveal';
import './AboutCTA.css';

export function AboutCTA() {
  const ctaRef = useRef(null);
  useSplitReveal(ctaRef);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1,
        duration: 0.45,
        ease: 'power3.out',
      });
    }
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.08,
        borderColor: '#ffffff',
        duration: 0.45,
        ease: 'power3.out',
      });
    }
    if (textRef.current) {
      gsap.to(textRef.current, {
        color: '#0c0c0c',
        fontWeight: 500,
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(buttonRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 0,
        duration: 0.45,
        ease: 'power3.out',
      });
    }
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        borderColor: 'rgba(255, 255, 255, 0.25)',
        duration: 0.55,
        ease: 'power3.out',
      });
    }
    if (textRef.current) {
      gsap.to(textRef.current, {
        color: '#ffffff',
        fontWeight: 400,
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section className="about-cta-section" ref={ctaRef}>
      <div className="about-cta-container">
        {/* Main Centered Headline Narrative split into 2 lines */}
        <motion.h2
          className="about-cta-headline"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          our designers and development rockstars<br className="cta-br" /> are here to make your digital dreams pop.
        </motion.h2>

        {/* Centered Circular Interactive Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href="/contact"
            ref={buttonRef}
            className="circle-cta-button"
            aria-label="Let's work together"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span ref={bgRef} className="circle-cta-bg"></span>
            <span ref={textRef} className="circle-cta-text">
              let's work<br />together
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;
