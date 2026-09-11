import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import { ArrowUpRight, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <div className="contact-page-wrapper">
      <Preloader />
      
      {/* Top Header */}
      <div className="contact-header-wrap">
        <Header />
      </div>

      {/* Main Contact Section */}
      <main className="contact-main">
        {/* Contact Hero Header */}
        <div className="contact-hero">
          <div className="contact-tag">
            <span className="square-bullet"></span>
            <span>(05) get in touch</span>
          </div>

          <h2 className="contact-title">
            <span>let's build something</span>
            <br />
            <span>people can't scroll past<span className="orange-text">.</span></span>
          </h2>
        </div>

        {/* Content Split: Left Contact Details, Right Functional Form */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="contact-left-col">
            {/* Phone */}
            <div className="info-card">
              <span className="card-label">phone</span>
              <div className="contact-info-row">
                <Phone size={18} className="info-icon" />
                <a href="tel:+919994535120" className="contact-detail-link">
                  +91 99945 35120
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="info-card">
              <span className="card-label">email</span>
              <div className="contact-info-row">
                <Mail size={18} className="info-icon" />
                <a href="mailto:info@mark9.cc" className="contact-detail-link">
                  info@mark9.cc
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="info-card">
              <span className="card-label">address</span>
              <div className="contact-info-row address-row">
                <MapPin size={18} className="info-icon pin-icon" />
                <p className="address-text-detail">
                  121/c, kottar–parvathipuram rd, chetti kulam, nagercoil, tamil nadu 629001
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="info-card">
              <span className="card-label">social</span>
              <div className="contact-social-links">
                <a
                  href="https://www.instagram.com/mark9.cc/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <InstagramIcon size={14} />
                  <span>@mark9.cc</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/company/mark9cc/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <LinkedinIcon size={14} />
                  <span>mark9 on linkedin</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Contact Form (Name, Email, Company, Message) */}
          <div className="contact-right-col">
            {formSubmitted ? (
              <div className="form-success-card">
                <div className="success-icon-wrap">
                  <Sparkles size={32} />
                </div>
                <h3>message sent!</h3>
                <p>
                  thank you for reaching out, {formData.name || 'there'}. we've received your message and will get back to you shortly.
                </p>
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                >
                  send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name & Email Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="your name"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div className="form-group">
                  <label htmlFor="contact-company" className="form-label">company</label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="company name"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="describe your project or goals..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="submitting-spinner">sending...</span>
                  ) : (
                    <>
                      <span>send message</span>
                      <span className="btn-arrow">→</span>
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
