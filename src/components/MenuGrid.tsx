import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { mandiMenu, biryaniMenu, extrasMenu } from '../data/menuData';
import { motion } from 'framer-motion';

const MenuCard = ({ item, delay }: { item: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group"
  >
    {item.image && (
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="text-brand-red font-bold text-lg bg-white/95 px-3 py-1.5 rounded-full shadow-md">{item.price}</span>
        </div>
      </div>
    )}
    <div className="p-6">
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-brand-gold/20"></div>
      <h3 className="text-xl font-bold text-gray-800 font-serif mb-2">{item.name}</h3>
      {item.description && (
        <p className="text-gray-500 text-sm">{item.description}</p>
      )}
      {!item.image && (
        <div className="mt-2">
          <span className="text-brand-red font-bold text-lg bg-red-50 px-2 py-1 rounded">{item.price}</span>
        </div>
      )}
    </div>
  </motion.div>
);

export const MenuGrid = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mandi Section */}
        <SectionHeading title="Signature Mandi" subtitle="Served with aromatic rice and soup" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mandiMenu.map((item, index) => (
            <MenuCard key={index} item={item} delay={index * 0.05} />
          ))}
        </div>

        {/* Extras Section - Small strip */}
        <div className="bg-brand-red/5 p-8 rounded-2xl mb-16 border border-brand-red/10">
          <h3 className="text-2xl font-serif font-bold text-brand-red mb-6 text-center">Extras & Add-ons</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {extrasMenu.map((item, index) => (
              <span key={index} className="bg-white border border-brand-gold text-gray-800 px-4 py-2 rounded-full font-medium shadow-sm">
                {item.name} <span className="text-brand-red font-bold ml-1">{item.price}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Biryani Section */}
        <SectionHeading title="Hyderabadi Biryani" subtitle="The world famous taste" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biryaniMenu.map((item, index) => (
            <MenuCard key={index} item={item} delay={index * 0.05} />
          ))}
        </div>

      </div>
    </section>
  );
};
