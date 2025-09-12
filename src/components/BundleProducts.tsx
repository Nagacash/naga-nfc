import React, { useState } from 'react';
import { MusicIcon } from './Icons';
import { Product, ProductCard, Lightbox } from './ProductComponents';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

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
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const products: Product[] = [
    {
      icon: <MusicIcon className="w-8 h-8 text-brand-red" />,
      title: "Digital ALBUM CARDS - 100 pcs Bundle",
      description: "100 pcs Bundle: The ideal starter pack for independent artists and filmmakers. Perfect for limited-edition music albums, exclusive movie pre-releases, or as a premium giveaway to a dedicated fan base. Digital ALBUM CARDS - 100 pcs Bundle. Plug into your phone instant access. Disc Capacity: 32Gb. Material: PVC. Size: 85.5*54mm (Credit Card). Thickness: 0.86mm. Chip: NTAG213",
      specs: ["Price: 529 €", "USB - PVC", "Disc Capacity: 32Gb"],
      imageUrl: "/bundle.png", // Assuming bundle.png is in the public folder
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
      description: "The perfect scalable solution for wider releases and distribution at industry events. Ideal for distributing full movie collections, software, or entire album catalogs at conferences, conventions, or tradeshows. Disc Capacity: 32Gb. Material: PVC. Size: 85.5*54mm (Credit Card). Thickness: 0.86mm. Chip: NTAG213",
      specs: ["Price: 1999 €", "USB - PVC", "Disc Capacity: 32Gb"],
      imageUrl: "/bundle.png", // Assuming bundle.png is in the public folder
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
      description: "Our most cost-effective package for large-scale content distribution. Take advantage of our best price per unit for major album launches, blockbuster movie premieres, or distributing digital media on a mass commercial scale. Disc Capacity: 32Gb. Material: PVC. Size: 85.5*54mm (Credit Card). Thickness: 0.86mm. Chip: NTAG213",
      specs: ["Price: 1799 €", "USB - PVC", "Disc Capacity: 32Gb"],
      imageUrl: "/bundle.png", // Assuming bundle.png is in the public folder
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
    <section id="bundle-offer" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Our Bundles</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Explore our cost-effective bundles for large-scale content distribution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              specs={product.specs} // Explicitly pass specs
              onCardClick={() => {
                setSelectedProduct(product);
                console.log("Selected product:", product);
              }}
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

export default BundleProducts;