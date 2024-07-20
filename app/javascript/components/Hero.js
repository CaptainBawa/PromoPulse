import React from 'react';
import business from '../../assets/images/business.png';

const Hero = () => (
  <section className="hero-container">
    <div>
      <p>
        We empower entrepreneurs by providing a dynamic platform
        where they can showcase their businesses, connect with
        their customers, and drive growth through meaningful
        engagement and support.
      </p>
      <img src={business} alt={business} />
    </div>
  </section>
);

export default Hero;
