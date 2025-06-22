import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pb-0">
      {/* Background Circle */}
      <div className="absolute top-[-50px] right-[300px] w-36 h-36 bg-primary-red rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-16 py-8">
        <div className="flex items-center justify-between h-[518px]">
          {/* Left Content */}
          <div className="w-1/2 pr-12">
            <div className="space-y-8">
              {/* Section Heading */}
              <div className="space-y-6">
                <h1 className="font-montserrat font-bold text-48 text-primary-dark leading-72">
                  Hi There, I'm <br />
                  <span className="text-pink-500 font-black">Scarlee</span>
                </h1>
                
                {/* Enhanced Welcome Section */}
                <div className="space-y-6 max-w-lg">
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
          <div className="w-1/2 relative h-[487px]">
            {/* Large UX Text Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-center">
                <div className="font-inter font-bold text-[475px] leading-none opacity-50 text-white select-none" 
                     style={{WebkitTextStroke: '2px #fc3314'}}>
                  U<span className="text-primary-red opacity-100">X</span>
                </div>
              </div>
            </div>
            
                         {/* Profile Image with decorative elements */}
             <div className="absolute inset-0 flex items-center justify-end z-10">
               <div className="relative mr-8">
                 {/* Profile Image */}
                 <div className="w-[380px] h-[400px] bg-gradient-to-br from-gray-300 to-gray-600 rounded-lg overflow-hidden shadow-2xl">
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
                 
                 {/* Decorative Frame Element */}
                 <div className="absolute bottom-4 right-[-12px] w-12 h-24 bg-primary-dark z-20"></div>
                 
                 {/* Additional decorative shapes matching Figma */}
                 <div className="absolute top-[-20px] left-[-20px] w-12 h-12 border-2 border-primary-red rounded-full"></div>
                 <div className="absolute bottom-12 left-[-16px] space-y-1">
                   <div className="w-6 h-1 bg-primary-dark"></div>
                   <div className="w-5 h-1 bg-primary-dark"></div>
                   <div className="w-4 h-1 bg-primary-dark"></div>
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