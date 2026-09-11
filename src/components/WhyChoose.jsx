import React from 'react';
import { motion } from 'motion/react';
import { Layers, Globe, Zap } from 'lucide-react';
import './WhyChoose.css';

const WHY_US_ITEMS = [
  {
    id: '01',
    line1: 'one team,',
    line2: 'every discipline',
    description:
      'No back-and-forth between five different agencies. Strategy, branding, design, web, and ads — all under one roof, aligned from day one.',
    icon: <Layers size={46} strokeWidth={1.5} />
  },
  {
    id: '02',
    line1: 'rooted,',
    line2: 'but ambitious',
    description:
      "We're based in Nagercoil, Tamil Nadu — and we bring world-class design standards to local brands ready to scale nationwide.",
    icon: <Globe size={46} strokeWidth={1.5} />
  },
  {
    id: '03',
    line1: 'built to perform,',
    line2: 'not just impress',
    description:
      "We don't design for awards — we design for conversion, recognition, and revenue. Pretty is good. Effective is better.",
    icon: <Zap size={46} strokeWidth={1.5} />
  }
];

export function WhyChoose() {
  return (
    <section className="why-choose-section" id="why-choose">
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
            <span className="headline-line">design that thinks like a business<span className="dot-red">.</span></span>
            <br />
            <span className="headline-line">strategy that feels like art<span className="dot-red">.</span></span>
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
