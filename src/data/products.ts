export type Category =
  | "Ayurvedic Face Scrub"
  | "Homemade Soap"
  | "Ayurvedic Abhyanga Oil"
  | "Ayurvedic Foot Scrub"
  | "Fragrance Candles"
  | "Combos and Gift Packs";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "fs1",
    slug: "rose-ubtan-face-scrub",
    name: "Rose Ubtan Face Scrub",
    price: 899,
    category: "Ayurvedic Face Scrub",
    image: "/placeholder.svg",
    description: "A gentle exfoliating scrub with hand-pounded rose petals and chickpea flour for a radiant glow.",
  },
  {
    id: "oil1",
    slug: "nourishing-abhyanga-oil",
    name: "Nourishing Abhyanga Oil",
    price: 1499,
    category: "Ayurvedic Abhyanga Oil",
    image: "/placeholder.svg",
    description: "A luxurious blend of sesame and herbal extracts for daily self-massage to rejuvenate the body.",
  },
  {
    id: "soap1",
    slug: "herbal-neem-soap",
    name: "Herbal Neem Soap",
    price: 349,
    category: "Homemade Soap",
    image: "/placeholder.svg",
    description: "Cold-processed soap enriched with neem and basil for purified, refreshed skin.",
  },
  {
    id: "foot1",
    slug: "soothing-foot-scrub",
    name: "Soothing Foot Scrub",
    price: 499,
    category: "Ayurvedic Foot Scrub",
    image: "/placeholder.svg",
    description: "Revitalizing scrub with camphor and salts to soften and refresh tired feet.",
  },
  {
    id: "candle1",
    slug: "sandalwood-fragrance-candle",
    name: "Sandalwood Fragrance Candle",
    price: 799,
    category: "Fragrance Candles",
    image: "/placeholder.svg",
    description: "Hand-poured soy candle infused with pure sandalwood aroma for calming ambience.",
  },
  {
    id: "combo1",
    slug: "rituals-gift-pack",
    name: "Rituals Gift Pack",
    price: 2599,
    category: "Combos and Gift Packs",
    image: "/placeholder.svg",
    description: "Curated set including face scrub, abhyanga oil, and aromatic candle for a complete ritual.",
  },
];

export const categories: Category[] = [
  "Ayurvedic Face Scrub",
  "Homemade Soap",
  "Ayurvedic Abhyanga Oil",
  "Ayurvedic Foot Scrub",
  "Fragrance Candles",
  "Combos and Gift Packs",
];
