import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './ShapeOverlays.css';

export function ShapeOverlays({ isOpened, onComplete, color = "var(--accent-red)" }) {
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const prevIsOpenedRef = useRef(isOpened);
  const onCompleteRef = useRef(onComplete);

  const [gridDimensions, setGridDimensions] = useState(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile ? { rows: 10, cols: 6 } : { rows: 6, cols: 10 };
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const nextDims = isMobile ? { rows: 10, cols: 6 } : { rows: 6, cols: 10 };
      setGridDimensions((prev) => (prev.rows !== nextDims.rows || prev.cols !== nextDims.cols ? nextDims : prev));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!containerRef.current) return;
    const boxes = containerRef.current.querySelectorAll('.pixel-overlay-box');

    // Prevent double execution on initial render if closed, or if isOpened hasn't changed
    if (prevIsOpenedRef.current === isOpened) {
      if (!isOpened) {
        gsap.set(boxes, { scale: 0, opacity: 0 });
      }
      return;
    }
    prevIsOpenedRef.current = isOpened;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        if (onCompleteRef.current) onCompleteRef.current();
      }
    });
    tlRef.current = tl;

    const { rows, cols } = gridDimensions;

    if (isOpened) {
      // OPENING: Pixel boxes assemble & grow to cover viewport (slower animation)
      gsap.set(boxes, { scale: 0, opacity: 0, borderRadius: '0px' });
      tl.to(boxes, {
        scale: 1.03,
        opacity: 1,
        borderRadius: '0px',
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          grid: [rows, cols],
          from: 'random',
          amount: 0.7
        }
      });
    } else {
      // CLOSING: Pixel boxes shrink & dissolve away (slower animation)
      gsap.set(boxes, { scale: 1, opacity: 1, borderRadius: '0px' });
      tl.to(boxes, {
        scale: 0,
        opacity: 0,
        borderRadius: '0px',
        duration: 0.6,
        ease: 'power2.inOut',
        stagger: {
          grid: [rows, cols],
          from: 'random',
          amount: 0.7
        }
      });
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [isOpened, gridDimensions]);

  const totalBoxes = gridDimensions.rows * gridDimensions.cols;

  return (
    <div
      ref={containerRef}
      className={`shape-overlays-pixel ${isOpened ? 'active' : ''}`}
      style={{
        gridTemplateColumns: `repeat(${gridDimensions.cols}, 1fr)`,
        gridTemplateRows: `repeat(${gridDimensions.rows}, 1fr)`
      }}
    >
      {Array.from({ length: totalBoxes }).map((_, index) => (
        <div
          key={index}
          className="pixel-overlay-box"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default ShapeOverlays;
