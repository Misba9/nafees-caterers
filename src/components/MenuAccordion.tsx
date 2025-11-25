import React, { useState } from 'react';
import { accordionCategories } from '../data/menuData';
import { ChevronDown, ChevronUp, Leaf, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MenuAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Track quantities for each menu item
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle quantity changes
  const handleQuantityChange = (itemName: string, delta: number) => {
    setQuantities(prev => {
      const currentQty = prev[itemName] || 0;
      const newQty = Math.max(0, currentQty + delta);
      return { ...prev, [itemName]: newQty };
    });
  };

  // Build WhatsApp link with quantity information
  const buildWhatsAppLink = (itemName: string, itemPrice?: string) => {
    const quantity = quantities[itemName] || 0;
    const quantityPart = quantity > 0 ? ` (Quantity: ${quantity})` : '';
    const pricePart = itemPrice ? ` (${itemPrice})` : '';
    
    const text = encodeURIComponent(`Hi, I would like to order: ${itemName}${pricePart}${quantityPart}`);
    return `https://wa.me/916305403421?text=${text}`;
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
                        {category.items.map((item, idx) => {
                          const quantity = quantities[item.name] || 0;
                          return (
                          <li key={idx} className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2 last:border-0">
                            <div className="flex items-center gap-2">
                              {/* Added image display */}
                              {item.image && (
                                <div className="flex-shrink-0 w-10 h-10 rounded-md overflow-hidden mr-2">
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              {item.isVeg && <Leaf size={14} className="text-green-500" />}
                              <span className="text-gray-700">{item.name}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {/* Quantity selector */}
                              <div className="flex items-center border border-gray-300 rounded-lg mr-2">
                                <button
                                  onClick={() => handleQuantityChange(item.name, -1)}
                                  disabled={quantity <= 0}
                                  className="p-1 text-gray-600 hover:text-brand-red disabled:opacity-50 disabled:cursor-not-allowed"
                                  aria-label={`Decrease quantity of ${item.name}`}
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="px-2 py-1 text-gray-800 font-medium min-w-[1.5rem] text-center text-sm">
                                  {quantity}
                                </span>
                                <button
                                  onClick={() => handleQuantityChange(item.name, 1)}
                                  className="p-1 text-gray-600 hover:text-brand-red"
                                  aria-label={`Increase quantity of ${item.name}`}
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              
                              <div className="flex flex-col items-end">
                                <span className="font-bold text-brand-red">{item.price}</span>
                                <a
                                  href={buildWhatsAppLink(item.name, item.price)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-xs mt-1 px-2 py-1 rounded ${quantity > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white`}
                                >
                                  Order
                                </a>
                              </div>
                            </div>
                          </li>
                          );
                        })}
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