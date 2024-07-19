import React from 'react';
import business from '../../assets/images/business.png';
import globe from '../../assets/images/globe.png';

const Hero = () => (
  <div className="hero-container">
    <div>
      <img src={business} alt={business} />
      <img src={globe} alt={globe} />
    </div>
    <p>
      We empower entrepreneurs by providing a dynamic platform
      where they can showcase their businesses, connect with
      their customers, and drive growth through meaningful
      engagement and support.
    </p>
  </div>
);

export default Hero;
