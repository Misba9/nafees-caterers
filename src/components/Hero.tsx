import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MessageCircle, UtensilsCrossed } from 'lucide-react';

export const Hero = () => {
  const whatsappLink = "https://wa.me/916305403421?text=Hi%20I%20want%20to%20place%20an%20order%20from%20Nafees%20Caterers%20&%20Biryani%20House";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2574&auto=format&fit=crop" 
          alt="Authentic Hyderabadi Biryani and Mandi spread at Nafees Caterers"
          loading="eager"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-red/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-brand-gold font-bold tracking-widest mb-4 text-sm md:text-lg uppercase">
            Welcome to
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight" itemProp="name">
            Nafees Caterers <br/> & Biryani House
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light italic" itemProp="slogan">
            "Authentic Barkas Taste Since Generations"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
                            aria-label="Order food via WhatsApp"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle size={24} />
              Order on WhatsApp
            </a>
            <Link 
              to="menu"
              smooth={true}
              duration={500}
                            aria-label="View our menu"
              className="w-full sm:w-auto cursor-pointer bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-red px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <UtensilsCrossed size={24} />
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
