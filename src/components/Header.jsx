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
      {/* GSAP Wave Overlays for Menu Transition */}
      <ShapeOverlays 
        isOpened={isMenuOpen} 
        colors={["#ff4d00", "#ff2200"]} 
        onComplete={() => setIsOverlayAnimating(false)} 
      />

      <header className="hero-header">
        <div className="brand-monogram">
          <span>Mark 9</span>
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
            <span>Mark 9</span>
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
