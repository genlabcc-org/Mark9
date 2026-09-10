import React, { useState } from 'react';
import './Footer.css';

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
                  <span>whatsapp</span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  <span>x</span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <span>linkedin</span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <span>instagram</span>
                  <span className="social-arrow">→</span>
                </a>
              </li>
              <li>
                <a href="mailto:hey@mark9.design">
                  <span>email</span>
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
