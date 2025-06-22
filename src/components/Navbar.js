import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-6 relative z-10">
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative group cursor-pointer">
          <span className="font-inter font-bold text-4xl text-primary-dark leading-tight tracking-tight hover:scale-105 transition-transform duration-300">
            <span className="text-gray-800">A Girl's</span>{' '}
            <span className="text-primary-red font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Unfolding
            </span>
            {' '}<span className="text-gray-800">Story</span>
          </span>
          <div className="absolute -top-2 -right-3 w-3 h-3 bg-gradient-to-r from-primary-red to-pink-400 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
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