import React, { useState } from 'react';
import ShapeOverlays from './ShapeOverlays';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayAnimating, setIsOverlayAnimating] = useState(false);

  const toggleMenu = () => {
    setIsOverlayAnimating(true);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* GSAP Pixel Grid Overlay for Menu Transition */}
      <ShapeOverlays 
        isOpened={isMenuOpen} 
        color="var(--accent-red)" 
        onComplete={() => setIsOverlayAnimating(false)} 
      />

      <header className="hero-header">
        <div className="brand-monogram">
          <a href="#" className="logo-link" aria-label="Mark 9">
            <svg viewBox="0 0 1001 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-logo-svg">
              <path d="M272.118 709.115C230.116 701.072 192.136 685.88 158.177 663.539C125.112 641.197 96.9616 614.388 73.7265 583.11C50.4915 550.938 32.1716 515.639 18.7668 477.212C6.25559 438.785 0 399.464 0 359.249C0 295.8 9.83021 243.968 29.4906 203.753C50.0447 162.645 71.9392 130.92 95.1743 108.579C117.516 85.3441 141.644 66.5773 167.56 52.2789C194.37 37.9804 220.733 27.2565 246.649 20.1073C272.565 12.0644 297.14 6.70246 320.375 4.02148C343.61 1.34049 363.718 0 380.697 0C437.891 0 489.723 10.277 536.193 30.8311C582.663 50.4915 622.431 77.748 655.496 112.601C688.561 147.453 714.03 188.114 731.904 234.584C750.67 281.054 760.054 330.206 760.054 382.038C760.054 436.551 749.777 489.276 729.222 540.214C709.562 590.259 684.093 639.41 652.815 687.667C622.431 735.925 588.472 783.735 550.938 831.099C514.298 877.569 478.552 924.933 443.7 973.19C438.338 980.34 430.742 986.595 420.911 991.957C411.081 997.319 401.698 1000 392.761 1000H128.686C119.75 1000 113.941 997.319 111.26 991.957C108.579 986.595 109.92 980.34 115.281 973.19L285.523 739.946C290.885 732.797 292.225 726.542 289.544 721.18C286.863 714.924 281.054 710.903 272.118 709.115ZM262.735 357.909C262.735 373.101 265.416 387.846 270.777 402.145C277.033 415.55 285.076 427.167 294.906 436.997C305.63 446.828 317.694 454.87 331.099 461.126C345.398 466.488 360.59 469.169 376.676 469.169C392.761 469.169 407.507 466.488 420.911 461.126C435.21 454.87 447.274 446.828 457.105 436.997C467.828 427.167 476.318 415.55 482.574 402.145C488.829 387.846 491.957 373.101 491.957 357.909C491.957 318.588 480.34 289.991 457.105 272.118C434.763 254.245 407.953 245.308 376.676 245.308C345.398 245.308 318.588 254.692 296.247 273.458C273.905 291.332 262.735 319.482 262.735 357.909Z" fill="currentColor" />
              <circle cx="880.055" cy="880" r="120" className="logo-dot" />
            </svg>
          </a>
        </div>
        <button 
          className="menu-toggle-btn" 
          onClick={toggleMenu} 
          aria-label="Open Menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </header>

      {/* Fullscreen Orange Navigation Menu Overlay */}
      <div className={`fullscreen-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <div className="brand-monogram dark-brand">
            <a href="#" onClick={toggleMenu} className="logo-link" aria-label="Mark 9">
              <svg viewBox="0 0 1001 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-logo-svg">
                <path d="M272.118 709.115C230.116 701.072 192.136 685.88 158.177 663.539C125.112 641.197 96.9616 614.388 73.7265 583.11C50.4915 550.938 32.1716 515.639 18.7668 477.212C6.25559 438.785 0 399.464 0 359.249C0 295.8 9.83021 243.968 29.4906 203.753C50.0447 162.645 71.9392 130.92 95.1743 108.579C117.516 85.3441 141.644 66.5773 167.56 52.2789C194.37 37.9804 220.733 27.2565 246.649 20.1073C272.565 12.0644 297.14 6.70246 320.375 4.02148C343.61 1.34049 363.718 0 380.697 0C437.891 0 489.723 10.277 536.193 30.8311C582.663 50.4915 622.431 77.748 655.496 112.601C688.561 147.453 714.03 188.114 731.904 234.584C750.67 281.054 760.054 330.206 760.054 382.038C760.054 436.551 749.777 489.276 729.222 540.214C709.562 590.259 684.093 639.41 652.815 687.667C622.431 735.925 588.472 783.735 550.938 831.099C514.298 877.569 478.552 924.933 443.7 973.19C438.338 980.34 430.742 986.595 420.911 991.957C411.081 997.319 401.698 1000 392.761 1000H128.686C119.75 1000 113.941 997.319 111.26 991.957C108.579 986.595 109.92 980.34 115.281 973.19L285.523 739.946C290.885 732.797 292.225 726.542 289.544 721.18C286.863 714.924 281.054 710.903 272.118 709.115ZM262.735 357.909C262.735 373.101 265.416 387.846 270.777 402.145C277.033 415.55 285.076 427.167 294.906 436.997C305.63 446.828 317.694 454.87 331.099 461.126C345.398 466.488 360.59 469.169 376.676 469.169C392.761 469.169 407.507 466.488 420.911 461.126C435.21 454.87 447.274 446.828 457.105 436.997C467.828 427.167 476.318 415.55 482.574 402.145C488.829 387.846 491.957 373.101 491.957 357.909C491.957 318.588 480.34 289.991 457.105 272.118C434.763 254.245 407.953 245.308 376.676 245.308C345.398 245.308 318.588 254.692 296.247 273.458C273.905 291.332 262.735 319.482 262.735 357.909Z" fill="currentColor" />
                <circle cx="880.055" cy="880" r="120" className="logo-dot" />
              </svg>
            </a>
          </div>
          <button 
            className="menu-close-btn" 
            onClick={toggleMenu} 
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <div className="menu-content">
          <nav className="menu-nav-links">
            <a href="#services" onClick={toggleMenu} className="menu-nav-item">
              <span className="item-num">01</span> services
            </a>
            <a href="#about" onClick={toggleMenu} className="menu-nav-item">
              <span className="item-num">02</span> about us
            </a>
            <a href="#what-we-do" onClick={toggleMenu} className="menu-nav-item">
              <span className="item-num">03</span> what we do
            </a>
            <a href="#contact" onClick={toggleMenu} className="menu-nav-item">
              <span className="item-num">04</span> contact
            </a>
          </nav>

          <div className="menu-info-sidebar">
            <div className="info-block">
              <span className="info-label">say hi</span>
              <a href="mailto:hey@mark9.design" className="info-value">hey@mark9.design</a>
            </div>

            <div className="info-block">
              <span className="info-label">elsewhere</span>
              <div className="social-links">
                <a href="#linkedin">LinkedIn</a>
                <a href="#dribbble">Dribbble</a>
                <a href="#instagram">Instagram</a>
              </div>
            </div>

            <div className="info-block">
              <span className="info-label">status</span>
              <div className="status-indicator">
                <span className="black-dot">●</span> Open for select projects
              </div>
            </div>
          </div>
        </div>

        <div className="menu-footer">
          <span>© 2026 mark9 studio</span>
          <span>ui/ux — design school</span>
        </div>
      </div>
    </>
  );
}

export default Header;
