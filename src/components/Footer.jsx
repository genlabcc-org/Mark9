import React, { useRef } from 'react';
import useSplitReveal from '../utils/useSplitReveal';
import PreFooterMarquee from './PreFooterMarquee';
import './Footer.css';

export function Footer() {
  const footerRef = useRef(null);
  useSplitReveal(footerRef);

  return (
    <div className="global-footer-wrapper">
      {/* Giant Pre-Footer Text Banner (Rendered cleanly above the footer element) */}
      <PreFooterMarquee />

      <footer className="site-footer" ref={footerRef}>
        <div className="footer-container">
          {/* Main Content Area */}
          <div className="footer-main-content">
            {/* Left Block: Monogram, Headline & CTA */}
            <div className="footer-left-block">
              <div className="footer-monogram">
                <svg viewBox="0 0 1001 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-symbol-svg">
                  <path d="M272.118 709.115C230.116 701.072 192.136 685.88 158.177 663.539C125.112 641.197 96.9616 614.388 73.7265 583.11C50.4915 550.938 32.1716 515.639 18.7668 477.212C6.25559 438.785 0 399.464 0 359.249C0 295.8 9.83021 243.968 29.4906 203.753C50.0447 162.645 71.9392 130.92 95.1743 108.579C117.516 85.3441 141.644 66.5773 167.56 52.2789C194.37 37.9804 220.733 27.2565 246.649 20.1073C272.565 12.0644 297.14 6.70246 320.375 4.02148C343.61 1.34049 363.718 0 380.697 0C437.891 0 489.723 10.277 536.193 30.8311C582.663 50.4915 622.431 77.748 655.496 112.601C688.561 147.453 714.03 188.114 731.904 234.584C750.67 281.054 760.054 330.206 760.054 382.038C760.054 436.551 749.777 489.276 729.222 540.214C709.562 590.259 684.093 639.41 652.815 687.667C622.431 735.925 588.472 783.735 550.938 831.099C514.298 877.569 478.552 924.933 443.7 973.19C438.338 980.34 430.742 986.595 420.911 991.957C411.081 997.319 401.698 1000 392.761 1000H128.686C119.75 1000 113.941 997.319 111.26 991.957C108.579 986.595 109.92 980.34 115.281 973.19L285.523 739.946C290.885 732.797 292.225 726.542 289.544 721.18C286.863 714.924 281.054 710.903 272.118 709.115ZM262.735 357.909C262.735 373.101 265.416 387.846 270.777 402.145C277.033 415.55 285.076 427.167 294.906 436.997C305.63 446.828 317.694 454.87 331.099 461.126C345.398 466.488 360.59 469.169 376.676 469.169C392.761 469.169 407.507 466.488 420.911 461.126C435.21 454.87 447.274 446.828 457.105 436.997C467.828 427.167 476.318 415.55 482.574 402.145C488.829 387.846 491.957 373.101 491.957 357.909C491.957 318.588 480.34 289.991 457.105 272.118C434.763 254.245 407.953 245.308 376.676 245.308C345.398 245.308 318.588 254.692 296.247 273.458C273.905 291.332 262.735 319.482 262.735 357.909Z" fill="currentColor" />
                  <circle cx="880.055" cy="880" r="120" fill="var(--accent-red)" />
                </svg>
              </div>

              <p className="footer-headline">
                mark9 —an uncommon design agency.
              </p>

              <div className="footer-cta-wrap">
                <a href="/contact" className="footer-cta-link">
                  apply for next batch
                </a>
              </div>
            </div>

            {/* Right Block: Studio, Services, & Contact Columns */}
            <div className="footer-columns-grid">
              <div className="footer-col">
                <h4 className="footer-col-title">studio</h4>
                <ul className="footer-links-list">
                  <li><a href="#about" className="footer-link">who we are</a></li>
                  <li><a href="/works" className="footer-link">our work</a></li>
                  <li><a href="/contact" className="footer-link">careers</a></li>
                  <li><a href="/blog" className="footer-link">blog</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">services</h4>
                <ul className="footer-links-list">
                  <li><span className="footer-item-text">branding</span></li>
                  <li><span className="footer-item-text">design</span></li>
                  <li><span className="footer-item-text">strategy</span></li>
                  <li><span className="footer-item-text">marketing</span></li>
                  <li><span className="footer-item-text">packaging design</span></li>
                  <li><span className="footer-item-text">ui/ux</span></li>
                  <li><span className="footer-item-text">ads</span></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">contact</h4>
                <address className="footer-address">
                  <a href="mailto:info@mark9.cc" className="footer-link-highlight">info@mark9.cc</a>
                  <a href="tel:+919994535120" className="footer-link-highlight">+91 99945 35120</a>
                  <span className="footer-address-text">
                    121/c, kottar–parvathipuram rd,<br />
                    chetti kulam, nagercoil,<br />
                    Tamil nadu 629001
                  </span>
                </address>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Credits & Social Links */}
          <div className="footer-bottom-bar">
            <div className="footer-bottom-left">
              <span>© 2026 <strong>mark9 design agency</strong>. all rights reserved.</span>
            </div>

            <div className="footer-bottom-right">
              <a href="https://instagram.com/mark9.design" target="_blank" rel="noreferrer" className="footer-social-link">
                instagram ↗
              </a>
              <a href="https://www.linkedin.com/company/mark9cc/" target="_blank" rel="noreferrer" className="footer-social-link">
                linkedin ↗
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
