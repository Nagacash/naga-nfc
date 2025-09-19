import React, { useState } from 'react';
import { MusicIcon, GoogleIcon, StandIcon } from './Icons';
import bundleImage from '../assets/bundle.png';
import image1 from '../assets/6.jpg';
import image3 from '../assets/2.jpeg';
import image4 from '../assets/3.jpeg';

export interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  specs: string[];
  note?: string;
  imageUrl: string;
  children?: React.ReactNode;
  paymentLink: string;
  price?: string; // Added price property
}

export interface ProductCardProps extends Product {
  onCardClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description, specs, note, imageUrl, onCardClick, children, price }) => (
  <div className="bg-brand-primary-base/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-glow-accent transform hover:-translate-y-2 transition-all duration-300 flex flex-col border border-brand-secondary backdrop-blur-md backdrop-brightness-125 cursor-pointer" onClick={onCardClick}>
    <div className="h-56">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover grayscale" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-white ml-3">{title}</h3>
      </div>
      {price && <p className="text-xl font-semibold text-brand-secondary mb-4">{price}</p>}
      <p className="text-foreground mb-4 flex-grow">{description}</p>
      <ul className="space-y-2 text-foreground mb-4">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {spec}
          </li>
        ))}
      </ul>
      {children}
      {note && <p className="text-sm text-yellow-400 mt-auto pt-4">{note}</p>}
      <button
        onClick={onCardClick}
        className="w-full bg-brand-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-secondary transition-all duration-300 mt-4"
      >
        Buy Now
      </button>
    </div>
  </div>
);

export const Lightbox: React.FC<{ imageUrl: string, onClose: () => void }> = ({ imageUrl, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
    <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
      <img src={imageUrl} alt="Full screen" className="w-full h-full object-contain grayscale" />
      <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl">&times;</button>
    </div>
  </div>
);