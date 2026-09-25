import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import useSplitReveal from '../utils/useSplitReveal';
import './Services.css';

const servicesList = [
  {
    id: '01',
    title: 'branding',
    description: "strategy, positioning and a personality your audience won't forget.",
    image: '/branding.png'
  },
  {
    id: '02',
    title: 'design',
    description: "visuals that don't just look good — they say something",
    image: '/design.jpg'
  },
  {
    id: '03',
    title: 'strategy',
    description: "the thinking behind every move, so nothing is left to guesswork.",
    image: '/strategy.png'
  },
  {
    id: '04',
    title: 'marketing',
    description: "campaigns built to be seen, shared, and remembered",
    image: '/marketing.jpg'
  },
  {
    id: '05',
    title: 'packaging design',
    description: "packs that earn a second look and a place in the cart",
    image: '/packaging.png'
  },
  {
    id: '06',
    title: 'ui/ux',
    description: "digital experiences people actually enjoy using.",
    image: '/uiux.jpg'
  },
  {
    id: '07',
    title: 'ads',
    description: "creative that stops the scroll and starts a conversation.",
    image: '/ads.jpg'
  }
];

export function Services() {
  const servicesRef = useRef(null);
  useSplitReveal(servicesRef);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="services-section" id="services" ref={servicesRef}>
      <div className="services-header">
        <h2 className="services-headline">
          our services<sup>®</sup>
        </h2>
      </div>

      <div
        className="services-list-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Floating Preview Image */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="floating-service-preview"
              initial={{ opacity: 0, scale: 0.75, y: 10 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 25,
                y: mousePos.y - 70
              }}
              exit={{ opacity: 0, scale: 0.75, y: 10 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.4
              }}
            >
              <img
                src={servicesList[hoveredIndex].image}
                alt={`MARK9 ${servicesList[hoveredIndex].title}`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`service-row ${hoveredIndex === index ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className="service-content">
              <span className="service-num">{service.id}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
