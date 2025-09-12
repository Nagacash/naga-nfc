import React, { useState } from 'react';
import { MusicIcon, GoogleIcon, StandIcon } from './Icons';
import image1 from '../assets/6.jpg';
import image4 from '../assets/3.jpeg';
import image3 from '../assets/2.jpeg';
import bundleImage from '../assets/bundle.png';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  specs: string[];
  note?: string;
  imageUrl: string;
  children?: React.ReactNode;
  paymentLink: string;
}

interface ProductCardProps extends Product {
  onCardClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description, specs, note, imageUrl, onCardClick, children }) => (
  <div className="bg-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-glow-red transform hover:-translate-y-2 transition-all duration-300 flex flex-col border border-white backdrop-blur-md backdrop-brightness-125 cursor-pointer" onClick={onCardClick}>
    <div className="h-56">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover grayscale" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-white ml-3">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      <ul className="space-y-2 text-gray-400 mb-4">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {spec}
          </li>
        ))}
      </ul>
      {children}
      {note && <p className="text-sm text-yellow-400 mt-auto pt-4">{note}</p>}
    </div>
  </div>
);

const Lightbox: React.FC<{ imageUrl: string, onClose: () => void }> = ({ imageUrl, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
    <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
      <img src={imageUrl} alt="Full screen" className="w-full h-full object-contain grayscale" />
      <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl">&times;</button>
    </div>
  </div>
);

const WhatWeOffer: React.FC = () => {
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
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const products: Product[] = [
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-red" />,
      title: "Album Cards for Musicians",
      description: "Give your fans a tangible product in the streaming era. Link your card directly to your new album, merch store, or exclusive content.",
      specs: ["Material: PVC", "Size: 85.5*54mm (Credit Card)", "Thickness: 0.86mm", "Chip: NTAG213"],
      note: "Minimum order: 100 pcs",
      imageUrl: image1,
      paymentLink: "#", // No direct payment link for this product
      children: (
        <div className="pt-4 border-t border-brand-gray/50">
            <p className="text-sm font-semibold text-white mb-2 text-left">Link any music to your cards:</p>
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
      imageUrl: image3,
      paymentLink: "#", // No direct payment link for this product
    },
    {
      icon: <StandIcon className="w-8 h-8 text-brand-red" />,
      title: "Custom NFC Desk Stands",
      description: "A prominent and stylish way to prompt customer interaction. Perfect for reception desks, restaurant tables, and retail counters.",
      specs: ["Price: 15 € / piece", "Material: PVC", "Size: 70*105mm + 50mm fold", "Thickness: 1.3mm", "Chip: NTAG213"],
      imageUrl: image4,
      paymentLink: "#", // No direct payment link for this product
    },
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-red" />,
      title: "Digital ALBUM CARDS - 100 pcs Bundle",
      description: "100 pcs Bundle: The ideal starter pack for independent artists and filmmakers. Perfect for limited-edition music albums, exclusive movie pre-releases, or as a premium giveaway to a dedicated fan base. Digital ALBUM CARDS - 100 pcs Bundle. Plug into your phone instant access",
      specs: ["Price: 529 €", "USB - PVC"],
      imageUrl: bundleImage,
      paymentLink: "https://buy.stripe.com/dRmbJ2aak0eDf97fBI43S01",
      children: (
        <div className="pt-4 border-t border-brand-gray/50">
          <button
            onClick={(e) => { e.stopPropagation(); handleCheckout('https://buy.stripe.com/dRmbJ2aak0eDf97fBI43S01'); }}
            className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Buy Now
          </button>
        </div>
      )
    },
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-red" />,
      title: "Digital ALBUM CARDS - 500 pcs Bundle",
      description: "The perfect scalable solution for wider releases and distribution at industry events. Ideal for distributing full movie collections, software, or entire album catalogs at conferences, conventions, or tradeshows.",
      specs: ["Price: 1999 €", "USB - PVC"],
      imageUrl: bundleImage,
      paymentLink: "https://buy.stripe.com/9B6aEYcisgdB6CBaho43S02",
      children: (
        <div className="pt-4 border-t border-brand-gray/50">
          <button
            onClick={(e) => { e.stopPropagation(); handleCheckout('https://buy.stripe.com/9B6aEYcisgdB6CBaho43S02'); }}
            className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Buy Now
          </button>
        </div>
      )
    },
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-red" />,
      title: "Digital ALBUM CARDS - 1000 pcs Bundle",
      description: "Our most cost-effective package for large-scale content distribution. Take advantage of our best price per unit for major album launches, blockbuster movie premieres, or distributing digital media on a mass commercial scale.",
      specs: ["Price: 1799 €", "USB - PVC"],
      imageUrl: bundleImage,
      paymentLink: "https://buy.stripe.com/3cIaEYeqAaTh4ut9dk43S03",
      children: (
        <div className="pt-4 border-t border-brand-gray/50">
          <button
            onClick={(e) => { e.stopPropagation(); handleCheckout('https://buy.stripe.com/3cIaEYeqAaTh4ut9dk43S03'); }}
            className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
          >
            Buy Now
          </button>
        </div>
      )
    }
  ];

  return (
    <section id="offer" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">What We Offer</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Customizable NFC solutions designed to elevate your brand and engage your audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onCardClick={product.title.includes('Bundle') ? () => handleProductClick(product) : () => handleImageClick(product.imageUrl)}
            />
          ))}
        </div>
      </div>
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={handleCloseLightbox} />}
      {selectedProduct && (
        <Dialog open={selectedProduct !== null} onOpenChange={handleCloseModal}>
          <DialogContent className="bg-brand-dark text-white border-slate-800">
            <DialogHeader>
              <img src={selectedProduct.imageUrl} alt={selectedProduct.title} className="w-full h-64 object-cover grayscale rounded-t-lg" />
              <DialogTitle className="text-2xl font-bold text-white pt-4">{selectedProduct.title}</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <DialogDescription className="text-gray-300 mb-4">
                {selectedProduct.description}
              </DialogDescription>
              <ul className="space-y-2 text-gray-400 mb-4">
                {selectedProduct.specs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <DialogFooter>
              <button
                onClick={() => handleCheckout(selectedProduct.paymentLink)}
                className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Buy Now
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default WhatWeOffer;