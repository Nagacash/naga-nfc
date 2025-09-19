import React from 'react';
import { TapIcon, LinkIcon, EngageIcon } from './Icons';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
  <div class="flex flex-col items-center text-center p-6">
    <div class="relative group bg-brand-red/10 p-5 rounded-full mb-4 cursor-pointer">
      {icon}
      {/* Tooltip */}
      <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-brand-gray text-white text-center text-sm rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {description}
        <div class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-t-8 border-t-brand-gray border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
      </div>
    </div>
    <h3 class="text-xl font-bold text-white mb-2">{title}</h3>
    <p class="text-gray-400">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how" class="py-20 bg-brand-primary-base/50 px-4 sm:px-6"> {/* Added px-4 for mobile, sm:px-6 for larger */}
      <div class="container mx-auto"> {/* Removed px-6 here as it's now on section */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-display text-foreground mb-4">How Our NFC Cards Boost Fan Engagement</h2>
          <p class="text-foreground max-w-2xl mx-auto">
          Our NFC technology is designed for seamless fan engagement. It’s a simple, three-step process that connects your fans to your content in an instant. No apps, no hassle, just a direct link to your world.
          </p>
        </div>
        <div class="relative">
          <div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-primary-base/50 transform -translate-y-1/2"></div>
          <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              icon={<TapIcon class="w-12 h-12 text-brand-accent" />}
              title="1. Tap"
              description="Simply hold a smartphone near the NAGA NFC card or stand. The NFC chip activates instantly."
            />
            <Step
              icon={<LinkIcon class="w-12 h-12 text-brand-accent" />}
              title="2. Connect"
              description="A notification pops up on the phone, opening a direct link to your chosen website, album, or review page."
            />
            <Step
              icon={<EngageIcon class="w-12 h-12 text-brand-accent" />}
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