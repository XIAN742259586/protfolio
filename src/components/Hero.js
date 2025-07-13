import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Hero = () => {
  return (
    <div className="bg-primary-pink min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center">
        <HeroSection />
      </div>
    </div>
  );
};

export default Hero; 