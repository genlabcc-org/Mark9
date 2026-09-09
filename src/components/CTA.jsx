import React from 'react';
import { motion } from 'motion/react';
import './CTA.css';

export function CTA() {
  return (
    <section className="cta-section" id="contact">
      {/* Top Tag Line */}
      <motion.div
        className="cta-tag"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="bullet-square"></span>
        <span>got something serious?</span>
      </motion.div>

      {/* Main Title */}
      <motion.div
        className="cta-title-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="cta-title">
          <span>let's </span>
          <span className="orange-text">talk</span>
        </h2>
      </motion.div>

      {/* Email Link */}
      <motion.div
        className="cta-email-wrapper"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="mailto:hey@mark9.design" className="cta-email">
          hey@mark9.design
        </a>
      </motion.div>
    </section>
  );
}

export default CTA;
