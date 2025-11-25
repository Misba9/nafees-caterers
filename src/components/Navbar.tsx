import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Catering', to: 'catering' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-red shadow-lg py-2' : 'bg-transparent py-4'}`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             <span className={`font-serif font-bold text-2xl ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
               NAFEES <span className="text-brand-gold">CATERERS</span>
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer font-medium hover:text-brand-gold transition-colors ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+916305403421"
              className="bg-brand-gold text-brand-red px-4 py-2 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
              className="text-white hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-brand-red absolute w-full shadow-xl border-t border-red-800" role="menu">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                                role="menuitem"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-800 hover:text-brand-gold"
                            aria-label="Call us now at 6305403421"
              >
                {link.name}
              </Link>
            ))}
             <a 
              href="tel:+916305403421"
              className="block w-full text-center mt-4 bg-brand-gold text-brand-red px-4 py-2 rounded-md font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
