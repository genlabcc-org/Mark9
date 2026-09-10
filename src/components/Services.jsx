import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Services.css';

const servicesList = [
  { id: '(01)', title: 'branding', image: '/project2.png' },
  { id: '(02)', title: 'ux/ui design', image: '/project3.png' },
  { id: '(03)', title: 'web & development', image: '/project5.png' },
  { id: '(04)', title: 'design school', image: '/portrait1.jpg' }
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
          <span>our services</span>
        </span>
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
              <img src={servicesList[hoveredIndex].image} alt="Service Preview" />
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
              <h2 className="service-title">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
