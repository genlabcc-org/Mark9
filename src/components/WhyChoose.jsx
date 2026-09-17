import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Globe, Zap } from 'lucide-react';
import useSplitReveal from '../utils/useSplitReveal';
import './WhyChoose.css';

const DIFFERENTIATOR_ITEMS = [
  {
    id: '01',
    title: 'field-first, not tool-first',
    description:
      'month 1 has zero software. you learn design by observing the real world — 4 field visits before you ever open a design tool.'
  },
  {
    id: '02',
    title: 'breadth before depth',
    description:
      'month 2 puts every discipline in your hands — product design, graphic design, video editing — so you choose your path with real experience, not a guess.'
  },
  {
    id: '03',
    title: 'you choose where you fit',
    description:
      'month 3 is yours. specialize in the discipline you connected with, and master it under focused mentorship.'
  },
  {
    id: '04',
    title: 'mentors who\'ve actually done it',
    description:
      'learn from professionals with 20+ years across ibm, infosys and mercedes-benz — not trainers reading off a slide deck.'
  },
  {
    id: '05',
    title: 'built for tier 1 placement',
    description:
      'every module is reverse-engineered from what top-city studios and companies actually hire for.'
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
          <span>what makes us different</span>
        </span>
      </div>

      <div className="why-choose-container">
        {/* Main Headline */}
        <div className="why-choose-headline-wrapper">
          <h2 className="why-choose-headline">
            our learning process isn't borrowed from anyone<span className="dot-red">.</span>
          </h2>
        </div>

        {/* 5-Item Feature Grid */}
        <div className="why-choose-grid">
          {DIFFERENTIATOR_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="why-choose-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="why-choose-card-header">
                <span className="why-choose-number">({item.id})</span>
                <h3 className="why-choose-card-title">{item.title}</h3>
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

