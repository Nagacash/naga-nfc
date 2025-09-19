import React from 'react';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
  const videoId = 'qDascklcshU';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&modestbranding=1&rel=0`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-brand-primary-base overflow-hidden text-center">
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

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <TypewriterText text="STREAMMI: Revolutionizing Fan Engagement & Artist Revenue with Smart NFC/USB Apparel." className="pt-12 font-display text-5xl md:text-7xl text-foreground leading-tight mb-6" />
        <p className="text-xl md:text-2xl text-foreground mb-10 leading-relaxed">
          Empower artists with direct revenue streams, build deeper fan loyalty, and unlock innovative marketing channels with our cutting-edge NFC and USB solutions.
        </p>
        <a href="#offer" className="bg-brand-accent text-foreground font-bold py-4 px-10 rounded-full text-xl uppercase tracking-wide hover:bg-brand-accent transition-colors duration-300 shadow-lg">
          Explore Our Solutions
        </a>
      </div>
    </section>
  );
};

export default Hero;