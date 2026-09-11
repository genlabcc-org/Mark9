import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Services.css';

const servicesList = [
  {
    id: '(01)',
    title: 'branding',
    description: 'identity, voice, position, story, guidelines.',
    image: '/project2.png'
  },
  {
    id: '(02)',
    title: 'design',
    description: 'social assets, collateral, marketing decks, print.',
    image: '/project3.png'
  },
  {
    id: '(03)',
    title: 'strategy',
    description: 'market positioning, brand direction, launch playbooks.',
    image: '/project5.png'
  },
  {
    id: '(04)',
    title: 'marketing',
    description: 'performance campaigns, organic growth, content systems.',
    image: '/portrait1.jpg'
  },
  {
    id: '(05)',
    title: 'packaging design',
    description: 'unboxing experiences, retail presence, print-ready files.',
    image: '/project2.png'
  },
  {
    id: '(06)',
    title: 'ui/ux',
    description: 'web design, mobile interfaces, digital design systems.',
    image: '/project3.png'
  },
  {
    id: '(07)',
    title: 'ads',
    description: 'high-converting static & video creatives for Meta, Google, & more.',
    image: '/project5.png'
  }
];

export function Services() {
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
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-tag">
          <span className="bullet-square"></span>
          <span>services</span>
        </span>
        <h2 className="services-subheadline">
          everything a brand needs<span className="orange-text">.</span> nothing it doesn't<span className="orange-text">.</span>
        </h2>
      </div>

      <div
        className="services-list-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Smooth Floating Preview Image */}
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
                alt={`MARK9 ${servicesList[hoveredIndex].title} portfolio showcase — ${servicesList[hoveredIndex].description}`}
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
              <div className="service-text-group">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
