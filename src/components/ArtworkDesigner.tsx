import React from 'react';

const ArtworkDesigner: React.FC = () => {
  return (
    <section id="artwork-designer" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-white mb-8">Artwork Designer (Coming Soon)</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          This section will allow you to upload images, modify artwork, and prepare production-ready designs for your NFC cards.
        </p>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          We are working on integrating advanced features like text editing, filters, cropping, and more, with a strict output size of 85mm height and 54mm width.
        </p>
      </div>
    </section>
  );
};

export default ArtworkDesigner;