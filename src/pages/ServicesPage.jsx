import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import useSplitReveal from '../utils/useSplitReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesPage.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: '01',
    category: 'branding & identity',
    description: 'from colors and typography to tone and style, every detail works together to build recognition, trust, and connection. we craft cohesive brand identities that make your brand impossible to ignore.',
    deliverables: [
      'logo design & brand mark',
      'creative direction',
      'brand positioning & voice',
      'brand guidelines & brandbook',
      'brand architecture & identity design'
    ],
    images: [
      { src: '/project2.png', alt: 'mark9 branding identity showcase 1' },
      { src: '/project3.png', alt: 'mark9 branding identity showcase 2' },
      { src: '/project5.png', alt: 'mark9 branding identity showcase 3' }
    ]
  },
  {
    id: '02',
    category: 'graphic & collateral design',
    description: 'high-impact visual communication for every touchpoint. we design social assets, marketing collateral, pitch decks, print media, and physical collateral that elevate your brand presence.',
    deliverables: [
      'social media assets & templates',
      'marketing & sales pitch decks',
      'print & editorial layouts',
      'physical brand collateral',
      'event & exhibition graphics'
    ],
    images: [
      { src: '/project3.png', alt: 'mark9 collateral design layout 1' },
      { src: '/portrait1.jpg', alt: 'mark9 editorial design layout 2' },
      { src: '/insight1.jpg', alt: 'mark9 brand graphics layout 3' }
    ]
  },
  {
    id: '03',
    category: 'brand & market strategy',
    description: 'a great brand needs a strategic roadmap. we combine data-driven insights with creative execution to build market positioning, campaign playbooks, and launch directions that drive measurable growth.',
    deliverables: [
      'market positioning & research',
      'brand direction & story',
      'launch playbooks & go-to-market',
      'competitor audit & opportunity analysis',
      'campaign architecture'
    ],
    images: [
      { src: '/project5.png', alt: 'mark9 strategy campaign insights 1' },
      { src: '/project2.png', alt: 'mark9 brand direction showcase 2' },
      { src: '/insight1.jpg', alt: 'mark9 market positioning layout 3' }
    ]
  },
  {
    id: '04',
    category: 'growth marketing & campaigns',
    description: 'performance-driven growth systems engineered to scale your audience. multi-channel campaign execution, organic content strategies, and customer acquisition systems.',
    deliverables: [
      'performance marketing campaigns',
      'organic growth strategy',
      'content creation & management systems',
      'email & funnel strategy',
      'audience acquisition & retention'
    ],
    images: [
      { src: '/portrait1.jpg', alt: 'mark9 campaign marketing assets 1' },
      { src: '/project3.png', alt: 'mark9 growth marketing showcase 2' },
      { src: '/project5.png', alt: 'mark9 performance campaign layout 3' }
    ]
  },
  {
    id: '05',
    category: 'packaging & structural design',
    description: 'unboxing experiences and structural packaging concepts designed to command attention on retail shelves and e-commerce unboxings. complete with print-ready production files.',
    deliverables: [
      'structural & box packaging design',
      'unboxing experience design',
      'retail presence & point of sale (pos)',
      'print-ready production & dieline files',
      'material selection & finish guidelines'
    ],
    images: [
      { src: '/project2.png', alt: 'mark9 packaging unboxing design 1' },
      { src: '/insight1.jpg', alt: 'mark9 structural packaging layout 2' },
      { src: '/project3.png', alt: 'mark9 retail packaging showcase 3' }
    ]
  },
  {
    id: '06',
    category: 'ui/ux & digital product design',
    description: 'great products begin with thoughtful design. we create intuitive mobile apps, web interfaces, and scalable design systems that blend aesthetics with functionality to drive conversion.',
    deliverables: [
      'web & mobile application design',
      'wireframing & interactive prototyping',
      'user flow mapping & ux research',
      'design systems & component libraries',
      'interaction & micro-animation design'
    ],
    images: [
      { src: '/project5.png', alt: 'mark9 ui/ux digital mockup 1' },
      { src: '/portrait1.jpg', alt: 'mark9 mobile application interface 2' },
      { src: '/project2.png', alt: 'mark9 design system library 3' }
    ]
  },
  {
    id: '07',
    category: 'performance ad creatives',
    description: 'high-converting static, motion, and video ad creatives tailored for meta, google, tiktok, and direct-response channels to maximize ctr and roas.',
    deliverables: [
      'static ad creative design',
      'motion graphics & video ad editing',
      'multi-format ad variations & testing',
      'direct response creative strategy',
      'platform-optimized campaign assets'
    ],
    images: [
      { src: '/insight1.jpg', alt: 'mark9 performance ad creative 1' },
      { src: '/project3.png', alt: 'mark9 social ad banner showcase 2' },
      { src: '/project5.png', alt: 'mark9 video ad motion asset 3' }
    ]
  }
];

export function ServicesPage() {
  const pageRef = useRef(null);
  useSplitReveal(pageRef);

  // Reverse / Opposite Image Parallax Scroll Effect
  useEffect(() => {
    if (!pageRef.current) return;
    const cards = pageRef.current.querySelectorAll('.category-image-card');
    const animations = [];

    cards.forEach((card, index) => {
      const img = card.querySelector('img');
      if (!img) return;

      // Alternate reverse scroll directions for dynamic visual depth
      const isOdd = index % 2 === 1;
      const yStart = isOdd ? '16%' : '-16%';
      const yEnd = isOdd ? '-16%' : '16%';

      const anim = gsap.fromTo(
        img,
        { y: yStart, scale: 1.15 },
        {
          y: yEnd,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8
          }
        }
      );

      animations.push(anim);
    });

    return () => {
      animations.forEach((anim) => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      });
    };
  }, []);

  return (
    <div className="services-page-container" ref={pageRef}>
      <Header />

      {/* Services Main Content Wrapper */}
      <main className="services-main">
        {/* Hero Section */}
        <section className="services-page-hero">
          <h1 className="services-page-title">services</h1>

          <div className="services-meta-divider">
            <span className="meta-year">2021</span>
            <span className="meta-year">2026</span>
          </div>

          <div className="services-intro-block">
            <div className="hero-grid">
              <div className="hero-left-spacer"></div>
              <div className="hero-right-content">
                <p className="services-intro-text">
                  [ we provide a range of top-quality services designed to help brands grow, connect, and stand out. with a focus on creativity, functionality, and results. ]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services List Sections */}
        <section className="services-page-list">
          {SERVICES_DATA.map((item) => (
            <div key={item.id} className="services-category-block">
              <div className="category-block-grid">

                {/* Left Column: Title & Deliverables */}
                <div className="category-left-col">
                  <div className="category-header-wrap">
                    <span className="category-num">({item.id})</span>
                    <h2 className="category-title">{item.category}</h2>
                  </div>

                  <ul className="deliverables-list">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="deliverable-item">
                        {deliv}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Description & 3-Image Grid */}
                <div className="category-right-col">
                  <p className="category-description">{item.description}</p>

                  <div className="category-image-grid">
                    {item.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="category-image-card">
                        <img src={img.src} alt={img.alt} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </section>
      </main>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ServicesPage;
