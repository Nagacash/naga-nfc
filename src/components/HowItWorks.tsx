import React from 'react';
import { TapIcon, LinkIcon, EngageIcon } from './Icons';

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

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Simple, Instant, Magical</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our NFC technology works seamlessly with any modern smartphone. No apps needed.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-gray/50 transform -translate-y-1/2"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              icon={<TapIcon className="w-12 h-12 text-brand-red" />}
              title="1. Tap"
              description="Simply hold a smartphone near the NAGA NFC card or stand. The NFC chip activates instantly."
            />
            <Step
              icon={<LinkIcon className="w-12 h-12 text-brand-red" />}
              title="2. Connect"
              description="A notification pops up on the phone, opening a direct link to your chosen website, album, or review page."
            />
            <Step
              icon={<EngageIcon className="w-12 h-12 text-brand-red" />}
              title="3. Engage"
              description="Your customer or fan is now connected and can take action—listen to music, leave a review, or visit your site."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
