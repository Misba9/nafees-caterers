export interface MenuItem {
  name: string;
  price?: string; // Optional as prices weren't explicitly provided for all
  description?: string;
  isVeg?: boolean;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const mandiMenu: MenuItem[] = [
  { name: "Beef Mandi", price: "₹350", description: "Tender beef served with aromatic rice", image: "/images/beef-mandi.jpg" },
  { name: "Chicken Mandi", price: "₹320", description: "Succulent chicken with traditional spices", image: "/images/chicken-mandi.jpg" },
  { name: "Kareli Mandi", price: "₹400", description: "Special cut meat", image: "/images/kareli-mandi.jpg" },
  { name: "Special Beef Mandi", price: "₹450", description: "Chef's special preparation", image: "/images/special-beef-mandi.jpg" },
  { name: "Shoulder Beef Mandi", price: "₹500", description: "Premium shoulder cut", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80" },
  { name: "Fish Mandi", price: "₹420", description: "Fresh catch of the day", image: "/images/fish-mandi.jpg" },
  { name: "Majbooz", price: "₹380", description: "Traditional Arabian rice dish", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80" },
  { name: "Al Fahaam Mandi", price: "₹360", description: "Charcoal grilled chicken", image: "/images/al-fahaam-mandi.jpg" },
  { name: "Juicy Mandi", price: "₹390", description: "Extra moist and flavorful", image: "/images/juicy-mandi.jpg" },
  { name: "Chicken 65 Mandi", price: "₹340", description: "Spicy fried chicken topping", image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80" },
];

export const biryaniMenu: MenuItem[] = [
  { name: "Chicken Biryani (Full)", price: "₹280", description: "Authentic Hyderabadi Dum Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80" },
  { name: "Beef Biryani (Full)", price: "₹300", description: "Flavorful beef with long grain rice", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&q=80" },
  { name: "Jumbo Pack (Chicken)", price: "₹650", description: "Serves 3-4 people", image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&q=80" },
  { name: "Jumbo Pack (Beef)", price: "₹700", description: "Serves 3-4 people", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80" },
  { name: "Single Pack (Chicken)", price: "₹160", description: "Perfect for one", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80" },
  { name: "Single Pack (Beef)", price: "₹180", description: "Perfect for one", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80" },
];

export const extrasMenu: MenuItem[] = [
  { name: "Extra Rice", price: "₹100", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80" },
  { name: "Extra Chicken", price: "₹150", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&q=80" },
  { name: "Kareli Piece", price: "₹200", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80" },
  { name: "Shoulder Piece", price: "₹250", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80" },
  { name: "Mayonnaise", price: "₹20", image: "https://images.unsplash.com/photo-1630364237223-4aeb534b1c31?w=500&q=80" },
];

export const accordionCategories: MenuCategory[] = [
  {
    title: "Tandoori & BBQ",
    items: [
      { name: "Chicken Tikka", price: "₹250", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80" },
      { name: "Tangdi Kebab", price: "₹280", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80" },
      { name: "Reshmi Kebab", price: "₹260", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80" },
      { name: "Seekh Kebab", price: "₹280", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80" },
    ]
  },
  {
    title: "Starters (Veg & Non-Veg)",
    items: [
      { name: "Chicken 65", price: "₹220", image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80" },
      { name: "Chilli Chicken", price: "₹220", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80" },
      { name: "Apollo Fish", price: "₹280", image: "https://images.unsplash.com/photo-1580959375944-1fc5066c4ec0?w=500&q=80" },
      { name: "Paneer 65", price: "₹200", isVeg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80" },
      { name: "Veg Manchurian", price: "₹180", isVeg: true, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=500&q=80" },
    ]
  },
  {
    title: "Main Course",
    items: [
      { name: "Butter Chicken", price: "₹280", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80" },
      { name: "Kadai Chicken", price: "₹260", image: "https://images.unsplash.com/photo-1645177628172-a94c30a67a12?w=500&q=80" },
      { name: "Mutton Rogan Josh", price: "₹320", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80" },
    ]
  },
  {
    title: "Vegetarian & Paneer",
    items: [
      { name: "Paneer Butter Masala", price: "₹240", isVeg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80" },
      { name: "Dal Tadka", price: "₹160", isVeg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80" },
      { name: "Kadai Paneer", price: "₹250", isVeg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80" },
    ]
  },
  {
    title: "Roti & Breads",
    items: [
      { name: "Tandoori Roti", price: "₹25", image: "https://images.unsplash.com/photo-1619366317537-b0e2dc41db7a?w=500&q=80" },
      { name: "Butter Naan", price: "₹45", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80" },
      { name: "Rumali Roti", price: "₹20", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80" },
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Qubani Ka Meetha", price: "₹120", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80" },
      { name: "Double Ka Meetha", price: "₹100", image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=500&q=80" },
      { name: "Kaddu Ki Kheer", price: "₹110", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80" },
    ]
  },
];
