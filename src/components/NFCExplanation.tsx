import React from 'react';

const NFCExplanation: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark px-4 sm:px-6"> {/* Added section and padding */}
      <div className="container mx-auto text-center"> {/* Added container */}
        <div className="mb-16"> {/* Original div content */}
          <h3 className="pt-12 text-2xl font-bold text-brand-red mb-4 text-center">How NFC Tap Works</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            NFC (Near Field Communication) is a short-range wireless technology that allows two devices to communicate when they are brought within a few centimeters of each other. For NFC cards, it's incredibly simple:
          </p>
          <ul className="list-disc list-inside text-gray-300 max-w-2xl mx-auto mt-4 text-left space-y-2">
            <li><strong>Tap:</strong> A user simply taps their NFC-enabled smartphone (most modern smartphones are) against an NFC card or tag.</li>
            <li><strong>Connect:</strong> The NFC chip in the card instantly communicates with the phone.</li>
            <li><strong>Action:</strong> Without needing to open an app or type a URL, the phone is directed to perform a specific action – open a website, play a song, display contact info, or prompt a Google review. It's seamless, fast, and intuitive.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NFCExplanation;