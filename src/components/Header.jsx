import React, { useState, useEffect } from 'react';
import ShapeOverlays from './ShapeOverlays';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { number: '01', label: 'home', href: '/' },
    { number: '02', label: 'about', href: '/about' },
    { number: '03', label: 'services', href: '/services' },
    { number: '04', label: 'works', href: '/works' },
    { number: '05', label: 'contact', href: '/contact' },
  ];

  const isLinkActive = (href) => {
    if (!href) return false;
    if (href === '/') {
      return currentPath === '/' || currentPath === '';
    }
    if (href.startsWith('/')) {
      return currentPath.startsWith(href);
    }
    return false;
  };

  return (
    <>
      <ShapeOverlays
        isOpened={isMenuOpen}
        color="var(--accent-red)"
        onComplete={() => { }}
      />

      <header className={`global-header ${isMenuOpen ? 'menu-active' : ''}`}>
        {/* Desktop 3-Column Header Grid */}
        <div className="header-desktop-grid">
          <div className="header-col col-left">
            <a href="/" className={`hero-nav-link ${isLinkActive('/') ? 'active' : ''}`}>Home</a>
            <a href="/about" className={`hero-nav-link ${isLinkActive('/about') ? 'active' : ''}`}>About</a>
            <a href="/works" className={`hero-nav-link ${isLinkActive('/works') ? 'active' : ''}`}>Works</a>
          </div>

          <div className="header-col col-center">
            <a href="/" className="mark9-logo-badge" aria-label="MARK9">
              <img src="/logo.svg" alt="MARK9" className="mark9-badge-img" />
            </a>
          </div>

          <div className="header-col col-right">
            <a href="/services" className={`hero-nav-link ${isLinkActive('/services') ? 'active' : ''}`}>Services</a>
            <a href="#insights" className="hero-nav-link">Blog</a>
            <a href="/contact" className={`hero-nav-link ${isLinkActive('/contact') ? 'active' : ''}`}>Contact</a>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="header-mobile-bar">
          <a href="/" className="mark9-logo-badge" aria-label="MARK9">
            <img src="/logo.svg" alt="MARK9" className="mark9-badge-img" />
          </a>

          <button
            className="menu-toggle-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation Menu Overlay */}
      <div className={`fullscreen-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <nav className="menu-nav-links">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`menu-nav-item ${active ? 'active' : ''}`}
                >
                  <span className="item-num">{item.number}</span> {item.label}
                </a>
              );
            })}
          </nav>

          <div className="menu-info-sidebar">
            <div className="info-block">
              <span className="info-label">say hi</span>
              <a href="mailto:info@mark9.cc" className="info-value">info@mark9.cc</a>
            </div>

            <div className="info-block">
              <span className="info-label">elsewhere</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/mark9cc/" target="_blank" rel="noreferrer">linkedin</a>
                <a href="https://www.instagram.com/mark9.cc/" target="_blank" rel="noreferrer">instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-footer">
          <span>© 2026 mark9 studio</span>
          <span>design · strategy · marketing</span>
        </div>
      </div>
    </>
  );
}

export default Header;


