
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-brand-dark shadow-lg' : 'bg-brand-dark'}`}>
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <img src={logo} alt="Streamii Logo" className="w-8 h-8" />
            <span className="font-display text-3xl text-white">STREAMII</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#offer" className="text-gray-300 hover:text-white transition-colors duration-200">What We Offer</a>
            <a href="#how" className="text-gray-300 hover:text-white transition-colors duration-200">How It Works</a>
            <a href="#do-the-math" className="text-gray-300 hover:text-white transition-colors duration-200">Do the Math</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-brand-red text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
            Get Started
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50" aria-label="Toggle menu">
              {isMenuOpen ? <CloseIcon className="w-8 h-8 text-white" /> : <MenuIcon className="w-8 h-8 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <a href="#offer" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">What We Offer</a>
        <a href="#how" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">How It Works</a>
        <a href="#do-the-math" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Do the Math</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors">Contact</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-red text-white font-semibold px-6 py-3 rounded-lg text-xl mt-4 hover:bg-red-700 transition-colors">
            Get Started
        </a>
      </div>
    </>
  );
};

export default Header;