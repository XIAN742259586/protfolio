import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <div className="max-w-7xl mx-auto px-16 py-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left Content */}
          <div className="w-1/2 pr-12 flex items-center">
            <div className="space-y-8 max-w-lg">
              {/* Section Heading */}
              <div className="space-y-6">
                <h1 className="font-montserrat font-bold text-48 text-primary-dark leading-72 lg:text-56 lg:leading-80">
                  Hi There, I'm <br />
                  <span className="text-pink-500 font-black">Scarlee</span>
                </h1>
                
                {/* Enhanced Welcome Section */}
                <div className="space-y-6">
                  <div className="relative">
                    <h2 className="font-montserrat font-semibold text-20 text-primary-dark leading-30 mb-4">
                      Welcome to my portfolio
                    </h2>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="font-montserrat font-medium text-16 text-gray-600 leading-24">
                      I'm a passionate explorer dedicated to the Fintech industry.
                    </p>
                    
                    <p className="font-montserrat font-normal text-16 text-gray-600 leading-24">
                      Here, I share insights on job hunting in Japan, industry observations, and professional experiences.
                    </p>
                    
                    <p className="font-montserrat font-normal text-16 text-gray-600 leading-24">
                      I look forward to connecting with like-minded tech enthusiasts as we grow together and witness this transformative era.
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="flex items-center space-x-2 pt-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image and Large UX Text */}
          <div className="w-1/2 relative h-full flex items-center justify-center">
            {/* Envelope Background */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="relative" style={{ transform: 'translateX(-30px) translateY(-50px)' }}>
                <img 
                  src={process.env.PUBLIC_URL + "/images/envelope.png"} 
                  alt="Envelope decoration"
                  className="w-[900px] lg:w-[1050px] h-auto opacity-70"
                  style={{
                    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.08))'
                  }}
                />
              </div>
            </div>

            {/* Profile Image with decorative elements */}
            <div className="absolute inset-0 flex items-center justify-end z-10">
              <div className="relative mr-24">
                {/* Profile Image */}
                <div className="w-[320px] lg:w-[360px] h-[340px] lg:h-[380px] rounded-lg overflow-hidden bg-transparent">
                  {/* Using the Figma profile image */}
                  <img 
                    src={process.env.PUBLIC_URL + "/images/profile-image.png"} 
                    alt="Scarlee - Fintech Explorer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load');
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image fails to load */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-600" style={{display: 'none'}}>
                    <span className="text-gray-700 font-montserrat text-16">
                      Profile Image
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 