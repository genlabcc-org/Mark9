import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './FAQ.css';

const FAQ_DATA = [
  {
    id: '01',
    question: 'What is your typical turnaround time?',
    answer: 'Our standard turnaround time ranges from 4 to 8 weeks depending on project scope, complexity, and feedback cycles. We establish clear milestones during onboarding.'
  },
  {
    id: '02',
    question: 'Do you offer custom design solutions?',
    answer: 'Yes, 100%. We craft bespoke digital identities and interactive web experiences tailored specifically to your brand vision and business objectives.'
  },
  {
    id: '03',
    question: 'What industries do you specialize in?',
    answer: 'We partner primarily with tech startups, fintech platforms, AI innovators, luxury eCommerce brands, and forward-thinking digital enterprises.'
  },
  {
    id: '04',
    question: 'Can you handle both design and development?',
    answer: 'Absolutely. We provide comprehensive end-to-end execution, from visual strategy and UI/UX design to custom frontend development and high-performance animations.'
  },
  {
    id: '05',
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we provide ongoing maintenance packages, performance tuning, security updates, and continuous design iterations to support long-term growth.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <span className="faq-tag">
          <span className="bullet-square"></span>
          <span>(05) FAQ</span>
        </span>
      </div>

      <div className="faq-container">
        {/* Left Column - Large Typography Heading */}
        <div className="faq-left-col">
          <h2 className="faq-heading">
            Frequently Asked<br />
            Questions
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
