export const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    description:
      "Track workouts, heart rate, sleep, and notifications with this stylish smartwatch.",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
    description:
      "RGB mechanical keyboard with tactile switches designed for gaming and productivity.",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
    description:
      "Compact waterproof Bluetooth speaker delivering crisp sound and deep bass.",
  },
  {
    id: 5,
    name: "4K Action Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600",
    description:
      "Capture adventures in stunning 4K with image stabilization and waterproof housing.",
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    description:
      "Comfortable ergonomic office chair with adjustable lumbar support and breathable mesh.",
  },
  {
    id: 7,
    name: "Laptop Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description:
      "Durable water-resistant backpack with padded laptop compartment and USB charging port.",
  },
  {
    id: 8,
    name: "Mirrorless Digital Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    description:
      "Professional mirrorless camera with interchangeable lenses and 4K video recording.",
  },
  {
    id: 9,
    name: "Wireless Gaming Mouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    description:
      "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
  },
  {
    id: 10,
    name: "USB-C Monitor",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=600",
    description:
      "27-inch 4K IPS monitor with USB-C connectivity, HDR support, and ultra-thin bezels.",
  },
];

export const getProductById = (id) => {
  return products.find((p) => p.id === Number(id));
};
