import React from 'react';
import Business from './Business';
import NavBar from './NavBar';
import Hero from './Hero';
import wave from '../../assets/images/wave.svg';
import AboutAddBiz from './AboutAddBuz';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => (
  <main>
    <div className="bg-hero-container" style={{ backgroundImage: `url(${wave})` }}>
      <NavBar />
      <Hero />
    </div>
    <Business />
    <AboutAddBiz />
    <div className="for-space">
      <Contact />
    </div>
    <Footer />
  </main>
);

export default LandingPage;
