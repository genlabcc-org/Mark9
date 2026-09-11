import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Globe, Zap } from 'lucide-react';
import useSplitReveal from '../utils/useSplitReveal';
import './WhyChoose.css';

const WHY_US_ITEMS = [
  {
    id: '01',
    line1: 'one team,',
    line2: 'every discipline',
    description:
      'no back-and-forth between five different agencies. strategy, branding, design, web, and ads — all under one roof, aligned from day one.',
    icon: <Layers size={46} strokeWidth={1.5} />
  },
  {
    id: '02',
    line1: 'rooted,',
    line2: 'but ambitious',
    description:
      "we're based in nagercoil, tamil nadu — and we bring world-class design standards to local brands ready to scale nationwide.",
    icon: <Globe size={46} strokeWidth={1.5} />
  },
  {
    id: '03',
    line1: 'built to perform,',
    line2: 'not just impress',
    description:
      "we don't design for awards — we design for conversion, recognition, and revenue. pretty is good. effective is better.",
    icon: <Zap size={46} strokeWidth={1.5} />
  }
];

export function WhyChoose() {
  const sectionRef = useRef(null);
  useSplitReveal(sectionRef);

  return (
    <section className="why-choose-section" id="why-choose" ref={sectionRef}>
      {/* Section Header Tag */}
      <div className="why-choose-header">
        <span className="why-choose-tag">
          <span className="bullet-square"></span>
          <span>why us</span>
        </span>
      </div>

      <div className="why-choose-container">
        {/* Main Headline (Exactly 2 Lines) */}
        <div className="why-choose-headline-wrapper">
          <h2 className="why-choose-headline">
            <span className="split-line-wrap">
              <span className="split-line-content">design that thinks like a business<span className="dot-red">.</span></span>
            </span>
            <span className="split-line-wrap">
              <span className="split-line-content">strategy that feels like art<span className="dot-red">.</span></span>
            </span>
          </h2>
        </div>

        {/* 3-Column Feature Grid with Inline Icon & Number */}
        <div className="why-choose-grid">
          {WHY_US_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="why-choose-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="why-choose-card-header-line">
                <span className="why-choose-number">({item.id})</span>
                <span className="why-choose-icon-inline">{item.icon}</span>
                <h3 className="why-choose-card-title">
                  <span>{item.line1}</span>
                  <br />
                  <span>{item.line2}</span>
                </h3>
              </div>
              <p className="why-choose-card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

