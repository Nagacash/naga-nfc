import React from 'react';

const DigitalUSBAlbumCards: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark px-6 sm:px-8"> {/* Increased padding for mobile and larger */}
      <div className="container mx-auto text-center"> {/* Added container */}
        <div className="mb-16"> {/* Original div content */}
          <h3 class="pt-12 text-2xl font-bold text-brand-red mb-4 text-center">Own a Piece of the Artist’s Journey: The Ultimate Fan Collectible</h3>
          <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed overflow-hidden text-wrap">
          As a fan, you want to feel connected to the artists you love. Our Digital USB Album Cards offer a unique and tangible way to be part of their world. It’s more than just content; it’s a collectible that deepens your connection:
          </p>
          <ul class="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2 overflow-hidden text-wrap">
            <li><strong>A True Collector’s Item:</strong> Each card is a physical, beautifully designed artifact that you can hold, display, and cherish. It’s a statement of your support for the artist and a valuable addition to any collection.</li>
            <li><strong>Exclusive, High-Quality Content:</strong> Get access to content in its purest form. Enjoy uncompressed audio, 4K videos, and other digital media without the limitations of streaming platforms.</li>
            <li><strong>Instant & Offline Access:</strong> No need for an internet connection. Simply plug the card into your device and enjoy your content anytime, anywhere.</li>
            <li><strong>Be Part of an Exclusive Club:</strong> Owning a Digital USB Album Card often comes with special perks, like early access to tickets, private online communities, or unannounced content drops.</li>
            <li><strong>The Perfect Gift for a Fellow Fan:</strong> These cards make for a thoughtful and unique gift that any music or film enthusiast will appreciate.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalUSBAlbumCards;