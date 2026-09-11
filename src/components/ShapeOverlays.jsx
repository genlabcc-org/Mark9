import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ShapeOverlays.css';

const PATH_COMMANDS = {
  hiddenTop: 'M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z',
  sweepDownMid: 'M 0 0 L 100 0 L 100 65 Q 50 115 0 65 Z',
  full: 'M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z',
  retractUpMid: 'M 0 0 L 100 0 L 100 35 Q 50 -15 0 35 Z',
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

    if (prevIsOpenedRef.current === isOpened) {
      if (!isOpened) {
        paths.forEach((p) => p.setAttribute('d', PATH_COMMANDS.hiddenTop));
      } else {
        paths.forEach((p) => p.setAttribute('d', PATH_COMMANDS.full));
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
        const delay = i * 0.08;
        tl.to(
          path,
          {
            attr: { d: PATH_COMMANDS.sweepDownMid },
            duration: 0.35,
            ease: 'power2.in'
          },
          delay
        ).to(
          path,
          {
            attr: { d: PATH_COMMANDS.full },
            duration: 0.35,
            ease: 'power2.out'
          },
          delay + 0.35
        );
      });
    } else {
      // CLOSING: Curved wave paths retract back up to top
      paths.forEach((path, i) => {
        const delay = (paths.length - 1 - i) * 0.08;
        tl.to(
          path,
          {
            attr: { d: PATH_COMMANDS.retractUpMid },
            duration: 0.35,
            ease: 'power2.in'
          },
          delay
        ).to(
          path,
          {
            attr: { d: PATH_COMMANDS.hiddenTop },
            duration: 0.35,
            ease: 'power2.out'
          },
          delay + 0.35
        );
      });
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [isOpened]);

  const fills = [
    'var(--text-dark)',
    'rgba(255, 34, 0, 0.4)',
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
        d={PATH_COMMANDS.hiddenTop}
      />
      <path
        ref={path1Ref}
        className="shape-overlays__path"
        fill={fills[1]}
        d={PATH_COMMANDS.hiddenTop}
      />
      <path
        ref={path2Ref}
        className="shape-overlays__path"
        fill={fills[2]}
        d={PATH_COMMANDS.hiddenTop}
      />
    </svg>
  );
}

export default ShapeOverlays;

