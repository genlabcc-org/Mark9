import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import CTA from '../components/CTA';
import useSplitReveal from '../utils/useSplitReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { motion, AnimatePresence } from 'motion/react';
import './WorksPage.css';

gsap.registerPlugin(ScrollTrigger, Flip);

const GALLERY_IMAGES = [
  'https://assets.codepen.io/16327/portrait-pattern-1.jpg',
  'https://assets.codepen.io/16327/portrait-image-12.jpg',
  'https://assets.codepen.io/16327/portrait-image-8.jpg',
  'https://assets.codepen.io/16327/portrait-pattern-2.jpg',
  'https://assets.codepen.io/16327/portrait-image-4.jpg',
  'https://assets.codepen.io/16327/portrait-image-3.jpg',
  'https://assets.codepen.io/16327/portrait-pattern-3.jpg',
  'https://assets.codepen.io/16327/portrait-image-1.jpg'
];

const PROJECTS_LIST = [
  {
    id: '01',
    title: 'typography trends & editorial system',
    category: 'branding',
    client: 'Vogue Lab',
    year: '2026',
    subtitle: 'how modern typography is changing the way we communicate online.',
    image: '/project2.png',
    tags: ['branding', 'editorial', 'typography']
  },
  {
    id: '02',
    title: 'ai-driven generative interface',
    category: 'ai & tech',
    client: 'Synthetix AI',
    year: '2026',
    subtitle: 'transforming complex prompt engineering into fluid visual workflows.',
    image: '/project3.png',
    tags: ['ai & tech', '3d motion', 'ui/ux']
  },
  {
    id: '03',
    title: 'digital finance platform',
    category: 'web apps',
    client: 'Aura Capital',
    year: '2026',
    subtitle: 'reimagining high-stakes financial interfaces for institutional clients.',
    image: '/project5.png',
    tags: ['fintech', 'web app', 'react']
  },
  {
    id: '04',
    title: 'research & education portal',
    category: 'web apps',
    client: 'Global Research Inst.',
    year: '2026',
    subtitle: 'building scalable web infrastructure for global academic networks.',
    image: '/portrait1.jpg',
    tags: ['web dev', 'architecture', 'next.js']
  },
  {
    id: '05',
    title: 'luxury digital flagship store',
    category: 'branding',
    client: 'Maison Noir',
    year: '2025',
    subtitle: 'crafting high-conversion digital flagship experiences for luxury fashion.',
    image: 'https://assets.codepen.io/16327/portrait-image-12.jpg',
    tags: ['luxury', 'e-commerce', 'webgl']
  },
  {
    id: '06',
    title: 'real-time analytics engine',
    category: 'ai & tech',
    client: 'Apex Analytics',
    year: '2025',
    subtitle: 'real-time data visualization engine for high-volume enterprise software.',
    image: 'https://assets.codepen.io/16327/portrait-image-4.jpg',
    tags: ['enterprise', 'data viz', 'dashboard']
  }
];

const CATEGORIES = ['all', 'branding', 'web apps', 'ai & tech'];

