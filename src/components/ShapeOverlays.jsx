import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ShapeOverlays.css';

const PATH_COMMANDS_DESKTOP = {
  hiddenTop: 'M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z',
  sweepDownMid: 'M 0 0 L 100 0 L 100 65 Q 50 115 0 65 Z',
  full: 'M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z',
  retractUpMid: 'M 0 0 L 100 0 L 100 35 Q 50 -15 0 35 Z',
};

const PATH_COMMANDS_MOBILE = {
  hiddenTop: 'M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z',
  sweepDownMid: 'M 0 0 L 100 0 L 100 55 Q 50 95 0 55 Z',
  full: 'M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z',
  retractUpMid: 'M 0 0 L 100 0 L 100 30 Q 50 -10 0 30 Z',
};

export function ShapeOverlays({ isOpened, onComplete, color = "var(--accent-red)" }) {
  const path0Ref = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const tlRef = useRef(null);
  const prevIsOpenedRef = useRef(isOpened);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const paths = [path0Ref.current, path1Ref.current, path2Ref.current].filter(Boolean);
    if (paths.length === 0) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const pathsCmds = isMobile ? PATH_COMMANDS_MOBILE : PATH_COMMANDS_DESKTOP;
    const stepDuration = isMobile ? 0.28 : 0.35;
    const staggerDelay = isMobile ? 0.06 : 0.08;

    if (prevIsOpenedRef.current === isOpened) {
      if (!isOpened) {
        paths.forEach((p) => p.setAttribute('d', pathsCmds.hiddenTop));
      } else {
        paths.forEach((p) => p.setAttribute('d', pathsCmds.full));
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

    if (isOpened) {
      // OPENING: Curved wave paths sweep down to fill screen
      paths.forEach((path, i) => {
        const delay = i * staggerDelay;
        tl.to(
          path,
          {
            attr: { d: pathsCmds.sweepDownMid },
            duration: stepDuration,
            ease: 'power2.in'
          },
          delay
        ).to(
          path,
          {
            attr: { d: pathsCmds.full },
            duration: stepDuration,
            ease: 'power2.out'
          },
          delay + stepDuration
        );
      });
    } else {
      // CLOSING: Curved wave paths retract back up to top
      paths.forEach((path, i) => {
        const delay = (paths.length - 1 - i) * staggerDelay;
        tl.to(
          path,
          {
            attr: { d: pathsCmds.retractUpMid },
            duration: stepDuration,
            ease: 'power2.in'
          },
          delay
        ).to(
          path,
          {
            attr: { d: pathsCmds.hiddenTop },
            duration: stepDuration,
            ease: 'power2.out'
          },
          delay + stepDuration
        );
      });
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [isOpened]);

  const fills = [
    '#161616',
    'rgba(255, 34, 0, 0.45)',
    color
  ];

  return (
    <svg
      className={`shape-overlays ${isOpened ? 'active' : ''}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        ref={path0Ref}
        className="shape-overlays__path"
        fill={fills[0]}
        d={PATH_COMMANDS_DESKTOP.hiddenTop}
      />
      <path
        ref={path1Ref}
        className="shape-overlays__path"
        fill={fills[1]}
        d={PATH_COMMANDS_DESKTOP.hiddenTop}
      />
      <path
        ref={path2Ref}
        className="shape-overlays__path"
        fill={fills[2]}
        d={PATH_COMMANDS_DESKTOP.hiddenTop}
      />
    </svg>
  );
}

export default ShapeOverlays;

