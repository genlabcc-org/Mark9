import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'motion/react';
import ShapeOverlays from './ShapeOverlays';
import './Preloader.css';

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [pixelExit, setPixelExit] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.0,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (latest) => {
        setProgress(Math.round(latest));
      },
      onComplete: () => {
        setPixelExit(true);
        setTimeout(() => {
          setIsFinished(true);
          setPixelExit(false);
          if (onComplete) onComplete();
        }, 450);
      },
    });

    return () => controls.stop();
  }, [onComplete]);

  return (
    <>
      <ShapeOverlays 
        isOpened={pixelExit} 
        color="#ff2200" 
      />

      <AnimatePresence>
        {!isFinished && (
          <motion.div
            className="preloader-overlay"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1 }
            }}
          >
            {/* Center SVG Text Filling Logo */}
            <div className="preloader-center">
              <motion.svg
                className="filling-svg"
                viewBox="0 0 600 120"
                initial={{ scale: 0.92, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <defs>
                  <linearGradient id="textLiquidFill" x1="0" y1="1" x2="0" y2="0">
                    <stop offset={`${progress}%`} stopColor="var(--accent-red)" />
                    <stop offset={`${progress}%`} stopColor="#222222" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="central"
                  textAnchor="middle"
                  fill="url(#textLiquidFill)"
                  className="svg-monogram-text"
                >
                  mark-9
                </text>
              </motion.svg>
            </div>

            {/* Bottom Footer Bar */}
            <div className="preloader-bottom-bar">
              <motion.div
                className="preloader-meta-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="bullet-square"></span>
                <span>mark9 studio — design school</span>
              </motion.div>

              <motion.div
                className="preloader-counter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="counter-num">{progress}</span>
                <span className="counter-symbol">%</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Preloader;
