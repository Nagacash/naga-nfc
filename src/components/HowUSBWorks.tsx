import React from 'react';
import { LinkIcon, MusicIcon, EngageIcon } from './Icons';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="relative group bg-brand-red/10 p-5 rounded-full mb-4 cursor-pointer">
      {icon}
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-brand-gray text-white text-center text-sm rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {description}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-t-8 border-t-brand-gray border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const HowUSBWorks: React.FC = () => {
  return (
    <section id="how-usb" className="py-20 bg-black/50 px-4 sm:px-6"> {/* Added px-4 for mobile, sm:px-6 for larger */}
      <div className="container mx-auto"> {/* Removed px-6 here as it's now on section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">NFC + USB: The Ultimate Hybrid for Content & Engagement</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            NagaApparel's cards offer a powerful dual approach: instant NFC tap for web links, and direct USB connection for high-quality content storage and access. This hybrid functionality provides unparalleled versatility and a clear competitive advantage.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-gray/50 transform -translate-y-1/2"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              icon={<LinkIcon className="w-12 h-12 text-brand-red" />}
              title="1. Direct Connection"
              description="Simply plug the USB card into any compatible device (computer, smartphone, tablet). No internet needed."
            />
            <Step
              icon={<MusicIcon className="w-12 h-12 text-brand-red" />}
              title="2. Access High-Quality Content"
              description="Instantly access and download high-fidelity audio, 4K video, large software files, or any digital content directly from the card's storage."
            />
            <Step
              icon={<EngageIcon className="w-12 h-12 text-brand-red" />}
              title="3. Offline & Secure Access"
              description="Your audience enjoys your content offline, anytime, anywhere. The USB acts as secure, physical storage, offering verifiable authenticity and a premium experience."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowUSBWorks;