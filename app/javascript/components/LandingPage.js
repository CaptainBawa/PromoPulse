import React from 'react';
import Business from './Business';
import NavBar from './NavBar';
import Hero from './Hero';
import wave from '../../assets/images/wave.svg';
import AboutAddBiz from './AboutAddBuz';
import Contact from './Contact';

const LandingPage = () => (
  <div>
    <div className="bg-hero-container" style={{ backgroundImage: `url(${wave})` }}>
      <NavBar />
      <Hero />
    </div>
    <Business />
    <AboutAddBiz />
    <Contact />
  </div>
);

export default LandingPage;
