import React from 'react';

const DigitalUSBAlbumCards: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary-base px-6 sm:px-8"> {/* Increased padding for mobile and larger */}
      <div className="container mx-auto text-center"> {/* Added container */}
        <div className="mb-16"> {/* Original div content */}
          <h3 class="pt-12 text-2xl font-bold text-brand-secondary mb-4 text-center">Digital USB Album Cards: The Hybrid Advantage for Fans</h3>
          <p class="text-foreground max-w-3xl mx-auto leading-relaxed overflow-hidden text-wrap">
          STREAMMI’s Digital USB Album Cards offer fans the best of both worlds: the instant connectivity of NFC and the robust content delivery of USB. This hybrid approach provides an unparalleled interactive experience and a tangible connection to your favorite artists:
          </p>
          <ul class="list-disc list-inside text-foreground max-w-2xl mx-auto mt-4 text-left space-y-2 overflow-hidden text-wrap">
            <li><strong>Dual Access, Ultimate Convenience:</strong> Use NFC for quick links to online content or plug in the USB for direct, high-fidelity access to large files like uncompressed audio and 4K video.</li>
            <li><strong>Guaranteed Product Transparency & Authenticity:</strong> These physical cards provide direct, verifiable access to content, ensuring you receive authentic, high-quality digital media.</li>
            <li><strong>Exclusive, High-Quality Content:</strong> Enjoy content in its purest form, often exclusive to cardholders, without streaming limitations.</li>
            <li><strong>A True Collectible with Tangible Value:</strong> Own a beautifully designed physical artifact that serves as a lasting memento and a statement of your support for the artist.</li>
            <li><strong>Offline Availability, Anytime, Anywhere:</strong> With the USB functionality, enjoy your purchased content without an internet connection, perfect for travel or areas with limited connectivity.</li>
            <li><strong>Direct Connection to the Artist:</strong> Feel a closer bond with your favorite creators through a unique, physical product that bridges the gap between digital and tangible.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalUSBAlbumCards;