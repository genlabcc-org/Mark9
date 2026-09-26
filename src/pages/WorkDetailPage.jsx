import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './WorkDetailPage.css';

gsap.registerPlugin(ScrollTrigger);

export const WORKS_DATABASE = {
  strategy: {
    id: 'strategy',
    title: 'strategy',
    date: 'july 8, 2024',
    category: 'creative direction & brand strategy',
    client: 'mark9 studio',
    year: '2026',
    services: ['brand positioning', 'market research', 'creative strategy', 'identity direction'],
    duration: '3 months',
    leadQuote: {
      beforeItalic: 'strategy is the architecture behind every enduring brand. we decode market noise into ',
      italicText: 'clear, decisive competitive advantage,',
      afterItalic: ' ensuring every visual move commands cultural resonance.'
    },
    heroImage: '/hero1.jpeg',
    heroAlt: 'strategy - mark9 creative agency',
    overview: 'strategic brand positioning designed to build an unbreakable bridge between company vision and audience perception. we dissect consumer psychology and competitive white-space.',
    challenge: 'in crowded markets, visual beauty alone falls flat without sharp positioning.',
    solution: 'we engineer comprehensive brand roadmaps, value matrices, and tone-of-voice frameworks that guide every design execution.',
    nextProjectId: 'craft'
  },
  craft: {
    id: 'craft',
    title: 'craft',
    date: 'august 14, 2024',
    category: 'design craft & visual systems',
    client: 'mark9 studio',
    year: '2026',
    services: ['visual systems', 'typography design', 'spatial layouts', 'prototyping'],
    duration: '3 months',
    leadQuote: {
      beforeItalic: 'craft is our obsession with the tactile details that elevate design into art. we sculpt ',
      italicText: 'every curve, kerning, and pixel with relentless precision,',
      afterItalic: ' creating experiences that feel effortless yet profound.'
    },
    heroImage: '/hero2.jpg',
    heroAlt: 'craft - mark9 creative agency',
    overview: 'practical design mastery developed through iterative prototyping, material experimentation, and pure visual rigor across print, spatial, and digital mediums.',
    challenge: 'maintaining handcrafted excellence and artistic soul in scalable digital systems.',
    solution: 'a harmonious marriage between artisanal sensibilities and modern computational design systems.',
    nextProjectId: 'execution'
  },
  execution: {
    id: 'execution',
    title: 'execution',
    date: 'september 21, 2024',
    category: 'digital execution & production',
    client: 'mark9 studio',
    year: '2026',
    services: ['full-stack build', 'motion design', 'launch campaigns', 'spatial art'],
    duration: '3 months',
    leadQuote: {
      beforeItalic: 'execution is where visionary ideas transform into living realities. we bridge pure imagination with ',
      italicText: 'seamless technical mastery and flawless velocity,',
      afterItalic: ' delivering products that redefine industry benchmarks.'
    },
    heroImage: '/hero3.png',
    heroAlt: 'execution - mark9 creative agency',
    overview: 'turning conceptual design frameworks into deployed, world-class digital platforms and tangible consumer touchpoints that dominate their categories.',
    challenge: 'delivering zero-latency, high-fidelity digital systems without sacrificing creative integrity.',
    solution: 'full-stack creative engineering with micro-animations, bespoke shaders, and responsive architecture.',
    nextProjectId: 'strategy'
  },
  prada: {
    id: 'prada',
    title: 'prada',
    date: 'july 8, 2024',
    category: 'branding & art direction',
    client: 'prada milano',
    year: '2024',
    services: ['creative direction', 'brand identity', 'spatial design', 'campaign art'],
    duration: '3 months',
    leadQuote: {
      beforeItalic: 'we crafted an unmistakable digital universe for prada, merging high-fashion precision with surrealist visual storytelling. every interaction was designed to evoke ',
      italicText: 'a sense of futuristic curiosity and quiet luxury,',
      afterItalic: ' transcending standard brand aesthetics into a timeless experiential reality.'
    },
    heroImage: '/about-banner.jpg',
    heroAlt: 'prada campaign visual',
    overview: 'an avant-garde exploration at the intersection of haute couture and speculative future aesthetics. the objective was to redefine prada’s digital flagship narrative through minimal brutalist layout structures, sculptural proportions, and hyper-tactile sensory design.',
    challenge: 'how does an iconic heritage luxury house speak to the next generation without losing its timeless sophistication? the challenge was balancing austere elegance with bold, cinematic visuals that stop viewers in their tracks.',
    solution: 'we engineered a monolithic design system paired with bespoke typography and ultra-wide cinematic captures. from curated print campaigns to interactive digital showrooms, the aesthetic identity established an immersive benchmark for luxury retail storytelling.',
    metrics: [
      { label: 'global reach', value: '+4.8m' },
      { label: 'engagement rate', value: '38%' },
      { label: 'design recognition', value: 'awwwards sotd' }
    ],
    gallery: [
      { image: '/hero3.png', alt: 'prada spatial architecture', caption: 'sculptural spatial proportions' },
      { image: '/hero1.jpeg', alt: 'prada campaign model', caption: 'tactile editorial materials' },
      { image: '/project2.png', alt: 'prada digital ui showcase', caption: 'monolithic digital interface' },
      { image: '/ads-night.jpg', alt: 'prada lighting campaign', caption: 'nocturnal ambient lighting' }
    ],
    nextProjectId: 'apollo'
  },
  apollo: {
    id: 'apollo',
    title: 'apollo',
    date: 'august 14, 2024',
    category: 'digital identity & spatial',
    client: 'apollo labs',
    year: '2024',
    services: ['visual identity', 'digital product', '3d graphics', 'design system'],
    duration: '4 months',
    leadQuote: {
      beforeItalic: 'apollo stands as a masterclass in modern digital identity, curating frictionless precision with bold industrial typography. our mission was ensuring ',
      italicText: 'each touchpoint feels relentlessly visionary,',
      afterItalic: ' bridging computational power with exquisite human craft.'
    },
    heroImage: '/project 4.png',
    heroAlt: 'apollo project showcase',
    overview: 'apollo is an iconic project meticulously curated by our agency. designed as an industry-defining interface for aerospace data systems, every screen balances high data density with serene visual hierarchy.',
    challenge: 'aerospace telemetry interfaces are notoriously complex and cluttered. the objective was reducing cognitive friction while retaining every critical telemetry data stream.',
    solution: 'we developed an ultra-clean dark ui language utilizing fractured modular grids, crisp contrast ratios, and micro-animated feedback systems that feel organic yet razor sharp.',
    metrics: [
      { label: 'user efficiency', value: '+62%' },
      { label: 'data accuracy', value: '99.9%' },
      { label: 'industry award', value: 'red dot 2024' }
    ],
    gallery: [
      { image: '/project 4.png', alt: 'apollo display grid', caption: 'telemetry dashboard architecture' },
      { image: '/hero2.jpg', alt: 'apollo visual geometry', caption: 'precision typography & grid' },
      { image: '/project2.png', alt: 'apollo interface screen', caption: 'real-time analytical graphs' },
      { image: '/222.png', alt: 'apollo brand collateral', caption: 'physical brand guidelines' }
    ],
    nextProjectId: 'anika'
  },
  anika: {
    id: 'anika',
    title: 'anika',
    date: 'september 21, 2024',
    category: 'luxury jewellery & packaging',
    client: 'anika haute joaillerie',
    year: '2024',
    services: ['packaging design', 'e-commerce', 'brand book', 'art direction'],
    duration: '2.5 months',
    leadQuote: {
      beforeItalic: 'an embodiment of luxury and timeless elegance, anika weaves heritage artisanal craftsmanship with contemporary minimalism. we sculpted a visual world where ',
      italicText: 'every jewel tells an intimate story of grace,',
      afterItalic: ' enveloped in bespoke tactile packaging.'
    },
    heroImage: '/project1 1.png',
    heroAlt: 'anika jewellery project',
    overview: 'anika haute joaillerie sought an exclusive visual identity that honored centuries of precious gemstone craftsmanship while appealing to a new cohort of discerning modern collectors.',
    challenge: 'bridging traditional gold and diamond craftsmanship with contemporary digital retail experiences without losing the tactile aura of luxury.',
    solution: 'crafted velvet-touch packaging geometry, bespoke gold-foil debossed typography, and an editorial e-commerce platform boasting full-screen macro cinematography.',
    metrics: [
      { label: 'conversion lift', value: '+45%' },
      { label: 'average order value', value: '+80%' },
      { label: 'client retention', value: '92%' }
    ],
    gallery: [
      { image: '/project1 1.png', alt: 'anika brand photography', caption: 'editorial macro photography' },
      { image: '/packaging.png', alt: 'anika bespoke packaging', caption: 'tactile debossed presentation boxes' },
      { image: '/branding.png', alt: 'anika identity system', caption: 'custom typography & monogram' },
      { image: '/anika.png', alt: 'anika lookbook', caption: 'high-jewelry collection catalogue' }
    ],
    nextProjectId: 'faywalk'
  },
  faywalk: {
    id: 'faywalk',
    title: 'faywalk',
    date: 'october 10, 2024',
    category: 'streetwear & campaign',
    client: 'faywalk apparel',
    year: '2024',
    services: ['apparel design', 'motion graphics', 'lookbook direction', 'marketing'],
    duration: '3 months',
    leadQuote: {
      beforeItalic: 'a groundbreaking streetwear project crafted with raw metropolitan kinetic energy. faywalk merges subcultural defiance with architectural silhouettes, establishing ',
      italicText: 'a provocative visual language for urban explorers,',
      afterItalic: ' engineered to leave an indelible impression.'
    },
    heroImage: '/project3.png',
    heroAlt: 'faywalk project',
    overview: 'faywalk is a disruptive urban streetwear collective. our team orchestrated the complete brand inception, physical garment graphics, digital lookbook, and viral launch campaign.',
    challenge: 'standing out in a saturated streetwear ecosystem demands uncompromised authenticity, radical aesthetics, and high-velocity digital engagement.',
    solution: 'we engineered brutalist grid typography, high-contrast monochrome color palettes with electric accents, and interactive web lookbooks with glitch video transitions.',
    metrics: [
      { label: 'sellout velocity', value: '4 mins' },
      { label: 'social reach', value: '+2.1m' },
      { label: 'brand value', value: '$1.4m' }
    ],
    gallery: [
      { image: '/project3.png', alt: 'faywalk capsule collection', caption: 'apparel silhouette design' },
      { image: '/design.jpg', alt: 'faywalk graphic system', caption: 'subcultural emblem prints' },
      { image: '/ads.jpg', alt: 'faywalk billboard campaign', caption: 'metropolitan outdoor media' },
      { image: '/insight1.jpg', alt: 'faywalk studio process', caption: 'raw textile experimentation' }
    ],
    nextProjectId: 'invenza'
  },
  invenza: {
    id: 'invenza',
    title: 'invenza',
    date: 'november 05, 2024',
    category: 'fintech & immersive web',
    client: 'invenza global',
    year: '2024',
    services: ['web architecture', '3d interactive', 'strategy', 'ui/ux design'],
    duration: '3.5 months',
    leadQuote: {
      beforeItalic: 'invenza is a visionary fintech ecosystem crafted by our agency with a harmonious fusion of creativity and computational intelligence. we unified ',
      italicText: 'complex algorithmic liquidity with intuitive elegance,',
      afterItalic: ' giving global investors total command over their capital.'
    },
    heroImage: '/project2.png',
    heroAlt: 'invenza project',
    overview: 'invenza represents next-generation enterprise asset intelligence. we designed their comprehensive platform experience from foundational architecture to interactive 3d web presentation.',
    challenge: 'translating institutional-grade quantitative data into an effortless, aesthetically refined user journey accessible to modern institutional traders.',
    solution: 'engineered a dark-mode spatial platform featuring fluid webgl data charts, dynamic light themes, and instant modular portfolio views.',
    metrics: [
      { label: 'aum onboarded', value: '$850m' },
      { label: 'daily volume', value: '$120m' },
      { label: 'nps score', value: '94/100' }
    ],
    gallery: [
      { image: '/project2.png', alt: 'invenza dashboard showcase', caption: 'spatial asset analytics interface' },
      { image: '/strategy.png', alt: 'invenza system architecture', caption: 'modular design token matrix' },
      { image: '/uiux.jpg', alt: 'invenza mobile experience', caption: 'touch-optimized mobile terminals' },
      { image: '/333.png', alt: 'invenza brand identity', caption: 'corporate collateral & brand kit' }
    ],
    nextProjectId: 'prada'
  }
};

