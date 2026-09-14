import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import CTA from '../components/CTA';
import useSplitReveal from '../utils/useSplitReveal';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './AboutPage.css';

gsap.registerPlugin(Draggable);

const CAROUSEL_IMAGES = [
  { title: 'vogue lab editorial', src: '/project3.png' },
  { title: 'synthetix ai motion', src: '/project2.png' },
  { title: 'aura digital platform', src: '/project3.png' },
  { title: 'mark9 studio identity', src: '/insight1.jpg' },
  { title: 'apex analytics dashboard', src: '/project5.png' },
  { title: 'vogue lab editorial', src: '/project2.png' },
  { title: 'synthetix ai motion', src: '/project3.png' },
  { title: 'mark9 studio identity', src: '/portrait1.jpg' },
  { title: 'apex analytics dashboard', src: '/project5.png' },
  { title: 'vogue lab editorial', src: '/project2.png' },
  { title: 'mark9 studio identity', src: '/insight1.jpg' },
  { title: 'aura digital platform', src: '/project3.png' },
  { title: 'vogue lab editorial', src: '/portrait1.jpg' },
  { title: 'apex analytics dashboard', src: '/project5.png' }
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'discovery & strategy',
    desc: 'we dive deep into your brand identity, market positioning, target audience, and business goals to map out a clear creative blueprint.'
  },
  {
    num: '02',
    title: 'brand architecture',
    desc: 'we craft scalable visual systems, typography rules, color palettes, and motion guidelines that define your unique brand presence.'
  },
  {
    num: '03',
    title: 'digital experience & ui',
    desc: 'we design high-converting, fluid digital products and websites engineered for speed, engagement, and seamless user experience.'
  },
  {
    num: '04',
    title: 'development & scale',
    desc: 'we bring designs to life with clean, modular code, GSAP micro-animations, fast load times, and continuous optimization.'
  }
];

const VALUES_LIST = [
  {
    title: 'uncompromising quality',
    desc: 'every detail matters. we don’t do cookie-cutter templates or rushed work. we build digital products engineered to stand out.'
  },
  {
    title: 'human-centric design',
    desc: 'software should respect human attention. we balance bold aesthetic impact with functional clarity and intuitive usability.'
  },
  {
    title: 'velocity & precision',
    desc: 'we ship fast without missing a beat. efficient workflows, transparent communication, and rapid iteration keep projects on track.'
  },
  {
    title: 'collaborative craft',
    desc: 'we operate as an extension of your team, aligning strategic vision with creative execution every step of the journey.'
  }
];

