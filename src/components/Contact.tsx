import React from 'react';
import { MailIcon, InstagramIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          
          {/* Right Side: Text Content */}
          <div className="text-center md:col-span-1 flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Have questions or ready to place an order? Reach out to us.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mx-auto">
              <a href="mailto:chosenfewrecords@hotmail.de" className="flex items-center space-x-3 group">
                <MailIcon className="w-8 h-8 text-gray-400 group-hover:text-brand-red transition-colors" />
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">chosenfewrecords@hotmail.de</span>
              </a>
              <a href="https://www.instagram.com/naga_apparel" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <InstagramIcon className="w-8 h-8 text-gray-400 group-hover:text-brand-red transition-colors" />
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">@naga_apparel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
