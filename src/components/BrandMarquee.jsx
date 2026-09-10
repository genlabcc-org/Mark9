import React, { useEffect, useRef } from 'react';
import './BrandMarquee.css';

export function BrandMarquee() {
  const wrapperRef = useRef(null);

  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollableDistance = wrapperRef.current.clientHeight - window.innerHeight;

      if (scrollableDistance > 0) {
        // Calculate progress from 0 to 1 while pinned
        const rawProgress = -rect.top / scrollableDistance;
        targetProgress.current = Math.max(0, Math.min(1, rawProgress));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const render = () => {
      // Ultra-smooth spring lerp dampening
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.075;

      let topMaxShift = window.innerWidth * 0.6;
      let bottomMaxShift = window.innerWidth * 0.6;

      if (topTrackRef.current) {
        topMaxShift = Math.max(300, topTrackRef.current.scrollWidth - window.innerWidth * 0.35);
      }
      if (bottomTrackRef.current) {
        bottomMaxShift = Math.max(300, bottomTrackRef.current.scrollWidth - window.innerWidth * 0.35);
      }

      const topOffset = currentProgress.current * topMaxShift;
      const bottomOffset = currentProgress.current * bottomMaxShift;

      if (topTrackRef.current) {
        // Line 1 starts with "shaping" at 50vw center, slides LEFT (←) to reveal "design"
        topTrackRef.current.style.transform = `translate3d(-${topOffset.toFixed(2)}px, 0, 0)`;
      }
      if (bottomTrackRef.current) {
        // Line 2 starts with "futures" at 50vw center, slides RIGHT (→) to reveal "crafting"
        bottomTrackRef.current.style.transform = `translate3d(${bottomOffset.toFixed(2)}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };



    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="brand-marquee-sticky-wrapper" ref={wrapperRef}>
      <section className="brand-marquee-pinned-container">
        {/* Centered Section Header */}
        <div className="brand-marquee-header">
          <span className="brand-marquee-tag">
            <span className="bullet-square"></span>
            <span>brand philosophy</span>
          </span>
        </div>

        {/* Top Track - Pure Typography Phrase (First Word at 50vw Center) */}
        <div className="marquee-track-wrapper track-top">
          <div className="marquee-content" ref={topTrackRef}>
            <div className="marquee-group">
              <span className="marquee-text">shaping</span>
              <span className="marquee-text highlight-orange">identity</span>
              <span className="marquee-text">reimagining</span>
              <span className="marquee-text highlight-orange">design</span>
            </div>
          </div>
        </div>

        {/* Bottom Track - Pure Typography Phrase (Last Word at 50vw Center) */}
        <div className="marquee-track-wrapper track-bottom">
          <div className="marquee-content" ref={bottomTrackRef}>
            <div className="marquee-group">
              <span className="marquee-text">crafting</span>
              <span className="marquee-copyright highlight-orange">©brand</span>
              <span className="marquee-text">inventing</span>
              <span className="marquee-text highlight-orange">futures</span>
            </div>
          </div>
        </div>



      </section>
    </div>
  );

}

export default BrandMarquee;
