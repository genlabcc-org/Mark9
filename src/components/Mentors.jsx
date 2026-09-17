import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSplitReveal from '../utils/useSplitReveal';
import './Mentors.css';

gsap.registerPlugin(ScrollTrigger);

const MENTORS_LIST = [
  {
    id: '01',
    name: 'lucas sullivan',
    role: 'ux designer',
    image: '/team1.jpg',
    col: 1, // Row 1, Col 1
  },
  {
    id: '02',
    name: 'lily mitchell',
    role: 'cto',
    image: '/team2.jpg',
    col: 3, // Row 1, Col 3
  },
  {
    id: '03',
    name: 'michael carter',
    role: 'cfo',
    image: '/team3.jpg',
    col: 4, // Row 1, Col 4
  },
  {
    id: '04',
    name: 'alex patel',
    role: 'lead developer',
    image: '/team4.jpg',
    col: 1, // Row 2, Col 1
  },
  {
    id: '05',
    name: 'sarah mckenzie',
    role: 'product manager',
    image: '/team5.jpg',
    col: 2, // Row 2, Col 2
  },
  {
    id: '06',
    name: 'daniel thompson',
    role: 'coo',
    image: '/team6.jpg',
    col: 4, // Row 2, Col 4
  },
  {
    id: '07',
    name: 'david ramirez',
    role: 'ceo',
    image: '/team7.jpg',
    col: 5, // Row 2, Col 5
  }
];

export function Mentors() {
  const mentorsRef = useRef(null);
  useSplitReveal(mentorsRef);

  // Ultra-Smooth GSAP Image Parallax for Mentors Cards
  useEffect(() => {
    if (!mentorsRef.current) return;

    const ctx = gsap.context(() => {
      const wraps = mentorsRef.current.querySelectorAll('.mentor-image-wrap');
      wraps.forEach((wrap, index) => {
        const img = wrap.querySelector('.mentor-img');
        if (!img) return;

        // Consistent parallax direction across all team cards
        const startY = -8;
        const endY = 8;

        gsap.fromTo(
          img,
          {
            yPercent: startY,
            scale: 1.18,
            force3D: true,
            transformOrigin: '50% 50%'
          },
          {
            yPercent: endY,
            ease: 'none',
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }, mentorsRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section className="mentors-section" id="mentors" ref={mentorsRef}>
      {/* Top Header Row with Red/Orange Accent Bullet Dot & Horizontal Line */}
      <div className="mentors-top-header">
        <span className="mentors-header-label">
          <span className="bullet-square"></span>
          <span>our team</span>
        </span>
        <div className="mentors-header-line"></div>
      </div>

      <div className="mentors-container">
        {/* Mentors Cards Grid in 5-Column Staggered Offset Layout */}
        <div className="mentors-stagger-grid">
          {MENTORS_LIST.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              className={`mentor-card mentor-col-${mentor.col}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="mentor-image-wrap">
                <img src={mentor.image} alt={mentor.name} className="mentor-img" />
              </div>
              <div className="mentor-info">
                <h3 className="mentor-name">{mentor.name}</h3>
                <span className="mentor-role">{mentor.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mentors;
