import React from 'react';

interface PolicyProps {
  onBack: () => void;
}

const Policy: React.FC<PolicyProps> = ({ onBack }) => {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-300 font-sans antialiased">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <button onClick={onBack} className="text-brand-red hover:underline mb-8 text-lg">
          &larr; Back to Home
        </button>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-brand-gray pb-4">Privacy Policy</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              This Privacy Policy describes Our policies and procedures on the collection,
              use and disclosure of Your information when You use the Service and tells
              You about Your privacy rights and how the law protects You.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">Interpretation and Definitions</h2>
            <h3 className="text-xl font-bold text-white pt-2">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined
              under the following conditions. The following definitions shall have the
              same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">Collecting and Using Your Personal Data</h2>
            <h3 className="text-xl font-bold text-white pt-2">Types of Data Collected</h3>
            <p>
              While using Our Service, We may ask You to provide Us with certain personally
              identifiable information that can be used to contact or identify You.
              Personally identifiable information may include, but is not limited to:
              Email address, First name and last name, Phone number, Usage Data.
            </p>
            <p className="font-bold">
              For all financial transactions, we utilize Stripe, a secure and trusted third-party payment processor.
              Your payment information is handled directly by Stripe and is not stored on our servers, ensuring a secure payment experience.
            </p>
             <h2 className="text-2xl font-bold text-white pt-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include Cookies or Browser Cookies. A cookie is a small file placed on Your Device.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">Refund and Replacement Policy</h2>
            <p>
              All sales are final. Once an order is purchased and received, refunds are not available.
              Replacements will only be provided if the cards are damaged upon arrival, or if they do not work en masse due to manufacturing defects.
              Please contact us at chosenfewrecords@hotmail.de with details and photographic evidence of any damaged or non-functional items for a replacement.
            </p>
            <h2 className="text-2xl font-bold text-white pt-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can contact us:
              By email: chosenfewrecords@hotmail.de
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
