import React from 'react';

const NFCExplanation: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark px-4 sm:px-6"> {/* Added section and padding */}
      <div className="container mx-auto text-center"> {/* Added container */}
        <div className="mb-16"> {/* Original div content */}
          <h3 class="pt-12 text-2xl font-bold text-brand-red mb-4 text-center">NFC: The Tech Behind Direct-to-Fan Connections</h3>
          <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          NFC (Near Field Communication) is the magic that makes our cards work. It’s a cutting-edge wireless technology that allows for instant communication between our cards and any modern smartphone. Here’s why it’s a game-changer for artists and fan engagement:
          </p>
          <ul class="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2">
            <li><strong>Instant Gratification:</strong> A simple tap is all it takes. Fans can instantly access your exclusive content, new album, or merch store. This frictionless experience is key to capturing and retaining their attention.</li>
            <li><strong>No Apps Needed:</strong> Unlike QR codes or other technologies, NFC is native to most smartphones. This means no clunky apps to download, ensuring a smooth and immediate user experience.</li>
            <li><strong>Endless Possibilities:</strong> NFC technology is incredibly versatile. Link your cards to a secret music video, a private Discord server, or a hidden page on your website. The creative marketing possibilities for artists are limitless.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NFCExplanation;