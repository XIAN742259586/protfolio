import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-6 relative z-10">
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-inter font-extrabold text-30 text-primary-dark leading-45" style={{letterSpacing: '-6.6px'}}>
          SJ
        </span>
        <span className="font-inter font-semibold text-30 text-primary-red leading-45 ml-1">
          Design
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-12">
        <a href="#about" className="font-montserrat font-bold text-18 text-primary-dark hover:text-primary-red transition-colors">
          About
        </a>
        <a href="#services" className="font-montserrat font-bold text-18 text-primary-dark hover:text-primary-red transition-colors">
          Services
        </a>
        <a href="#portfolio" className="font-montserrat font-bold text-18 text-primary-dark hover:text-primary-red transition-colors">
          Portfolio
        </a>
        <a href="#blog" className="font-montserrat font-bold text-18 text-primary-dark hover:text-primary-red transition-colors">
          Blog
        </a>
        
        {/* CTA Button */}
        <button className="bg-primary-dark text-white font-montserrat font-bold text-16 px-6 py-3 rounded hover:bg-gray-800 transition-colors">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 