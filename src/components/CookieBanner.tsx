import React from 'react';

interface CookieBannerProps {
  onAccept: () => void;
  onPolicyClick: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onPolicyClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-gray/95 backdrop-blur-sm p-4 z-50 animate-fadeInUp" style={{ animationDuration: '0.5s' }}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-300 text-center sm:text-left">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          {' '}
          <button onClick={onPolicyClick} className="text-brand-red hover:underline font-semibold">
            Learn more
          </button>
        </p>
        <button
          onClick={onAccept}
          className="bg-brand-red text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200 flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
