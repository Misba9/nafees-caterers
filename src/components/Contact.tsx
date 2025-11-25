import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const whatsappLink = "https://wa.me/916305403421?text=Hi%20I%20want%20to%20place%20an%20order%20from%20Nafees%20Caterers%20&%20Biryani%20House";

  return (
    <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 id="contact-heading" className="text-3xl font-serif font-bold text-brand-red mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <MapPin className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Address</h3>
                  <p className="text-gray-600">Salala Main Road, Barkas,<br/>Hyderabad, Telangana.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Phone className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:6305403421" className="hover:text-brand-red" aria-label="Call us at 6305403421">6305403421</a> <br/>
                    <a href="tel:6305484336" className="hover:text-brand-red" aria-label="Call us at 6305484336">6305484336</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Clock className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Opening Hours</h3>
                  <p className="text-gray-600">Open All Days<br/>11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                                aria-label="Order now on WhatsApp"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-md w-full md:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.956663636563!2d78.4866!3d17.3180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba20455555555%3A0x0!2sBarkas!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
                          title="Location map of Nafees Caterers & Biryani House"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
