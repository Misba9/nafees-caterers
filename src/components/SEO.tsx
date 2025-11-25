import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Nafees Caterers & Biryani House | Best Mandi & Hyderabadi Biryani in Barkas | Hyderabad",
  description = "Experience authentic Barkas taste since generations. Nafees Caterers offers the best Hyderabadi Biryani, Arabian Mandi, and premium catering services in Hyderabad. Serving 5-5000 guests. Order online via WhatsApp!",
  keywords = "Hyderabadi Biryani, Mandi Hyderabad, Barkas Biryani, Nafees Caterers, Arabian Mandi, Chicken Mandi, Beef Mandi, Fish Mandi, Catering Services Hyderabad, Best Biryani Hyderabad, Authentic Biryani, Party Catering, Wedding Catering, Al Fahaam, Tandoori, BBQ, Barkas Restaurant",
  image = "https://nafeescaterers.com/og-image.jpg",
  url = "https://nafeescaterers.com/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
