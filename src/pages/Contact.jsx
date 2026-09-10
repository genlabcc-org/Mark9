import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import { ArrowUpRight, Sparkles, Clock, Globe } from 'lucide-react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeString = new Intl.DateTimeFormat([], options).format(new Date());
      setCurrentTime(`${timeString} IST`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="contact-page-wrapper">
      <Preloader />
      
      {/* Top Main Header */}
      <div className="contact-header-wrap">
        <Header />
      </div>

      {/* Main Contact Section */}
      <main className="contact-main">
        {/* Top Hero Headline */}
        <div className="contact-hero">
          <div className="contact-tag">
            <span className="square-bullet"></span>
            <span>(05) get in touch</span>
          </div>

          <h1 className="contact-title">
            Let’s build something <span className="orange-text">bold</span> together.
          </h1>

          <p className="contact-subtitle">
            Have a project in mind or want to talk design? Drop us a line or email us directly — we typically respond within 24 hours.
          </p>
        </div>

        {/* Content Split: Left Info, Right Form */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-left-col">
            <div className="info-card">
              <span className="card-label">direct email</span>
              <a href="mailto:hey@mark9.design" className="email-link">
                hey@mark9.design
              </a>
            </div>

            <div className="info-card">
              <span className="card-label">location & time</span>
              <div className="time-location-row">
                <div className="location-item">
                  <Globe size={16} />
                  <span>India (UTC +5:30)</span>
                </div>
                <div className="time-item">
                  <Clock size={16} />
                  <span>{currentTime || '14:38 IST'}</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <span className="card-label">elsewhere</span>
              <div className="contact-social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-pill">
                  Dribbble <ArrowUpRight size={14} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
                  Instagram <ArrowUpRight size={14} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-pill">
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-right-col">
            {formSubmitted ? (
              <div className="form-success-card">
                <div className="success-icon-wrap">
                  <Sparkles size={32} />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out, {formData.name || 'there'}. We’ve received your inquiry and will be in touch within 24 hours.
                </p>
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name & Email Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Tell us about your project</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    placeholder="Describe your goals, key features, or timelines..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="submitting-spinner">Sending...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <span className="btn-dot">●</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;