export function AboutPage() {
  const aboutPageRef = useRef(null);
  const galleryRef = useRef(null);
  const cardsListRef = useRef(null);
  const dragProxyRef = useRef(null);

  useSplitReveal(aboutPageRef);

  // GSAP 3D Seamless Loop Card Gallery Animation (Button & Drag interactive, no scroll-pinning)
  useEffect(() => {
    if (!galleryRef.current || !cardsListRef.current) return;

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(cardsListRef.current.querySelectorAll('li'));
      if (!cards.length) return;

      gsap.set(cards, { xPercent: 420, opacity: 0, scale: 0.5 });

      const spacing = 0.13;
      const snapTime = gsap.utils.snap(spacing);

      const animateFunc = (element) => {
        const tl = gsap.timeline();
        tl.fromTo(
          element,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: 'power1.in', immediateRender: false }
        ).fromTo(
          element,
          { xPercent: 420 },
          { xPercent: -420, duration: 1, ease: 'none', immediateRender: false },
          0
        );
        return tl;
      };

      const buildSeamlessLoop = (items, spacing, animateFunc) => {
        let overlap = Math.ceil(1 / spacing);
        let startTime = items.length * spacing + 0.5;
        let loopTime = (items.length + overlap) * spacing + 1;
        let rawSequence = gsap.timeline({ paused: true });
        let seamlessLoop = gsap.timeline({
          paused: true,
          repeat: -1,
          onRepeat() {
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          }
        });
        let l = items.length + overlap * 2;
        let time, i, index;

        for (i = 0; i < l; i++) {
          index = i % items.length;
          time = i * spacing;
          rawSequence.add(animateFunc(items[index]), time);
          i <= items.length && seamlessLoop.add('label' + i, time);
        }

        rawSequence.time(startTime);
        seamlessLoop
          .to(rawSequence, {
            time: loopTime,
            duration: loopTime - startTime,
            ease: 'none'
          })
          .fromTo(
            rawSequence,
            { time: overlap * spacing + 1 },
            {
              time: startTime,
              duration: startTime - (overlap * spacing + 1),
              immediateRender: false,
              ease: 'none'
            }
          );
        return seamlessLoop;
      };

      const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
      const playhead = { offset: 0 };
      const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

      let currentOffset = 0;
      let autoPlayTween = null;

      const startAutoPlay = () => {
        if (autoPlayTween) autoPlayTween.kill();
        autoPlayTween = gsap.to(playhead, {
          offset: `+=${seamlessLoop.duration()}`,
          duration: 32,
          ease: 'none',
          repeat: -1,
          onUpdate() {
            currentOffset = playhead.offset;
            seamlessLoop.time(wrapTime(playhead.offset));
          }
        });
      };

      const scrubTo = (targetOffset) => {
        if (autoPlayTween) autoPlayTween.pause();

        gsap.to(playhead, {
          offset: targetOffset,
          duration: 0.8,
          ease: 'power2.out',
          onUpdate() {
            currentOffset = playhead.offset;
            seamlessLoop.time(wrapTime(playhead.offset));
          },
          onComplete() {
            startAutoPlay();
          }
        });
      };

      // Start continuous smooth auto-sliding
      startAutoPlay();

      const nextBtn = galleryRef.current.querySelector('.next');
      const prevBtn = galleryRef.current.querySelector('.prev');

      const handleNext = () => {
        currentOffset = snapTime(currentOffset + spacing);
        scrubTo(currentOffset);
      };

      const handlePrev = () => {
        currentOffset = snapTime(currentOffset - spacing);
        scrubTo(currentOffset);
      };

      if (nextBtn) nextBtn.addEventListener('click', handleNext);
      if (prevBtn) prevBtn.addEventListener('click', handlePrev);

      if (dragProxyRef.current) {
        Draggable.create(dragProxyRef.current, {
          type: 'x',
          trigger: cardsListRef.current,
          onPress() {
            if (autoPlayTween) autoPlayTween.pause();
            this.startOffset = currentOffset;
          },
          onDrag() {
            currentOffset = this.startOffset + (this.startX - this.x) * 0.001;
            seamlessLoop.time(wrapTime(currentOffset));
            playhead.offset = currentOffset;
          },
          onDragEnd() {
            currentOffset = snapTime(currentOffset);
            scrubTo(currentOffset);
          }
        });
      }

      return () => {
        if (autoPlayTween) autoPlayTween.kill();
        if (nextBtn) nextBtn.removeEventListener('click', handleNext);
        if (prevBtn) prevBtn.removeEventListener('click', handlePrev);
      };
    }, aboutPageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page-wrapper" ref={aboutPageRef}>
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
            <span className="section-tag">
              <span className="bullet-square"></span>
              <span>about mark9 studio</span>
            </span>
            <h1 className="about-hero-title">
              <span className="split-line-wrap">
                <span className="split-line-content">we craft digital experiences that define brands &amp; move people<span className="orange-text">.</span></span>
              </span>
            </h1>
          </div>
          <div className="about-hero-meta">
            <p className="about-hero-desc">
              mark9 studio is an independent branding, product design, and interactive development lab. we partner with forward-thinking teams to turn complex ideas into refined digital realities.
            </p>
            <div className="about-hero-stats">
              <div className="stat-item">
                <span className="stat-label">founded</span>
                <span className="stat-value">2024<span className="orange-text">.</span></span>
              </div>
              <div className="stat-item">
                <span className="stat-label">location</span>
                <span className="stat-value">global lab<span className="orange-text">.</span></span>
              </div>
              <div className="stat-item">
                <span className="stat-label">discipline</span>
                <span className="stat-value">design &amp; tech<span className="orange-text">.</span></span>
              </div>
              <div className="stat-item">
                <span className="stat-label">core focus</span>
                <span className="stat-value">brand &amp; web<span className="orange-text">.</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: GSAP 3D Cards Showcase Carousel Section (Standalone, button & drag control) */}
        <section className="cards-gallery-section">
          <div className="cards-gallery-header">
            <span className="section-tag section-tag-dark">
              <span className="bullet-square"></span>
              <span>inside mark9 studio</span>
            </span>
            <h2 className="cards-gallery-title">
              where strategy, design &amp; craft converge<span className="orange-text">.</span>
            </h2>
          </div>

          <div className="cards-gallery-wrapper" ref={galleryRef}>
            <ul className="cards" ref={cardsListRef}>
              {CAROUSEL_IMAGES.map((item, idx) => (
                <li key={idx} style={{ backgroundImage: `url(${item.src})` }}>
                  <div className="card-caption-overlay">
                    <span className="card-caption-title">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="actions">
              <button className="prev" aria-label="Previous card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="next" aria-label="Next card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <div className="cards-drag-proxy" ref={dragProxyRef}></div>
          </div>
        </section>

        {/* Section 3: Studio Philosophy & Narrative Section */}
        <section className="about-content-section">
          <div className="content-container">
            <div className="content-left">
              <span className="section-tag">
                <span className="bullet-square"></span>
                <span>our philosophy</span>
              </span>
              <h2 className="content-heading">
                <span className="split-line-wrap">
                  <span className="split-line-content">design isn't just how things look —</span>
                </span>
                <span className="split-line-wrap">
                  <span className="split-line-content">it's how software respects human attention<span className="orange-text">.</span></span>
                </span>
              </h2>
            </div>

            <div className="content-right">
              <p className="content-text">
                we believe the best digital products operate at the intersection of aesthetic clarity, structural speed, and emotional engagement.
                whether we are crafting a bespoke visual identity or engineering high-velocity ui components, our work is built to endure.
              </p>

              <div className="principles-grid">
                <div className="principle-item">
                  <span className="principle-num">01<span className="orange-text">.</span></span>
                  <h3 className="principle-title">strategy &amp; clarity</h3>
                  <p className="principle-desc">
                    we distill complex business challenges into clear, actionable product architectures.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">02<span className="orange-text">.</span></span>
                  <h3 className="principle-title">craft &amp; motion</h3>
                  <p className="principle-desc">
                    micro-interactions and fluid motion that bring character and responsiveness to every screen.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">03<span className="orange-text">.</span></span>
                  <h3 className="principle-title">engineering excellence</h3>
                  <p className="principle-desc">
                    zero-bloat, high-performance code engineered for 100 core web vitals and seamless scaling.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">04<span className="orange-text">.</span></span>
                  <h3 className="principle-title">long-term support</h3>
                  <p className="principle-desc">
                    continuous design iteration and performance tuning as your company expands.
                  </p>
                </div>
              </div>

              <p className="philosophy-bottom-desc">
                by bridging strategic positioning with interactive design craft, we empower brands to captivate audiences and define digital standards<span className="orange-text">.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Workflow Process Section */}
        <section className="about-process-section">
          <div className="process-header">
            <span className="section-tag">
              <span className="bullet-square"></span>
              <span>how we work</span>
            </span>
            <h2 className="process-title">our 4-step creative process<span className="orange-text">.</span></h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div className="process-card" key={step.num}>
                <span className="process-num">{step.num}<span className="orange-text">.</span></span>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Core Values Section */}
        <section className="about-values-section">
          <div className="values-header">
            <span className="section-tag">
              <span className="bullet-square"></span>
              <span>core values</span>
            </span>
            <h2 className="values-title">built on conviction &amp; craft<span className="orange-text">.</span></h2>
          </div>
          <div className="values-grid">
            {VALUES_LIST.map((val, idx) => (
              <div className="value-card" key={idx}>
                <h3 className="value-card-title">{val.title}<span className="orange-text">.</span></h3>
                <p className="value-card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
