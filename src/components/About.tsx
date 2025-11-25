import { SectionHeading } from './ui/SectionHeading';
import { User, Users } from 'lucide-react';

export const About = () => {
  return (
    <article id="about" className="py-20 bg-brand-cream relative" role="region" aria-labelledby="about-heading">
      <div className="absolute inset-0 opacity-5 bg-pattern"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2080&auto=format&fit=crop" 
              alt="Chef preparing authentic Arabian Mandi with traditional spices"
              loading="lazy"
              className="rounded-lg shadow-2xl border-4 border-brand-gold/30"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <SectionHeading id="about-heading" title="Our Legacy" subtitle="Authentic Barkas Taste" centered={false} />
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6" itemProp="description">
              Nafees Mandi & Biryani House is known for authentic Barkas taste, premium quality, generous quantity, and professional catering services. We serve Arabic Mandi, Hyderabadi Biryani & Arabian/Indian dishes.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-red mb-6" itemScope itemType="https://schema.org/Person">
              <h3 className="text-xl font-serif font-bold text-brand-red mb-2 flex items-center gap-2" id="founder-heading">
                <User size={20} className="text-brand-gold" />
                Founder
              </h3>
              <p className="text-gray-800 font-medium" itemProp="name">Late Salam Bin Shamlan</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-gold" role="complementary" aria-labelledby="management-heading">
              <h3 className="text-xl font-serif font-bold text-brand-red mb-4 flex items-center gap-2" id="management-heading">
                <Users size={20} className="text-brand-gold" />
                Management
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-700">Hussain Bin Salam</span>
                  <a href="tel:6305403421" className="text-brand-red font-bold hover:underline" aria-label="Call Hussain Bin Salam at 6305403421">6305403421</a>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-700">Ibrahim Bin Salam</span>
                  <a href="tel:6305484336" className="text-brand-red font-bold hover:underline" aria-label="Call Ibrahim Bin Salam at 6305484336">6305484336</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
