import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Mark9LogoScroll from '../components/Mark9LogoScroll';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(contactRef);
  useFooterStackReveal(mainRef, footerRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="contact-page-wrapper" ref={contactRef}>
      <Preloader />
      <Header />

      <main className="contact-main main-content-flow" ref={mainRef}>
        {/* Top Infinite Scrolling Marquee Banner */}
        <Mark9LogoScroll />

        {/* Minimal Studio Contact Section */}
        <section className="contact-studio-section">
          <div className="contact-studio-container">
            {/* Left Column: Capsule/Stadium Studio Photo + Address */}
            <div className="contact-studio-left">
              <div className="contact-studio-image-wrap">
                <img
                  src="/about-banner.jpg"
                  alt="mark9 studio workspace"
                  className="contact-studio-img"
                  loading="lazy"
                />
              </div>

              <div className="contact-studio-info">
                <h3 className="studio-city">nagercoil</h3>
                <p className="studio-address">
                  121/c, kottar–parvathipuram rd<br />
                  chetti kulam, nagercoil 629001<br />
                  +91 99945 35120
                </p>
              </div>
            </div>

            {/* Right Column: Minimal Dark Contact Form */}
            <div className="contact-studio-right">
              <form className="minimal-contact-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="minimal-form-field">
                  <label htmlFor="minimal-name" className="minimal-label">
                    name
                  </label>
                  <input
                    id="minimal-name"
                    type="text"
                    name="name"
                    required
                    placeholder="enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="minimal-input"
                  />
                </div>

                {/* E-mail Field */}
                <div className="minimal-form-field">
                  <label htmlFor="minimal-email" className="minimal-label">
                    e-mail
                  </label>
                  <input
                    id="minimal-email"
                    type="email"
                    name="email"
                    required
                    placeholder="enter your e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="minimal-input"
                  />
                </div>

                {/* Message Field */}
                <div className="minimal-form-field">
                  <label htmlFor="minimal-message" className="minimal-label">
                    message
                  </label>
                  <textarea
                    id="minimal-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="minimal-textarea"
                  />
                </div>

                {/* Submit Button & Notification */}
                <div className="minimal-form-actions">
                  <button
                    type="submit"
                    className="minimal-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'sending...' : 'submit message'}
                  </button>

                  {formSubmitted && (
                    <span className="minimal-success-msg">
                      message sent successfully!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
