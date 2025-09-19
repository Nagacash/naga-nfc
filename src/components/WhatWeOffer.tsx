import React, { useState } from 'react';
import { MusicIcon, GoogleIcon, StandIcon } from './Icons';
import { Product, ProductCard, Lightbox } from './ProductComponents';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

import img6 from '../assets/6.jpg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import bundleImage from '../assets/bundle.png';

const BundleProducts: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  const handleCheckout = (paymentLink: string) => {
    window.location.href = paymentLink;
  };

  const handleProductClick = (product: Product) => {
    console.log("handleProductClick called with product:", product);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal called");
    setSelectedProduct(null);
  };

  console.log("selectedProduct before Dialog rendering:", selectedProduct);

  const products: Product[] = [
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-accent" />,
      title: "100 pcs Bundle",
      description: "The ideal starter pack for independent artists and filmmakers to launch innovative marketing campaigns and build enhanced fan loyalty. Perfect for limited-edition music albums, exclusive movie pre-releases, or as a premium giveaway to a dedicated fan base.",
      specs: ["Material: PVC", "Size: 85.5*54mm (Credit Card)", "Thickness: 0.86mm", "USB", "Disc Capacity: 32Gb"],
      note: "Limited Edition",
      imageUrl: bundleImage,
      paymentLink: "https://buy.stripe.com/dRmbJ2aak0eDf97fBI43S01",
      price: "€529",
      perCardPrice: "€5.29/card",
    },
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-accent" />,
      title: "500 pcs Bundle",
      description: "The perfect scalable solution for wider releases and distribution at industry events, enabling innovative marketing and deeper fan engagement. Ideal for distributing full movie collections, software, or entire album catalogs at conferences, conventions, or tradeshows.",
      specs: ["Material: PVC", "Size: 85.5*54mm (Credit Card)", "Thickness: 0.86mm", "USB", "Disc Capacity: 32Gb"],
      note: "Bulk Discount",
      imageUrl: bundleImage,
      paymentLink: "https://buy.stripe.com/9B6aEYcisgdB6CBaho43S02",
      price: "€1999",
      perCardPrice: "€4.00/card",
    },
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-accent" />,
      title: "1,000 pcs Bundle",
      description: "Our most cost-effective package for large-scale content distribution, maximizing direct revenue and market reach. Take advantage of our best price per unit for major album launches, blockbuster movie premiere, or distributing digital media on a mass commercial scale.",
      specs: ["Material: PVC", "Size: 85.5*54mm (Credit Card)", "Thickness: 0.86mm", "USB", "Disc Capacity: 32Gb"],
      note: "Mass Distribution",
      imageUrl: bundleImage,
      paymentLink: "https://buy.stripe.com/bJebJ2gyI4uT9ON0GO43S04",
      price: "€3799",
      perCardPrice: "€3.80/card",
    },
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-accent" />,
      title: "Album Cards for Musicians",
      description: "A direct-to-fan revenue stream and a collectible item for your most loyal supporters. Give your fans a tangible product in the streaming era. Link your card directly to your new album, merch store, or exclusive content.",
      specs: ["Material: PVC", "Size: 85.5*54mm (Credit Card)", "Thickness: 0.86mm", "Chip: NTAG213"],
      note: "Minimum order: 100 pcs",
      imageUrl: img6,
      paymentLink: "mailto:chosenfewrecords@hotmail.de",
      children: (
        <div className="pt-4 border-t border-brand-gray/50">
            <p className="text-sm font-semibold text-foreground mb-2 text-left">Link any music to your cards:</p>
            <audio controls className="w-full h-10">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
        </div>
      )
    },
    {
      icon: <GoogleIcon className="w-8 h-8" />,
      title: "Google Review NFC Cards",
      description: "Boost your online reputation effortlessly. Customers can tap the card to instantly open your Google review page and leave feedback.",
      specs: ["Material: PVC", "Size: 85.5*54mm (Credit Card)", "Thickness: 0.86mm", "Chip: NTAG213"],
      note: "Minimum order: 100 pcs",
      imageUrl: img2,
      paymentLink: "mailto:chosenfewrecords@hotmail.de",
    },
    {
      icon: <StandIcon className="w-8 h-8 text-brand-accent" />,
      title: "Custom NFC Desk Stands",
      description: "A prominent and stylish way to prompt customer interaction. Perfect for reception desks, restaurant tables, and retail counters.",
      specs: ["Price: 15 € / piece", "Material: PVC", "Size: 70*105mm + 50mm fold", "Thickness: 1.3mm", "Chip: NTAG213"],
      imageUrl: img3,
      paymentLink: "mailto:chosenfewrecords@hotmail.de",
    },
  ];

  return (
    <section id="offer" className="py-20 bg-brand-primary-base px-4 sm:px-6"> {/* Added px-4 for mobile, sm:px-6 for larger */}
      <div className="container mx-auto text-center"> {/* Removed px-6 here as it's now on section */}
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">What We Offer</h2>
        <p className="text-foreground max-w-2xl mx-auto mb-12">
          STREAMMI provides cutting-edge NFC and USB solutions designed to solve key challenges for artists and brands: enhancing customer loyalty, ensuring verifiable authenticity, and opening innovative marketing channels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onCardClick={() => {
                handleImageClick(product.imageUrl);
                handleProductClick(product);
              }}
            />
          ))}
        </div>
        <p className="text-foreground max-w-2xl mx-auto mt-12 text-xl">
          Ready to transform your fan engagement and revenue? Explore our solutions or contact us for a custom quote!
        </p>
        <a href="#contact" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 mt-6 inline-block">
          Get a Custom Quote
        </a>
      </div>
    </section>
  );
};

export default BundleProducts;