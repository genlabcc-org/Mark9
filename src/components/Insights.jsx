import React, { useRef } from 'react';
import { Monitor, Target, Layers } from 'lucide-react';
import useSplitReveal from '../utils/useSplitReveal';
import './Insights.css';

export function Insights() {
  const insightsRef = useRef(null);
  useSplitReveal(insightsRef);

  const insightsData = [
    {
      id: 1,
      category: 'technology selection',
      icon: Monitor,
      date: 'march 4, 2026',
      title: 'your crm is not the problem. your process is.',
      image: '/insight1.jpg',
      link: '#'
    },
    {
      id: 2,
      category: 'implementation',
      icon: Target,
      date: 'march 3, 2026',
      title: '5 growth levers most companies ignore until it is too late.',
      image: '/project3.png',
      link: '#'
    },
    {
      id: 3,
      category: 'design systems',
      icon: Layers,
      date: 'february 28, 2026',
      title: 'building scalable ui components for high-velocity teams.',
      image: '/project5.png',
      link: '#'
    }
  ];

  return (
    <section className="insights-section" id="insights" ref={insightsRef}>
      <div className="insights-container">
        {/* Left Column: Heading, Description & Button */}
        <div className="insights-left-col">
          <div className="insights-left-top">
            <div className="insights-tag">
              <span className="bullet-square"></span>
              <span>insights</span>
            </div>

            <h2 className="insights-title">
              <span className="split-line-wrap">
                <span className="split-line-content">insights<span className="dot-red">.</span></span>
              </span>
            </h2>

            <p className="insights-desc">
              lessons, frameworks, and honest takes on what it actually takes to grow.
            </p>
          </div>

          {/* <div className="insights-left-bottom">
            <a href="#insights" className="insights-view-all-btn">
              <span>View All</span>
              <span className="btn-dot">●</span>
            </a>
          </div> */}
        </div>

        {/* Right Column: Cards Grid */}
        <div className="insights-cards-grid">
          {insightsData.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className="insight-card"
              >
                {/* Image & Gradient Overlay */}
                <div className="card-image-wrapper">
                  <img
                    src={item.image}
                    alt={`MARK9 insight article illustration — ${item.title}`}
                    className="card-img"
                  />
                  <div className="card-overlay-gradient"></div>
                </div>

                {/* Top Floating Glassmorphic Category Badge */}
                <div className="card-category-badge">
                  <IconComponent className="badge-icon" size={14} />
                  <span>{item.category}</span>
                </div>

                {/* Bottom Content Inside Card */}
                <div className="card-bottom-content">
                  <span className="card-date">{item.date}</span>
                  <h3 className="card-headline">{item.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Insights;
