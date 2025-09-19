import React from 'react';

const MonetizeMusic: React.FC = () => {
  return (
    <section class="py-20 bg-brand-primary-base px-4 sm:px-6"> {/* Added section and padding */}
      <div class="container mx-auto text-center"> {/* Added container */}
        <div> {/* Original div content */}
          <h3 class="text-2xl font-bold text-brand-secondary mb-4 text-center">STREAMMI: Empowering Artists with Direct Revenue & Deeper Fan Loyalty</h3>
          <p class="text-foreground max-w-3xl mx-auto leading-relaxed">
          In an evolving music landscape, STREAMMI provides artists with innovative marketing channels and direct revenue streams. Move beyond traditional platforms and forge a more profitable, engaging career:
          </p>
          <ul class="list-disc list-inside text-foreground max-w-2xl mx-auto mt-4 text-left space-y-2">
            <li><strong>Maximize Direct Revenue:</strong> Sell NFC USB Cards directly to your fanbase, bypassing intermediaries and significantly increasing your profit margins compared to streaming royalties.</li>
            <li><strong>Cultivate Enhanced Fan Loyalty:</strong> Offer unique, tangible collectibles that strengthen the bond with your audience, turning casual listeners into dedicated patrons.</li>
            <li><strong>Unlock Innovative Marketing Channels:</strong> Utilize NFC technology for creative campaigns, exclusive content drops, and interactive experiences that capture attention and drive engagement.</li>
            <li><strong>Exclusive Content Distribution:</strong> Deliver unreleased tracks, high-quality audio, behind-the-scenes footage, or digital art directly to cardholders, creating a sense of exclusivity and value.</li>
            <li><strong>Seamless Merchandise Integration:</strong> Bundle NFC USB Cards with other merchandise to create premium packages, boosting overall sales and perceived value.</li>
            <li><strong>Verifiable Authenticity:</strong> Each card can serve as a unique, verifiable item, ensuring fans receive authentic, official merchandise directly from you.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MonetizeMusic;