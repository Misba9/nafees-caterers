import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/916305403421?text=Hi%20I%20want%20to%20place%20an%20order%20from%20Nafees%20Caterers%20&%20Biryani%20House";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center gap-2 group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Order Now
      </span>
    </motion.a>
  );
};
