import React from 'react';

const MonetizeMusic: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark px-4 sm:px-6"> {/* Added section and padding */}
      <div className="container mx-auto text-center"> {/* Added container */}
        <div> {/* Original div content */}
          <h3 className="text-2xl font-bold text-brand-red mb-4 text-center">Monetize Your Music: NFC Cards for Musicians</h3>
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
    </section>
  );
};

export default MonetizeMusic;