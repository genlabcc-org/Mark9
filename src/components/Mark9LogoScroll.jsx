import React, { useEffect, useRef } from 'react';
import './Mark9LogoScroll.css';

export function Mark9LogoScroll() {
  const scrollTrackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let animationFrameId;

    const render = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const scrollDelta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      // Base auto-slide speed (1.5px/frame) + extra speed boost on scroll
      const moveSpeed = 1.5 + Math.abs(scrollDelta) * 0.35;
      offsetRef.current += moveSpeed;

      if (scrollTrackRef.current) {
        // Half width of track for seamless infinite looping
        const totalWidth = scrollTrackRef.current.scrollWidth;
        const halfWidth = totalWidth / 2;

        if (halfWidth > 0) {
          if (offsetRef.current >= halfWidth) {
            offsetRef.current = offsetRef.current % halfWidth;
          }
          scrollTrackRef.current.style.transform = `translate3d(-${offsetRef.current.toFixed(2)}px, 0, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const logoItems = [
    { type: 'logo', src: '/logo.svg', alt: 'MARK9' },
    { type: 'dash', text: '—' },
    { type: 'logo', src: '/logo.svg', alt: 'MARK9' },
    { type: 'dash', text: '—' },
    { type: 'logo', src: '/logo.svg', alt: 'MARK9' },
    { type: 'dash', text: '—' },
    { type: 'logo', src: '/logo.svg', alt: 'MARK9' },
    { type: 'dash', text: '—' },
  ];

  return (
    <section className="mark9-logo-scroll-section">
      {/* Top Banner Marquee Row with Auto-Sliding */}
      <div className="logo-scroll-track-wrapper">
        <div className="logo-scroll-infinite-container">
          <div className="logo-scroll-track" ref={scrollTrackRef}>
            {/* Duplicated 4 times to ensure seamless infinite looping */}
            {[...logoItems, ...logoItems, ...logoItems, ...logoItems].map((item, index) => (
              <div key={index} className="scroll-marquee-item">
                {item.type === 'logo' ? (
                  <img src={item.src} alt={item.alt} className="scroll-mark9-logo-img" />
                ) : (
                  <span className="scroll-em-dash">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom 3-Column Info Footer */}
      <div className="logo-scroll-footer-container">
        {/* Left Column */}
        <div className="logo-scroll-col col-left">
          <p className="scroll-left-text">
            WITH A BROAD SPECTRUM OF DESIGN NEEDS IN MIND, OUR DESIGN COLLECTION ENCOMPASSES EVERYTHING FROM ELEGANT AND TIMELESS STYLES TO MODERN AND DARING DESIGNS.
          </p>
        </div>

        {/* Center Column */}
        <div className="logo-scroll-col col-center">
          <span className="scroll-year-tag">{`{2026}`}</span>
        </div>

        {/* Right Column */}
        <div className="logo-scroll-col col-right">
          <div className="scroll-agency-header">
            <span className="bullet-dot">•</span>
            <span className="agency-title">CREATIVE AGENCY</span>
          </div>
          <p className="scroll-right-desc">
            CRAFTING TIMELESS DESIGNS FOR INSPIRED LIVING
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mark9LogoScroll;
