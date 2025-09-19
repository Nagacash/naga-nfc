import React from 'react';

const NFCExplanation: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary-base px-4 sm:px-6"> {/* Added section and padding */}
      <div className="container mx-auto text-center"> {/* Added container */}
        <div className="mb-16"> {/* Original div content */}
          <h3 class="pt-12 text-2xl font-bold text-brand-secondary mb-4 text-center">NFC: Powering Innovative Marketing & Enhanced Customer Loyalty</h3>
          <p class="text-foreground max-w-3xl mx-auto leading-relaxed">
          NFC (Near Field Communication) is the cutting-edge technology at the heart of STREAMMI’s solutions. It creates a seamless, direct connection between your brand and your audience, unlocking powerful new avenues for innovative marketing and enhanced customer loyalty:
          </p>
          <ul class="list-disc list-inside text-foreground max-w-2xl mx-auto mt-4 text-left space-y-2">
            <li><strong>Direct & Instant Engagement:</strong> A simple tap instantly connects customers to your content, promotions, or social media, eliminating friction and boosting interaction rates.</li>
            <li><strong>Innovative Marketing Channels:</strong> Leverage NFC for dynamic campaigns, product launches, and interactive experiences that stand out and create memorable brand touchpoints.</li>
            <li><strong>Build Enhanced Customer Loyalty:</strong> Provide exclusive content, personalized experiences, and direct access to your brand, fostering a deeper connection and encouraging repeat engagement.</li>
            <li><strong>Effortless Information Delivery:</strong> Share product details, authenticity verification, or behind-the-scenes stories instantly, enhancing transparency and trust.</li>
            <li><strong>No Apps, No Hassle:</strong> NFC works natively with most modern smartphones, ensuring a smooth and immediate user experience without requiring app downloads.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NFCExplanation;