import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Mark9LogoScroll from '../components/Mark9LogoScroll';
import About from '../components/About';
import AboutCTA from '../components/AboutCTA';
import Mentors from '../components/Mentors';
import useSplitReveal from '../utils/useSplitReveal';
import './AboutPage.css';

gsap.registerPlugin(ScrollTrigger);

export function AboutPage() {
  const aboutPageRef = useRef(null);
  useSplitReveal(aboutPageRef);

  // Ultra-Smooth GSAP Image Parallax for Fullscreen Project Banner
  useEffect(() => {
    if (!aboutPageRef.current) return;

    const ctx = gsap.context(() => {
      const bannerSection = aboutPageRef.current.querySelector('.about-full-image-section');
      const bannerImg = aboutPageRef.current.querySelector('.about-full-image');

      if (bannerSection && bannerImg) {
        gsap.fromTo(
          bannerImg,
          {
            yPercent: -12,
            scale: 1.22,
            force3D: true,
            transformOrigin: '50% 50%'
          },
          {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: bannerSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
              invalidateOnRefresh: true
            }
          }
        );
      }
    }, aboutPageRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div className="about-page-wrapper" ref={aboutPageRef}>
      <Preloader />
      <Header />

      <main className="about-main">
        {/* MARK9 Logo Infinite Scrolling Banner */}
        <Mark9LogoScroll />

        {/* Full Screen Single Project Image Banner Section */}
        <section className="about-full-image-section">
          <img
            src="/project3.png"
            alt="MARK9 Featured Project Showcase"
            className="about-full-image"
          />
        </section>

        {/* About Component */}
        <About />

        {/* Circular CTA Component */}
        <AboutCTA />

        {/* Mentors / Team Showcase Section */}
        <Mentors />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
