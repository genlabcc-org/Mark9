import React from 'react';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <Preloader />
      <Hero />
    </div>
  );
}

export default Home;
