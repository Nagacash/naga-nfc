import React from 'react';
import { DesignIcon, UploadIcon, ProductionIcon, ShippingIcon } from './Icons';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
  <div class="flex flex-col items-center text-center p-6">
    <div class="relative bg-brand-red/10 p-5 rounded-full mb-4">
      {icon}
    </div>
    <h3 class="text-xl font-bold text-white mb-2">{title}</h3>
    <p class="text-gray-400">{description}</p>
  </div>
);

const HowToOrder: React.FC = () => {
  return (
    <section id="how-to-order" class="py-20 bg-brand-primary-base text-foreground px-4 sm:px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-display text-foreground mb-12">How to Order Your Custom NFC Cards</h2>
        <div class="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <Step
            icon={<DesignIcon class="w-12 h-12 text-brand-secondary" />}
            title="1. Design Your Card"
            description="Start by creating your custom design. We recommend using Canva for a simple and intuitive experience. You can use our templates or create your own design from scratch."
          />
          <Step
            icon={<UploadIcon class="w-12 h-12 text-brand-secondary" />}
            title="2. Upload Your Artwork"
            description="Once you're happy with your design, place your order and you will receive an email with a link to upload your artwork. We accept a variety of file formats."
          />
          <Step
            icon={<ProductionIcon class="w-12 h-12 text-brand-secondary" />}
            title="3. Production"
            description="Our team will review your artwork and begin the production process. Production typically takes 5-14 days, depending on the quantity of your order."
          />
          <Step
            icon={<ShippingIcon class="w-12 h-12 text-brand-secondary" />}
            title="4. Worldwide Shipping"
            description="We ship your custom NFC cards directly to your doorstep, no matter where you are in the world. You'll receive a tracking number once your order has shipped."
          />
        </div>
        <div class="mt-12">
          <a href="#offer" class="bg-brand-accent text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300">
            View Pricing and Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;