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

          {/* How NFC Tap Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-red mb-4">How NFC Tap Works</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              NFC (Near Field Communication) is a short-range wireless technology that allows two devices to communicate when they are brought within a few centimeters of each other. For NFC cards, it's incredibly simple:
            </p>
            <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2">
              <li><strong>Tap:</strong> A user simply taps their NFC-enabled smartphone (most modern smartphones are) against an NFC card or tag.</li>
              <li><strong>Connect:</strong> The NFC chip in the card instantly communicates with the phone.</li>
              <li><strong>Action:</strong> Without needing to open an app or type a URL, the phone is directed to perform a specific action – open a website, play a song, display contact info, or prompt a Google review. It's seamless, fast, and intuitive.</li>
            </ul>
          </div>

          {/* Why Promote with Google Reviews for Businesses */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-red mb-4">Boost Your Business with Google Reviews</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In today's digital age, online reviews are paramount for business success. Google reviews, in particular, significantly influence customer decisions and local SEO. NFC cards make collecting these vital reviews effortless:
            </p>
            <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2">
              <li><strong>Instant Access:</strong> Customers tap your NFC card and are taken directly to your Google review page – no searching, no typing.</li>
              <li><strong>Increased Volume:</strong> The sheer convenience dramatically increases the likelihood of customers leaving a review.</li>
              <li><strong>Enhanced Reputation:</strong> More positive reviews build trust, attract new customers, and improve your online visibility.</li>
              <li><strong>Competitive Edge:</strong> Stand out from competitors by actively and easily gathering authentic feedback.</li>
            </ul>
          </div>

          {/* Why Musicians Should Sell NFC Cards */}
          <div>
            <h3 className="text-2xl font-bold text-brand-red mb-4">Monetize Your Music: NFC Cards for Musicians</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For musicians, NFC cards offer a powerful new revenue stream and a unique way to connect with fans beyond traditional streaming platforms:
            </p>
            <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2">
              <li><strong>Direct Sales:</strong> Sell physical NFC cards at shows, online, or through merchandise. Each card can link directly to a digital album download, exclusive content, or a private streaming link.</li>
              <li><strong>Beyond Streaming Royalties:</strong> Generate income directly from your fans, bypassing the low per-stream payouts of digital platforms.</li>
              <li><strong>Exclusive Content:</strong> Offer premium content (unreleased tracks, behind-the-scenes footage, digital art) accessible only via the NFC card, creating a sense of exclusivity and value.</li>
              <li><strong>Fan Engagement:</strong> Provide a tangible, collectible item that strengthens the fan-artist connection and serves as a constant reminder of your music.</li>
              <li><strong>Merchandise Integration:</strong> Bundle NFC cards with other merchandise, adding value and driving sales.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <LogoIcon className="w-6 h-6 text-brand-red" />
          <span className="ml-2 text-xl font-display text-gray-300">NAGA NFC</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-2 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} NAGA NFC. All rights reserved.</span>
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
