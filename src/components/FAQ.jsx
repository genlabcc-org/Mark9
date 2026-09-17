import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import useSplitReveal from '../utils/useSplitReveal';
import './FAQ.css';

const FAQ_DATA = [
  {
    id: '01',
    question: 'what makes mark9 different from other design institutes?',
    answer: 'we don\'t start with software — we start with how you see the world. field visits, real mentors, and a curriculum that lets you try every discipline before you commit to one.'
  },
  {
    id: '02',
    question: 'do i need prior design experience to join?',
    answer: 'no. mark9 is built for beginners — month 1 starts from fundamentals, not assumptions.'
  },
  {
    id: '03',
    question: 'what will i learn in each month?',
    answer: 'month 1: design fundamentals through field visits. month 2: hands-on basics across product design, graphic design and video editing. month 3: deep specialization in the discipline you\'re best suited for.'
  },
  {
    id: '04',
    question: 'who are the mentors?',
    answer: 'industry professionals with 20+ years of experience, including former designers from ibm, infosys and mercedes-benz.'
  },
  {
    id: '05',
    question: 'does mark9 offer placement support?',
    answer: 'yes — mark9 actively supports placement in tier 1 cities after course completion.'
  },
  {
    id: '06',
    question: 'how long is the program?',
    answer: '3 months, structured in three focused phases: fundamentals, exploration, and mastery.'
  },
  {
    id: '07',
    question: 'where is mark9 located?',
    answer: '121/c, kottar–parvathipuram rd, chetti kulam, nagercoil, tamil nadu 629001.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);
  useSplitReveal(faqRef);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" ref={faqRef}>
      {/* Top Header Row with Horizontal Line */}
      <div className="faq-top-header">
        <span className="faq-header-label">
          <span className="bullet-square"></span>
          <span>good questions deserve real answers</span>
        </span>
        <div className="faq-header-line"></div>
      </div>

      <div className="faq-container">
        {/* Left Column - Large Typography Heading */}
        <div className="faq-left-col">
          <h2 className="faq-heading">
            frequently asked questions<span className="orange-text">.</span>
          </h2>
        </div>

        {/* Right Column - Accordion Items */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-toggle-icon">
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="plus-icon"
                      >
                        +
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -6 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="faq-answer-text">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