export function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const worksPageRef = useRef(null);
  useSplitReveal(worksPageRef);

  // GSAP Flip + ScrollTrigger Bento Gallery Animation (desktop only)
  // NOTE: Disabled on mobile — body{overflow-x:hidden} clips GSAP's position:fixed
  // pin element causing flash+blank. Mobile shows a CSS static grid instead.
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const galleryElement = document.querySelector("#gallery-bento-about");
    if (!galleryElement) return;

    const galleryItems = galleryElement.querySelectorAll(".gallery__item");
    let flipCtx;

    const createTween = () => {
      if (window.innerWidth <= 768) return;
      flipCtx && flipCtx.revert();
      galleryElement.classList.remove("gallery--final");

      flipCtx = gsap.context(() => {
        // Temporarily add final class to capture state
        galleryElement.classList.add("gallery--final");
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove("gallery--final");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)"
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: galleryElement.parentNode,
            anticipatePin: 1
          }
        });

        tl.add(flip);
      });
    };

    const timer = setTimeout(() => {
      createTween();
      ScrollTrigger.refresh();
    }, 100);

    window.addEventListener("resize", createTween);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", createTween);
      flipCtx && flipCtx.revert();
    };
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeFilter);

  return (
    <div className="about-page-wrapper" ref={worksPageRef}>
      <Preloader />

      {/* Header */}
      <div className="about-header-wrap">
        <Header />
      </div>

      {/* Main Content */}
      <main className="about-main">
        {/* Section 1: Hero Intro Section */}
        <section className="about-hero-section">
          <div className="about-hero-header">
            <span className="about-hero-tag">(02) selected works & projects</span>
            <h1 className="about-hero-title">
              <span className="split-line-wrap">
                <span className="split-line-content">featured work, digital products &amp; brand archives.</span>
              </span>
            </h1>
          </div>
          <div className="about-hero-meta">
            <p className="about-hero-desc">
              a showcase of selected digital experiences, brand identities, and high-performance interactive applications built for ambition-driven clients worldwide.
            </p>
            <div className="about-hero-stats">
              <div className="stat-item">
                <span className="stat-label">total works</span>
                <span className="stat-value">40+ projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">industries</span>
                <span className="stat-value">tech, ai & luxury</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">deliverables</span>
                <span className="stat-value">design & code</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Bento Gallery Section */}
        <section className="bento-gallery-section">
          <div className="gallery-wrap">
            <div className="gallery gallery--bento gallery--switch" id="gallery-bento-about">
              {GALLERY_IMAGES.map((imgSrc, index) => (
                <div key={index} className="gallery__item">
                  <img
                    src={imgSrc}
                    alt={`MARK9 digital project showcase image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Selected Projects Cards Section */}
        <section className="works-projects-section">
          <div className="works-projects-header">
            <div className="works-projects-title-wrap">
              <span className="section-label">— featured case studies</span>
              <h2 className="works-projects-heading">
                <span className="split-line-wrap">
                  <span className="split-line-content">selected projects</span>
                </span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="works-filter-tabs">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid (Same as Home page card design) */}
          <div className="works-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="work-card"
                >
                  {/* Image Container */}
                  <div className="work-image-wrapper">
                    <img
                      src={project.image}
                      alt={`MARK9 ${project.category} case study — ${project.title}: ${project.subtitle}`}
                      className="work-img"
                    />
                  </div>

                  {/* Text Information Below Image */}
                  <div className="work-info-wrapper">
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-subtitle">{project.subtitle}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Studio Philosophy & Narrative Section */}
        <section className="about-content-section">
          <div className="content-container">
            <div className="content-left">
              <span className="section-label">— our capabilities</span>
              <h2 className="content-heading">
                crafting digital benchmarks across design, technology & motion.
              </h2>
            </div>

            <div className="content-right">
              <p className="content-text">
                every project is engineered with relentless detail — balancing expressive visual design with robust code architectures that drive measurable client impact.
              </p>

              <div className="principles-grid">
                <div className="principle-item">
                  <span className="principle-num">01</span>
                  <h3 className="principle-title">brand & identity</h3>
                  <p className="principle-desc">
                    shaping memorable brand identities, design systems, and visual languages that stand out in crowded markets.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">02</span>
                  <h3 className="principle-title">web & digital products</h3>
                  <p className="principle-desc">
                    engineering high-velocity web apps, interactive platforms, and web experiences tuned for performance.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">03</span>
                  <h3 className="principle-title">motion & 3d design</h3>
                  <p className="principle-desc">
                    incorporating fluid micro-interactions, 3d visual assets, and immersive motion to captivate users.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">04</span>
                  <h3 className="principle-title">ai & future tech</h3>
                  <p className="principle-desc">
                    integrating intelligent interfaces, generative AI workflows, and modern web stack into core user flows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section (Same as Home Page) */}
      <CTA />

      <Footer />
    </div>
  );
}

export default WorksPage;
