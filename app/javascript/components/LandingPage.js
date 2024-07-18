import React from 'react';
import Business from './Business';
import NavBar from './NavBar';
import Hero from './Hero';
import wave from '../../assets/images/wave.svg';

const LandingPage = () => (
  <div>
    <div className="bg-hero-container" style={{ backgroundImage: `url(${wave})` }}>
      <NavBar />
      <Hero />
    </div>
    <Business />
  </div>
);

export default LandingPage;
