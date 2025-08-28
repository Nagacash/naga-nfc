import React from 'react';

import image from '../assets/7.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-dark/80 to-brand-dark opacity-95"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
              <span className="block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Tap Into The Future
              </span>
              <span className="block text-brand-red opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                of Brand Building
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              NAGA NFC provides innovative NFC cards for musicians and businesses to bridge the gap between physical products and the digital world.
            </p>
            <a href="#offer" className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.1s' }}>
              Discover Our Products
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 w-full max-w-xl mx-auto">
            <div className="relative aspect-video shadow-2xl shadow-brand-red/20 rounded-3xl overflow-hidden group">
              <img
                src={image}
                alt="NFC Card Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 grayscale border border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;