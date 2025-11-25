import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { MessageCircle, Plus, Minus } from 'lucide-react';

interface Variant {
  label: string;
  price: string;
  persons?: string;
}

interface MandiItem {
  name: string;
  variants?: Variant[]; // For Half/Full etc
  priceLine?: string; // For single price items like Kareli Mandi – ₹450
  highlight?: boolean; // NEW items
  multiLine?: string[]; // For items with multiple separate lines not variants (optional)
  image?: string; // Added image property
}

const whatsappBase = 'https://wa.me/916305403421';

const mandiItems: MandiItem[] = [
  {
    name: 'Beef Mandi',
    image: '/images/beef-mandi.jpg', // Added image
    variants: [
      { label: 'Half', price: '₹180', persons: '1 person' },
      { label: 'Full', price: '₹350', persons: '2 Persons' }
    ]
  },
  {
    name: 'Chicken Mandi',
    image: '/images/chicken-mandi.jpg', // Added image
    variants: [
      { label: 'Half', price: '₹200' },
      { label: 'Full', price: '₹380', persons: '2 Persons' }
    ]
  },
  { name: 'Kareli Mandi', image: '/images/kareli-mandi.jpg', priceLine: '₹450' }, // Added image
  { name: 'Special Beef Mandi', image: '/images/special-beef-mandi.jpg', priceLine: '₹500 (3 Persons)' }, // Added image
  { name: 'Shoulder Beef Mandi', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80', priceLine: '₹1500 (6 Persons)' }, // Added image
  {
    name: 'Fish Mandi',
    image: '/images/fish-mandi.jpg', // Added image
    multiLine: ['₹220 (1 Person)', '₹450 (2 Persons)']
  },
  { name: 'Majbooz', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80', priceLine: '' }, // Added image
  {
    name: 'Al Fahaam Mandi',
    image: '/images/al-fahaam-mandi.jpg', // Added image
    multiLine: ['₹230 (1 Person)', '₹450 (2 Persons)']
  },
  {
    name: 'Juicy Mandi',
    image: '/images/juicy-mandi.jpg', // Added image
    highlight: true,
    variants: [
      { label: 'Single', price: '₹250' },
      { label: 'Full', price: '₹400' }
    ]
  },
  {
    name: 'Chicken 65 Mandi',
    image: '/images/chicken-65-mandi.jpg', // Added image
    highlight: true,
    variants: [
      { label: 'Single', price: '₹300' },
      { label: 'Full', price: '₹450' }
    ]
  }
];

export const UnifiedMandiMenu: React.FC = () => {
  // Track selected variant per item (by name)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  // Track quantities per item
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleSelect = (itemName: string, variantLabel: string) => {
    setSelectedVariants((prev) => ({ ...prev, [itemName]: variantLabel }));
  };

  // Handle quantity changes
  const handleQuantityChange = (itemName: string, delta: number) => {
    setQuantities(prev => {
      const currentQty = prev[itemName] || 0;
      const newQty = Math.max(0, currentQty + delta);
      return { ...prev, [itemName]: newQty };
    });
  };

  const buildWhatsAppLink = (item: MandiItem) => {
    let variantPart = '';
    if (item.variants && selectedVariants[item.name]) {
      variantPart = ` (${selectedVariants[item.name]})`;
    }
    
    // Add quantity to the message
    const quantity = quantities[item.name] || 0;
    const quantityPart = quantity > 0 ? ` (Quantity: ${quantity})` : '';
    
    const text = encodeURIComponent(`Hi, I would like to order: ${item.name}${variantPart}${quantityPart}`);
    return `${whatsappBase}?text=${text}`;
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading title="Mandi Menu" subtitle="Authentic Selection" centered={true} />
        <div className="space-y-10">
          {mandiItems.map((item) => {
            const isNew = item.highlight;
            const quantity = quantities[item.name] || 0;
            return (
              <div
                key={item.name}
                className="border-b pb-6 last:border-b-0"
                itemScope
                itemType="https://schema.org/MenuItem"
              >
                {/* Added image display */}
                {item.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className={`text-xl font-serif font-bold text-brand-red`}
                    itemProp="name"
                  >
                    {item.name}
                  </h3>
                  {isNew && (
                    <span className="text-xs font-bold bg-brand-red text-white px-2 py-1 rounded-full" aria-label="New item">
                      NEW
                    </span>
                  )}
                </div>

                {/* Price formatting */}
                {item.priceLine && (
                  <p className="text-gray-700 mb-3" itemProp="description">{item.priceLine}</p>
                )}
                {item.multiLine && !item.variants && (
                  <div className="mb-3">
                    {item.multiLine.map((line) => (
                      <p key={line} className="text-gray-700" itemProp="description">{line}</p>
                    ))}
                  </div>
                )}

                {item.variants && (
                  <div className="mb-4">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {item.variants.map((v) => {
                        const checked = selectedVariants[item.name] === v.label;
                        return (
                          <label
                            key={v.label}
                            className={`flex items-center justify-between border rounded-lg px-4 py-2 cursor-pointer transition ${checked ? 'border-brand-red bg-brand-red/5' : 'border-gray-200 hover:border-brand-red'}`}
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-800">{v.label}</span>
                              <span className="text-sm text-gray-600">{v.price}{v.persons ? ` • ${v.persons}` : ''}</span>
                            </div>
                            <input
                              type="radio"
                              name={`variant-${item.name}`}
                              value={v.label}
                              checked={checked}
                              onChange={() => handleSelect(item.name, v.label)}
                              className="accent-brand-red"
                              aria-label={`${item.name} ${v.label} ${v.price}`}
                            />
                          </label>
                        );
                      })}
                    </div>
                    {!selectedVariants[item.name] && (
                      <p className="text-xs text-gray-500 mt-2">Select an option before ordering.</p>
                    )}
                  </div>
                )}

                {!item.variants && !item.priceLine && !item.multiLine && (
                  <p className="text-gray-500 italic mb-3">Price varies. Contact for details.</p>
                )}

                {/* Quantity selector */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-medium">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.name, -1)}
                        disabled={quantity <= 0}
                        className="p-2 text-gray-600 hover:text-brand-red disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 text-gray-800 font-medium min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.name, 1)}
                        className="p-2 text-gray-600 hover:text-brand-red"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <a
                      href={buildWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${quantity > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-green-400`}
                      aria-label={`Order ${item.name} on WhatsApp`}
                    >
                      <MessageCircle size={18} /> Order Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};