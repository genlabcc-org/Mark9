import React from 'react';
import Hero from '../components/Hero';
import Works from '../components/Works';
import BrandMarquee from '../components/BrandMarquee';
import Services from '../components/Services';
import About from '../components/About';
import Clients from '../components/Clients';
import WhyChoose from '../components/WhyChoose';
import Insights from '../components/Insights';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <Preloader />
      <Hero />
      <About />
      <Services />
      <Clients />
      <WhyChoose />
      <Works />
      <BrandMarquee />
      <Insights />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
