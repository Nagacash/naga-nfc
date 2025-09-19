import React, { useState, useEffect } from 'react';
import { LogoIcon, ArrowUpIcon, InstagramIcon } from './Icons';

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
    <footer className="bg-brand-primary-base py-8">
      <div className="container mx-auto px-6 text-foreground">
        <div className="mb-12 pt-8 border-t border-brand-secondary">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-12">Why NFC? Unlock the Power of Tap</h2>
        </div>
        <div className="flex justify-center items-center mb-4">
          <LogoIcon className="w-6 h-6 text-brand-secondary" />
          <span className="ml-2 text-xl font-display text-foreground">STREAMMI</span>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href="https://www.instagram.com/naga_apparel" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-accent transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
          
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-2 text-sm text-foreground">
          <span>&copy; {new Date().getFullYear()} STREAMMI. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <button onClick={onPolicyClick} className="hover:text-brand-accent transition-colors">
              Privacy Policy
          </button>
        </div>
        <p className="text-sm text-foreground mt-2">We ship worldwide</p>
        <p className="text-sm text-foreground mt-2">Powered by <a href="https://www.instagram.com/naga_apparel" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">STREAMMI</a></p>
        
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 bg-brand-accent text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-secondary transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        aria-label="Go to top"
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;