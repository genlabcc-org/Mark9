import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Mark9LogoScroll from '../components/Mark9LogoScroll';
import About from '../components/About';
import AboutCTA from '../components/AboutCTA';
import Mentors from '../components/Mentors';
import './AboutPage.css';

export function AboutPage() {
  return (
    <div className="about-page-wrapper">
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
