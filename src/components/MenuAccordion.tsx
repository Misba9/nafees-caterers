import React, { useState } from 'react';
import { accordionCategories } from '../data/menuData';
import { ChevronDown, ChevronUp, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MenuAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-brand-red">Complete Menu</h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto mt-2"></div>
        </div>

        <div className="space-y-4">
          {accordionCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-800 font-serif">{category.title}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-brand-red" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2 last:border-0">
                            <div className="flex items-center gap-2">
                              {item.isVeg && <Leaf size={14} className="text-green-500" />}
                              <span className="text-gray-700">{item.name}</span>
                            </div>
                            <span className="font-bold text-brand-red">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
