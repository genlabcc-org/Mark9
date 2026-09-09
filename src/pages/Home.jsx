import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CTA from '../components/CTA';
import Preloader from '../components/Preloader';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <Preloader />
      <Hero />
      <About />
      <Services />
      <CTA />
    </div>
  );
}

export default Home;
