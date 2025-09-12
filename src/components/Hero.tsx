import React from 'react';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
  const videoId = 'qDascklcshU';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden text-center">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          className="absolute top-0 left-0 w-full h-full grayscale"
        ></iframe>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 px-6">
        <TypewriterText text="Get Ahead Of The Biggest Shift
In Music Content Distribution. EVER!" className="pt-12 font-display text-5xl md:text-7xl text-white leading-tight mb-6" />
      </div>
    </section>
  );
};

export default Hero;