export function WorkDetailPage() {
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const heroImageRef = useRef(null);

  useSplitReveal(pageRef);
  useFooterStackReveal(mainRef, footerRef);

  // Read project ID from URL search param or path
  const searchParams = new URLSearchParams(window.location.search);
  const pathId = window.location.pathname.replace(/^\/works?\//, '').replace(/^\/work-detail\/?/, '');
  const rawId = (searchParams.get('id') || pathId || 'prada').toLowerCase();
  const currentWork = WORKS_DATABASE[rawId] || WORKS_DATABASE['prada'];
  const nextWork = WORKS_DATABASE[currentWork.nextProjectId] || WORKS_DATABASE['prada'];

  // Smooth Parallax for Hero Image
  useEffect(() => {
    if (!heroImageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.08, yPercent: -3 },
        {
          scale: 1,
          yPercent: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: heroImageRef.current.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      );
    }, heroImageRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [currentWork.id]);

  return (
    <div className="work-detail-wrapper" ref={pageRef}>
      <Preloader />
      <Header />

      <main className="work-detail-main main-content-flow" ref={mainRef}>
        {/* Top Header Section: Date Tag & Monolithic Title */}
        <section className="work-detail-hero-header">
          <div className="work-detail-header-container">
            <motion.div
              className="work-detail-date-badge"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>{currentWork.date}</span>
            </motion.div>

            <motion.h1
              className="work-detail-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentWork.title}
            </motion.h1>
          </div>
        </section>

        {/* Cinematic Hero Image */}
        <section className="work-detail-hero-media-section">
          <div className="work-detail-hero-media-container">
            <div className="work-detail-hero-media-wrap">
              <img
                ref={heroImageRef}
                src={currentWork.heroImage}
                alt={currentWork.heroAlt}
                className="work-detail-hero-image"
              />
            </div>
          </div>
        </section>

        {/* Centered Editorial Statement Quote */}
        <section className="work-detail-editorial-quote-section">
          <div className="work-detail-editorial-quote-container">
            <motion.p
              className="work-detail-quote-text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentWork.leadQuote.beforeItalic}
              <em className="work-detail-italic-highlight">
                {currentWork.leadQuote.italicText}
              </em>
              {currentWork.leadQuote.afterItalic}
            </motion.p>
          </div>
        </section>

        {/* Project Meta Information Grid */}
        <section className="work-detail-meta-section">
          <div className="work-detail-meta-container">
            <div className="work-detail-meta-col">
              <span className="work-meta-label">client</span>
              <span className="work-meta-val">{currentWork.client}</span>
            </div>
            <div className="work-detail-meta-col">
              <span className="work-meta-label">year</span>
              <span className="work-meta-val">{currentWork.year}</span>
            </div>
            <div className="work-detail-meta-col">
              <span className="work-meta-label">duration</span>
              <span className="work-meta-val">{currentWork.duration}</span>
            </div>
            <div className="work-detail-meta-col work-detail-meta-services">
              <span className="work-meta-label">services</span>
              <ul className="work-services-list">
                {currentWork.services.map((srv, idx) => (
                  <li key={idx}>{srv}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Narrative Section: Overview & Approach */}
        <section className="work-detail-narrative-section">
          <div className="work-detail-narrative-container">
            <div className="work-narrative-left">
              <div className="work-narrative-tag">
                <span className="bullet-square"></span>
                <span>the vision</span>
              </div>
              <h2 className="work-narrative-heading">
                redefining the standard of craft and digital presence.
              </h2>
            </div>
            <div className="work-narrative-right">
              <p className="work-narrative-para">{currentWork.overview}</p>
              <div className="work-narrative-subgrid">
                <div className="work-subgrid-card">
                  <h3 className="work-subgrid-title">the challenge</h3>
                  <p className="work-subgrid-desc">{currentWork.challenge}</p>
                </div>
                <div className="work-subgrid-card">
                  <h3 className="work-subgrid-title">the solution</h3>
                  <p className="work-subgrid-desc">{currentWork.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default WorkDetailPage;
