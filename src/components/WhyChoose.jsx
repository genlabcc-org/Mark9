import React from 'react';
import { motion } from 'motion/react';
import { Target, Layers, Cpu, Rocket } from 'lucide-react';
import './WhyChoose.css';

const WHY_CHOOSE_ITEMS = [
  {
    id: '01',
    title: 'Strategy &\nResearch',
    description:
      'We begin by shaping tailored strategies and performing in-depth research to reveal critical insights. This creates a solid roadmap for impactful, measurable outcomes.',
    icon: <Target size={46} strokeWidth={1.5} />
  },
  {
    id: '02',
    title: 'Design &\nPrototype',
    description:
      'We transform ideas into engaging designs and functional prototypes that bring your vision to life. This approach ensures smooth collaboration and early validation.',
    icon: <Layers size={46} strokeWidth={1.5} />
  },
  {
    id: '03',
    title: 'Build, Test &\nOptimize',
    description:
      'We craft reliable solutions, perform thorough testing, and fine-tune for top performance. The result is efficient, high-impact outcomes that drive long-term success.',
    icon: <Cpu size={46} strokeWidth={1.5} />
  },
  {
    id: '04',
    title: 'Launch &\nSupport',
    description:
      'We launch with precision and provide ongoing support to help your product grow. By thorough understanding of your goals and users, we ensure speedy and lasting results.',
    icon: <Rocket size={46} strokeWidth={1.5} />
  }
];


export function WhyChoose() {
  return (
    <section className="why-choose-section" id="why-choose">
      {/* Centered Section Header */}
      <div className="why-choose-header">
        <span className="why-choose-tag">
          <span className="bullet-square"></span>
          <span>(03) why choose mark9</span>
        </span>
      </div>

      <div className="why-choose-container">
        {/* Main Headline */}
        <div className="why-choose-headline-wrapper">
          <h2 className="why-choose-headline">Why Mark9<span className="dot-red">.</span></h2>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="why-choose-grid">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="why-choose-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="why-choose-card-header">
                <div className="why-choose-icon-wrapper">{item.icon}</div>
                <h3 className="why-choose-card-title">
                  {item.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
              <p className="why-choose-card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



export default WhyChoose;
