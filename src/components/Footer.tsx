import React from 'react';
import { MapPin, Phone, Mail, Clock, ChefHat } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif font-bold text-2xl mb-4">
          NAFEES <span className="text-brand-gold">CATERERS</span>
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          &copy; {new Date().getFullYear()} Nafees Caterers & Biryani House. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs">
          Designed with ❤️ for Authentic Food Lovers
        </p>
      </div>
    </footer>
  );
};
