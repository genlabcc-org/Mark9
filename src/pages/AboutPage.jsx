import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import CTA from '../components/CTA';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import './AboutPage.css';

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

export function AboutPage() {
  // GSAP Flip + ScrollTrigger Bento Gallery Animation
  useEffect(() => {
    const galleryElement = document.querySelector("#gallery-bento-about");
    if (!galleryElement) return;

    const galleryItems = galleryElement.querySelectorAll(".gallery__item");
    let flipCtx;

    const createTween = () => {
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
            pin: galleryElement.parentNode
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

  return (
    <div className="about-page-wrapper">
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
            <span className="about-hero-tag">(02) about mark9 studio</span>
            <h1 className="about-hero-title">
              we craft digital experiences that define brands & move people.
            </h1>
          </div>
          <div className="about-hero-meta">
            <p className="about-hero-desc">
              mark9 studio is an independent branding, product design, and interactive development lab. we partner with forward-thinking teams to turn complex ideas into refined digital realities.
            </p>
            <div className="about-hero-stats">
              <div className="stat-item">
                <span className="stat-label">founded</span>
                <span className="stat-value">2024</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">location</span>
                <span className="stat-value">global lab</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">discipline</span>
                <span className="stat-value">design & tech</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Bento Gallery Section (GSAP Flip + ScrollTrigger Pinned Expand) */}
        <section className="bento-gallery-section">
          <div className="gallery-wrap">
            <div className="gallery gallery--bento gallery--switch" id="gallery-bento-about">
              {GALLERY_IMAGES.map((imgSrc, index) => (
                <div key={index} className="gallery__item">
                  <img
                    src={imgSrc}
                    alt={`MARK9 creative studio environment and design portfolio showcase ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Philosophy & Narrative Section */}
        <section className="about-content-section">
          <div className="content-container">
            <div className="content-left">
              <span className="section-label">— our philosophy</span>
              <h2 className="content-heading">
                design isn't just how things look — it's how software respects human attention.
              </h2>
            </div>

            <div className="content-right">
              <p className="content-text">
                we believe the best digital products operate at the intersection of aesthetic clarity, structural speed, and emotional engagement.
                whether we are crafting a bespoke visual identity or engineering high-velocity ui components, our work is built to endure.
              </p>

              <div className="principles-grid">
                <div className="principle-item">
                  <span className="principle-num">01</span>
                  <h3 className="principle-title">strategy & clarity</h3>
                  <p className="principle-desc">
                    we distill complex business challenges into clear, actionable product architectures.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">02</span>
                  <h3 className="principle-title">craft & motion</h3>
                  <p className="principle-desc">
                    micro-interactions and fluid motion that bring character and responsiveness to every screen.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">03</span>
                  <h3 className="principle-title">engineering excellence</h3>
                  <p className="principle-desc">
                    zero-bloat, high-performance code engineered for 100 core web vitals and seamless scaling.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-num">04</span>
                  <h3 className="principle-title">long-term support</h3>
                  <p className="principle-desc">
                    continuous design iteration and performance tuning as your company expands.
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

export default AboutPage;
