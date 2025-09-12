import React from 'react';

const GoogleReviewsExplanation: React.FC = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-brand-red mb-4 text-center">Boost Your Business with Google Reviews</h3>
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
  );
};

export default GoogleReviewsExplanation;