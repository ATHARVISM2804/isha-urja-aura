import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Palette, Gift, Crown, Sparkles, Heart, Star, Package, Users, Calendar, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function CustomOrder() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [budgetRange, setBudgetRange] = useState<string>("");

  const productCategories = [
    { id: "skincare", name: "Skincare Essentials", icon: "✨", description: "Face oils, scrubs, and serums" },
    { id: "wellness", name: "Wellness Rituals", icon: "🕯️", description: "Essential oils and aromatherapy" },
    { id: "body", name: "Body Care", icon: "🌿", description: "Body oils, soaps, and balms" },
    { id: "hair", name: "Hair Care", icon: "💆‍♀️", description: "Hair oils and treatments" },
    { id: "meditation", name: "Meditation Kit", icon: "🧘‍♀️", description: "Incense, candles, and crystals" },
    { id: "tea", name: "Herbal Teas", icon: "🍃", description: "Ayurvedic tea blends" }
  ];

  const occasions = [
    "Birthday", "Anniversary", "Wedding", "Diwali", "Holi", "Mother's Day", 
    "Father's Day", "Valentine's Day", "Corporate Gifting", "Housewarming", "Other"
  ];

  const budgetRanges = [
    "₹1,000 - ₹2,500", "₹2,500 - ₹5,000", "₹5,000 - ₹10,000", 
    "₹10,000 - ₹20,000", "₹20,000+"
  ];

  const features = [
    {
      icon: <Palette className="h-8 w-8 text-amber-600" />,
      title: "Personalized Selection",
      description: "Choose from our premium collection of Ayurvedic products tailored to your preferences"
    },
    {
      icon: <Package className="h-8 w-8 text-amber-600" />,
      title: "Luxury Packaging",
      description: "Elegant gift boxes with premium wrapping, ribbons, and personalized messages"
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Delivered with Care",
      description: "Carefully packaged and delivered with love to make every moment special"
    }
  ];

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <SEO title="Custom Ayurvedic Combos" description="Design a bespoke wellness gift or ritual kit with Isha Urja." />
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
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.2); }
            50% { box-shadow: 0 0 40px rgba(139, 69, 19, 0.4); }
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
          .premium-input {
            background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(139, 69, 19, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          .premium-input:focus {
            border: 1px solid rgba(139, 69, 19, 0.6);
            box-shadow: 0 0 25px rgba(139, 69, 19, 0.2);
            animation: pulseGlow 2s ease-in-out infinite;
          }
          .product-card {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(160, 82, 45, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.2);
            transition: all 0.3s ease;
          }
          .product-card:hover {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(160, 82, 45, 0.1));
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 15px 30px rgba(139, 69, 19, 0.15);
          }
          .product-card.selected {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.2), rgba(160, 82, 45, 0.15));
            border: 2px solid rgba(139, 69, 19, 0.5);
            animation: sparkleRotate 2s ease-in-out infinite;
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
                <Crown className="h-16 w-16 text-amber-700" style={{animation: 'sparkleRotate 3s ease-in-out infinite'}} />
              </div>
              <h1 className="font-brandSerif text-4xl md:text-5xl lg:text-6xl shimmer-text font-bold">
                Custom Orders
              </h1>
              <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
                Create your perfect Ayurvedic combo or bespoke wellness gift crafted exclusively for you
              </p>
              <div className="flex items-center justify-center gap-4 text-amber-700">
                <Sparkles className="h-6 w-6" />
                <span className="text-lg font-medium">Bespoke • Handcrafted • Exclusive</span>
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </section>

        <div className="container pb-20">
          {/* Features Section */}
          <section className="mb-16">
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="luxury-card rounded-3xl p-8 text-center shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-brandSerif text-xl text-amber-900 flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800/70 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Custom Order Form */}
          <section>
            <div className="luxury-card rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="font-brandSerif text-4xl text-amber-900 mb-4">Design Your Perfect Gift</h2>
                <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                  Tell us about your preferences and let our experts curate a personalized wellness experience
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Information */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-amber-900">Your Name *</label>
                    <Input 
                      placeholder="Enter your full name" 
                      className="premium-input h-12 rounded-xl text-amber-900"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-amber-900">Email Address *</label>
                    <Input 
                      placeholder="your.email@example.com" 
                      type="email" 
                      className="premium-input h-12 rounded-xl text-amber-900"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-amber-900">Phone Number</label>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="premium-input h-12 rounded-xl text-amber-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-amber-900">Budget Range</label>
                    <Select value={budgetRange} onValueChange={setBudgetRange}>
                      <SelectTrigger className="premium-input h-12 rounded-xl">
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-amber-200">
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Occasion Selection */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Occasion
                  </label>
                  <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                    <SelectTrigger className="premium-input h-12 rounded-xl">
                      <SelectValue placeholder="What's the special occasion?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-amber-200">
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Product Categories */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Product Categories (Select all that interest you)
                  </label>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {productCategories.map((category) => (
                      <div
                        key={category.id}
                        className={`product-card rounded-2xl p-6 cursor-pointer ${
                          selectedProducts.includes(category.id) ? 'selected' : ''
                        }`}
                        onClick={() => handleProductToggle(category.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={selectedProducts.includes(category.id)}
                            onChange={() => handleProductToggle(category.id)}
                            className="border-amber-400"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{category.icon}</span>
                              <h3 className="font-semibold text-amber-900">{category.name}</h3>
                            </div>
                            <p className="text-sm text-amber-700/70">{category.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Special Requirements & Preferences
                  </label>
                  <Textarea 
                    placeholder="Tell us about any specific preferences, skin types, allergies, or special messages you'd like to include..."
                    rows={6}
                    className="premium-input rounded-xl text-amber-900 resize-none"
                  />
                </div>

                {/* Delivery Information */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-amber-900">Delivery Date (Optional)</label>
                    <Input 
                      type="date" 
                      className="premium-input h-12 rounded-xl text-amber-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-amber-900">Delivery Address</label>
                    <Input 
                      placeholder="City, State" 
                      className="premium-input h-12 rounded-xl text-amber-900"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button className="premium-button text-white font-semibold px-12 py-4 rounded-xl text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Submit Custom Order Request
                  </Button>
                  <p className="text-sm text-amber-700/60 mt-4">
                    Our wellness experts will contact you within 24 hours with a personalized proposal
                  </p>
                </div>
              </form>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mt-16">
            <div className="luxury-card rounded-3xl p-12 text-center">
              <h2 className="font-brandSerif text-3xl text-amber-900 mb-6">Need Assistance?</h2>
              <p className="text-lg text-amber-800/70 mb-8 max-w-2xl mx-auto">
                Our dedicated team is here to help you create the perfect custom order. 
                Reach out to us for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 text-amber-700">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">custom@ishaurja.com</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

