import { SEO } from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Heart, Star, Sparkles, Package, Crown } from "lucide-react";

export default function Gifting() {
  const giftCategories = [
    {
      title: "Calming Ritual",
      description: "Lavender oil, sandalwood soap and soy candle. A serene self-care set for ultimate relaxation.",
      price: "₹2,499",
      originalPrice: "₹3,200",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      badge: "Bestseller",
      items: ["Lavender Essential Oil", "Sandalwood Soap", "Soy Candle", "Silk Gift Pouch"]
    },
    {
      title: "Glow Essentials",
      description: "Ubtan face scrub, rosewater mist and nourishing balm for daily radiance and natural glow.",
      price: "₹1,899",
      originalPrice: "₹2,400",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
      badge: "New",
      items: ["Ubtan Face Scrub", "Rose Water Mist", "Nourishing Balm", "Bamboo Brush"]
    },
    {
      title: "Grand Gift Hamper",
      description: "A handpicked selection of our most-loved rituals for special occasions and celebrations.",
      price: "₹4,999",
      originalPrice: "₹6,500",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      badge: "Premium",
      items: ["5 Premium Products", "Luxury Gift Box", "Personalized Note", "Golden Ribbon"]
    },
    {
      title: "Bridal Bliss",
      description: "Specially curated for brides-to-be with our finest skincare and wellness essentials.",
      price: "₹3,799",
      originalPrice: "₹4,800",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
      badge: "Exclusive",
      items: ["Bridal Glow Kit", "Haldi Paste", "Rose Petals", "Crystal Gift Box"]
    },
    {
      title: "Men's Wellness",
      description: "Masculine fragrances and grooming essentials designed for the modern gentleman.",
      price: "₹2,299",
      originalPrice: "₹2,900",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      badge: "Popular",
      items: ["Beard Oil", "Body Wash", "After Shave Balm", "Leather Pouch"]
    },
    {
      title: "Corporate Gifting",
      description: "Elegant corporate gifts that leave a lasting impression on clients and employees.",
      price: "₹1,599",
      originalPrice: "₹2,000",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
      badge: "Business",
      items: ["Hand Sanitizer", "Stress Relief Oil", "Tea Blend", "Corporate Box"]
    }
  ];

  const occasions = [
    { name: "Birthday", icon: "🎂" },
    { name: "Anniversary", icon: "💝" },
    { name: "Wedding", icon: "💒" },
    { name: "Diwali", icon: "🪔" },
    { name: "Mother's Day", icon: "🌸" },
    { name: "Corporate", icon: "💼" }
  ];

  return (
    <>
      <SEO title="Luxury Ayurvedic Gifting" description="Curated gift sets and premium combos for every occasion." />
      <main className="min-h-screen bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-amber-100/50">
        <style>
          {`
          @keyframes luxuryFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-8px) scale(1.02); }
          }
          @keyframes shimmerGlow {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes sparkleRotate {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes heartBeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .luxury-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
            border: 1px solid rgba(139, 69, 19, 0.2);
            backdrop-filter: blur(20px);
            transition: all 0.5s ease;
          }
          .luxury-card:hover {
            animation: luxuryFloat 3s ease-in-out infinite;
            box-shadow: 0 25px 50px rgba(139, 69, 19, 0.2);
            border: 1px solid rgba(139, 69, 19, 0.4);
            transform: translateY(-5px);
          }
          .shimmer-text {
            background: linear-gradient(90deg, #8b4513, #d2691e, #cd853f, #d2691e, #8b4513);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmerGlow 4s ease-in-out infinite;
          }
          .gift-badge {
            background: linear-gradient(135deg, #8b4513, #a0522d);
            animation: sparkleRotate 3s ease-in-out infinite;
          }
          .heart-icon:hover {
            animation: heartBeat 1s ease-in-out infinite;
          }
          .occasion-card {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(160, 82, 45, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.2);
            transition: all 0.3s ease;
          }
          .occasion-card:hover {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(160, 82, 45, 0.1));
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 15px 30px rgba(139, 69, 19, 0.15);
          }
          .premium-button {
            background: linear-gradient(135deg, #8b4513, #a0522d);
            transition: all 0.3s ease;
          }
          .premium-button:hover {
            background: linear-gradient(135deg, #654321, #8b4513);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(139, 69, 19, 0.3);
          }
          `}
        </style>

        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
          <div className="container relative z-10">
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-6">
                <Gift className="h-16 w-16 text-amber-700 gift-badge" />
              </div>
              <h1 className="font-brandSerif text-4xl md:text-5xl lg:text-6xl shimmer-text font-bold">
                Luxury Gifting
              </h1>
              <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
                Curated gift sets and premium combos designed to celebrate wellness, love, and special moments
              </p>
              <div className="flex items-center justify-center gap-4 text-amber-700">
                <Sparkles className="h-6 w-6" />
                <span className="text-lg font-medium">Handpicked • Premium • Thoughtful</span>
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </section>

        <div className="container pb-20">
          {/* Occasions Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-brandSerif text-4xl text-amber-900 mb-4">Perfect for Every Occasion</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                Whether it's a birthday, anniversary, or festival, find the perfect gift that speaks from the heart
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {occasions.map((occasion, index) => (
                <div key={index} className="occasion-card rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl mb-3">{occasion.icon}</div>
                  <h3 className="font-semibold text-amber-900">{occasion.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Gift Categories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-brandSerif text-4xl text-amber-900 mb-4">Curated Gift Collections</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                Thoughtfully crafted combinations of our finest products, beautifully packaged for memorable gifting
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {giftCategories.map((gift, index) => (
                <Card key={index} className="luxury-card rounded-3xl overflow-hidden shadow-xl group">
                  <div className="relative">
                    <img 
                      src={gift.image} 
                      alt={gift.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${gift.badge === 'Bestseller' ? 'bg-red-500' : gift.badge === 'New' ? 'bg-green-500' : gift.badge === 'Premium' ? 'bg-purple-500' : gift.badge === 'Exclusive' ? 'bg-pink-500' : gift.badge === 'Popular' ? 'bg-blue-500' : 'bg-gray-500'} text-white font-semibold px-3 py-1`}>
                        {gift.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="h-6 w-6 text-white heart-icon cursor-pointer" />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-brandSerif text-xl text-amber-900">{gift.title}</CardTitle>
                      <Crown className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-amber-900">{gift.price}</span>
                      <span className="text-lg text-amber-600 line-through">{gift.originalPrice}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-amber-800/80 mb-4 leading-relaxed">{gift.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-amber-900 mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {gift.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-amber-800">
                            <Star className="h-3 w-3 text-amber-600 fill-current" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="premium-button flex-1 text-white font-semibold py-3 rounded-xl">
                        <Package className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="px-4 py-3 rounded-xl border-amber-300 text-amber-700 hover:bg-amber-50">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Our Gifts */}
          <section className="mb-16">
            <div className="luxury-card rounded-3xl p-12 text-center">
              <h2 className="font-brandSerif text-4xl text-amber-900 mb-8">Why Choose Our Luxury Gifts?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">Premium Quality</h3>
                  <p className="text-amber-800/70">Only the finest Ayurvedic ingredients and luxurious packaging</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">Thoughtful Curation</h3>
                  <p className="text-amber-800/70">Each gift set is carefully curated for maximum wellness benefits</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Gift className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">Beautiful Presentation</h3>
                  <p className="text-amber-800/70">Elegant packaging that makes every unboxing memorable</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="luxury-card rounded-3xl p-12">
              <h2 className="font-brandSerif text-4xl text-amber-900 mb-4">Need Help Choosing?</h2>
              <p className="text-lg text-amber-800/70 mb-8 max-w-2xl mx-auto">
                Our wellness experts are here to help you find the perfect gift for any occasion. 
                Get personalized recommendations based on recipient preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="premium-button text-white font-semibold px-8 py-4 rounded-xl text-lg">
                  Get Personal Consultation
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-xl border-amber-300 text-amber-700 hover:bg-amber-50 text-lg">
                  View Gift Guide
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
