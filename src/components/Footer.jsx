import React, { useState } from 'react';
import './Footer.css';

const WhatsappIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const XIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MailIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Grid Area */}
        <div className="footer-top-grid">
          {/* Column 1 & 2: Navigation Links */}
          <div className="footer-nav-col">
            <ul className="footer-links-list">
              <li>
                <a href="#home">
                  <span className="link-dash">—</span> home
                </a>
              </li>
              <li>
                <a href="#work">
                  <span className="link-dash">—</span> work
                </a>
              </li>
              <li>
                <a href="#about">
                  <span className="link-dash">—</span> about
                </a>
              </li>
              <li>
                <a href="#services">
                  <span className="link-dash">—</span> services
                </a>
              </li>
              <li>
                <a href="#journal">
                  <span className="link-dash">—</span> journal
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="link-dash">—</span> contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <ul className="footer-links-list">
              <li>
                <a href="#privacy">
                  <span className="link-dash">—</span> privacy policy
                </a>
              </li>
              <li>
                <a href="#terms">
                  <span className="link-dash">—</span> terms of service
                </a>
              </li>
              <li>
                <a href="#disclaimer">
                  <span className="link-dash">—</span> disclaimer
                </a>
              </li>
              <li>
                <a href="#404">
                  <span className="link-dash">—</span> 404
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter (stay in the loop) */}
          <div className="footer-newsletter-col">
            <h3 className="newsletter-title">stay in the loop</h3>
            <p className="newsletter-desc">
              stay informed about our latest news, updates by subscribing to our newsletter.
            </p>
            <p className="newsletter-subdesc">
              we respect your inbox. no spam, just valuable updates.
            </p>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="subscribe">
                →
              </button>
            </form>
          </div>

          {/* Column 4: Social Links List */}
          <div className="footer-social-col">
            <ul className="social-list">
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <span className="social-link-content">
                    <WhatsappIcon size={18} className="social-icon" />
                    <span>whatsapp</span>
                  </span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  <span className="social-link-content">
                    <XIcon size={16} className="social-icon" />
                    <span>x</span>
                  </span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <span className="social-link-content">
                    <LinkedinIcon size={18} className="social-icon" />
                    <span>linkedin</span>
                  </span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <span className="social-link-content">
                    <InstagramIcon size={18} className="social-icon" />
                    <span>instagram</span>
                  </span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="mailto:hey@mark9.design">
                  <span className="social-link-content">
                    <MailIcon size={18} className="social-icon" />
                    <span>email</span>
                  </span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Grid */}
        <div className="footer-bottom-grid">
          {/* Sub Col 1: Contact & Address */}
          <div className="sub-col sub-col-contact">
            <p className="address-text">
              <strong>mark9 studio SRL</strong> via monte napoleone 3 20121 milano
            </p>
            <p className="phone-number">(08) 560 8890</p>
          </div>

          {/* Sub Col 2: Registration Info */}
          <div className="sub-col sub-col-legal">
            <p>
              mark9 studio SRL is a company registered in italy. design and development services are provided by mark9 studio SRL.
            </p>
          </div>

          {/* Sub Col 3: Copyright */}
          <div className="sub-col sub-col-copyright">
            <p>© 2026 mark9 studio — all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
