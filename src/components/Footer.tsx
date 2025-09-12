import React, { useState, useEffect } from 'react';
import { LogoIcon, ArrowUpIcon } from './Icons';

interface FooterProps {
  onPolicyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPolicyClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    };
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="mb-12 pt-8 border-t border-gray-700">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-12">Why NFC? Unlock the Power of Tap</h2>
        </div>
        <div className="flex justify-center items-center mb-4">
          <LogoIcon className="w-6 h-6 text-brand-red" />
          <span className="ml-2 text-xl font-display text-gray-300">STREAMII</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-2 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} STREAMII. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <button onClick={onPolicyClick} className="hover:text-brand-red transition-colors">
              Privacy Policy
          </button>
        </div>
        <p className="text-sm">Powered by <a href="https://www.instagram.com/naga_apparel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">Naga Apparel</a></p>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        aria-label="Go to top"
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
