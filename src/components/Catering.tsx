import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Users, ChefHat } from 'lucide-react';

export const Catering = () => {
  return (
    <section id="catering" className="py-20 bg-brand-red text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <ChefHat size={64} className="mx-auto text-brand-gold mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Premium Catering Services</h2>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-light">
            "Making your special occasions memorable with authentic taste"
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl max-w-3xl mx-auto border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Users size={48} className="text-white" />
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Capacity</h3>
                <p className="text-lg text-gray-200">
                  We provide complete catering arrangements for <span className="text-brand-gold font-bold text-xl">5 to 5000 guests</span>.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="mb-4">Weddings • Walimas • Corporate Events • Family Gatherings</p>
              <a 
                href="tel:6305403421"
                className="inline-block bg-brand-gold text-brand-red font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
              >
                Book Catering Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};