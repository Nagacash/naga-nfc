import React, { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import WhatWeOffer from './src/components/WhatWeOffer';
import HowItWorks from './src/components/HowItWorks';
import HowUSBWorks from './src/components/HowUSBWorks';
import NFCExplanation from './src/components/NFCExplanation';
import GoogleReviewsExplanation from './src/components/GoogleReviewsExplanation';
import MonetizeMusic from './src/components/MonetizeMusic';
import DigitalUSBAlbumCards from './src/components/DigitalUSBAlbumCards';
import Testimonials from './src/components/Testimonials';
import FAQ from './src/components/FAQ';
import CTA from './src/components/CTA';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import CookieBanner from './src/components/CookieBanner';
import Policy from './src/components/Policy';
import DoTheMath from './src/components/DoTheMath';


const App: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Smooth scroll logic
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Find the closest anchor link parent
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Ensure it's a valid on-page link
      if (!href || href.length <= 1) return;

      event.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const header = document.querySelector('header');
        // Calculate header height, default to 0 if not found
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        
        // Calculate the final position, adding a 1rem (16px) margin for spacing
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Cookie banner logic
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      // Use a timeout to avoid layout shift on load
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    setShowBanner(false);
    localStorage.setItem('cookieConsent', 'true');
  };
  
  const handleShowPolicy = () => {
    setShowPolicy(true);
    window.scrollTo(0, 0); // Scroll to top when showing policy
  };

  const handleHidePolicy = () => {
    setShowPolicy(false);
  };

  if (showPolicy) {
    return <Policy onBack={handleHidePolicy} />;
  }

  return (
    <div className={`bg-brand-dark text-gray-200 font-sans antialiased transition-all duration-300 ${showBanner ? 'pb-36' : ''}`}>
      <Header />
      <main>
        <Hero />
        <DigitalUSBAlbumCards />
        <WhatWeOffer />
       
        <HowUSBWorks />
        <HowItWorks />
        <DoTheMath />
        <NFCExplanation />
        <GoogleReviewsExplanation />
        <MonetizeMusic />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer onPolicyClick={handleShowPolicy} />
      {showBanner && <CookieBanner onAccept={handleAcceptCookies} onPolicyClick={handleShowPolicy} />}
    </div>
  );
};

export default App;