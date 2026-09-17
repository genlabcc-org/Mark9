import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <Preloader />
      <Hero />
      <About />
      <Works />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
