import React from 'react';

const MonetizeMusic: React.FC = () => {
  return (
    <section class="py-20 bg-brand-dark px-4 sm:px-6"> {/* Added section and padding */}
      <div class="container mx-auto text-center"> {/* Added container */}
        <div> {/* Original div content */}
          <h3 class="text-2xl font-bold text-brand-red mb-4 text-center">Higher Revenue for Artists, Deeper Connection with Fans</h3>
          <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Are you ready to revolutionize how you monetize your music? Our NFC USB Cards are your ticket to a more profitable and engaging music career. Move beyond the limitations of streaming and forge a direct, meaningful connection with your audience:
          </p>
          <ul class="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2">
            <li><strong>Maximize Your Earnings:</strong> By selling NFC USB Cards directly to your fans, you bypass the minimal payouts from streaming services. Set your own price and retain a significantly larger portion of the revenue.</li>
            <li><strong>Create True Collectibles:</strong> In a digital-first world, fans crave tangible, exclusive items. Our NFC USB Cards are premium, physical products that your supporters will be proud to own, collect, and showcase.</li>
            <li><strong>Offer Exclusive Content:</strong> Reward your most dedicated fans with content they can’t get anywhere else. Use the cards to distribute unreleased tracks, high-quality audio files, behind-the-scenes videos, or personal messages.</li>
            <li><strong>Boost Merchandise Sales:</strong> Bundle the NFC USB Cards with other merchandise like t-shirts, posters, or vinyl records to create high-value packages that drive more sales.</li>
            <li><strong>Direct-to-Fan Engagement:</strong> Each card is a direct link to your ecosystem. Update the content linked to the card at any time to keep your audience engaged with new releases, tour dates, or special announcements.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MonetizeMusic;