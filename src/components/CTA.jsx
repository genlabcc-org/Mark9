import React from 'react';
import { motion } from 'motion/react';
import './CTA.css';

export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        {/* Top Tag Line */}
        <motion.div
          className="cta-tag"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bullet-square"></span>
          <span>get in touch</span>
        </motion.div>

        {/* Main Title (Single Line) */}
        <motion.div
          className="cta-title-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="cta-title">
            got a brand worth building? let's <span className="orange-text">talk.</span>
          </h2>
        </motion.div>

        {/* Subline */}
        <motion.p
          className="cta-subline"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Whether you're starting from scratch, refreshing a legacy brand, or scaling across Tamil Nadu — we're ready.
        </motion.p>

        {/* Action Button & Contact Bar */}
        <motion.div
          className="cta-actions-wrapper"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="mailto:info@mark9.cc" className="cta-primary-btn">
            <span>start a conversation</span>
            <span className="btn-arrow">→</span>
          </a>

          <div className="cta-contact-info-bar">
            <span>Nagercoil, Tamil Nadu</span>
            <span className="divider-dot">·</span>
            <a href="mailto:info@mark9.cc">info@mark9.cc</a>
            <span className="divider-dot">·</span>
            <a href="tel:+919994535120">+91 99945 35120</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
