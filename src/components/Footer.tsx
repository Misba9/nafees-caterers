export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Information */}
          <div className="text-center md:text-left">
            <h2 className="font-serif font-bold text-2xl mb-4">
              NAFEES <span className="text-brand-gold">CATERERS</span>
            </h2>
            <div className="text-gray-300 mb-4">
              <p className="mb-2">Salala Main Road, Barkas</p>
              <p className="mb-2">Hyderabad, Telangana 500008</p>
              <p className="mb-2">India</p>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nafees Caterers & Biryani House. All rights reserved.
            </p>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-xs mb-2">
              Designed with ❤️ for Authentic Food Lovers
            </p>
            <p className="text-gray-500 text-xs">
              Developed by{' '}
              <a 
                href="https://alehsanmt.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white transition-colors"
              >
                Al-Ehsan Media & Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};