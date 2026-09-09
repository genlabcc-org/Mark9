import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ShapeOverlays.css';

export function ShapeOverlays({ isOpened, onComplete, colors = ["#ff2200", "#090909"] }) {
  const svgRef = useRef(null);
  const pathsRef = useRef([]);
  const tlRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!svgRef.current) return;

    const numPoints = 10;
    const numPaths = colors.length;
    const delayPointsMax = 0.3;
    const delayPerPath = 0.25;
    const pointsDelay = [];
    const allPoints = [];

    // Initialize points
    for (let i = 0; i < numPaths; i++) {
      const points = [];
      allPoints.push(points);
      for (let j = 0; j < numPoints; j++) {
        points.push(isOpened ? 100 : 0);
      }
    }

    const render = () => {
      for (let i = 0; i < numPaths; i++) {
        const path = pathsRef.current[i];
        if (!path) continue;
        const points = allPoints[i];

        let d = "";
        d += `M 0 ${points[0]} C`;

        for (let j = 0; j < numPoints - 1; j++) {
          const p = ((j + 1) / (numPoints - 1)) * 100;
          const cp = p - ((1 / (numPoints - 1)) * 100) / 2;
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
        }

        d += ` V 100 H 0 Z`;
        path.setAttribute("d", d);
      }
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      render();
      if (!isOpened) {
        // Clear paths when closed initially
        for (let i = 0; i < numPaths; i++) {
          if (pathsRef.current[i]) pathsRef.current[i].setAttribute("d", "");
        }
        return;
      }
    }

    const tl = gsap.timeline({
      onUpdate: render,
      onComplete: () => {
        if (!isOpened) {
          // Clear paths when animation closing completes
          for (let i = 0; i < numPaths; i++) {
            if (pathsRef.current[i]) pathsRef.current[i].setAttribute("d", "");
          }
        }
        if (onComplete) onComplete();
      },
      defaults: {
        ease: "power2.inOut",
        duration: 0.75
      }
    });

    tlRef.current = tl;

    for (let i = 0; i < numPoints; i++) {
      pointsDelay[i] = Math.random() * delayPointsMax;
    }

    for (let i = 0; i < numPaths; i++) {
      const points = allPoints[i];
      const pathDelay = delayPerPath * (isOpened ? i : (numPaths - i - 1));
      const targetVal = isOpened ? 0 : 100;

      for (let j = 0; j < numPoints; j++) {
        const delay = pointsDelay[j];
        tl.to(points, {
          [j]: targetVal
        }, delay + pathDelay);
      }
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [isOpened, colors, onComplete]);

  return (
    <svg
      ref={svgRef}
      className={`shape-overlays ${isOpened ? 'active' : ''}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {colors.map((color, index) => (
        <path
          key={index}
          ref={(el) => (pathsRef.current[index] = el)}
          className="shape-overlays__path"
          fill={color}
        />
      ))}
    </svg>
  );
}

export default ShapeOverlays;
