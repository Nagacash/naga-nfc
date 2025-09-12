import React from 'react';

const HowToOrder: React.FC = () => {
  return (
    <section id="how-to-order" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-white mb-8">How to Order</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-4">
            After your order is received by us, we will be in need of the artwork. We will send out an email with detailed artwork instructions to ensure your design is perfect for production.
          </p>
          <p className="mb-4">
            Production days are typically 5-14 days, depending on the quantity of pieces ordered. We strive to complete all orders efficiently while maintaining our high quality standards.
          </p>
          <p className="mb-4">
            We ship worldwide! No matter where you are, we can deliver your custom NFC solutions right to your doorstep.
          </p>
          <p className="mb-4">
            For any questions regarding your order or artwork, please do not hesitate to contact us at: <a href="mailto:chosenfewrecords@hotmail.de" className="text-brand-red hover:underline">chosenfewrecords@hotmail.de</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;