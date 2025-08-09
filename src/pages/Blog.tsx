import { SEO } from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, Clock, Tag, Search, Filter, Sparkles, Leaf, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const blogPosts = [
    {
      id: 1,
      title: "Abhyanga: The Art of Self-Massage",
      excerpt: "Discover how a daily oil massage can restore balance, vitality, and deep relaxation to your mind and body.",
      category: "Rituals",
      author: "Dr. Priya Sharma",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      tags: ["Self-care", "Massage", "Wellness"]
    },
    {
      id: 2,
      title: "Decoding Ayurvedic Ingredients",
      excerpt: "From neem to sandalwood—learn the fascinating stories and healing properties behind our precious botanicals.",
      category: "Ingredients",
      author: "Ayurveda Expert",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop",
      tags: ["Herbs", "Natural", "Healing"]
    },
    {
      id: 3,
      title: "A Ritual for Radiant Skin",
      excerpt: "A simple yet powerful three-step ritual to cleanse, nourish and achieve that natural, healthy glow.",
      category: "Skincare",
      author: "Beauty Specialist",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
      tags: ["Skincare", "Beauty", "Glow"]
    },
    {
      id: 4,
      title: "Seasonal Wellness: Winter Ayurveda",
      excerpt: "Embrace the wisdom of seasonal living with Ayurvedic practices designed for winter wellness and warmth.",
      category: "Seasonal",
      author: "Dr. Rajesh Kumar",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Seasonal", "Winter", "Wellness"]
    },
    {
      id: 5,
      title: "The Power of Meditation & Mindfulness",
      excerpt: "Explore how ancient meditation techniques can transform your daily life and enhance your spiritual journey.",
      category: "Mindfulness",
      author: "Spiritual Guide",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      tags: ["Meditation", "Mindfulness", "Spiritual"]
    },
    {
      id: 6,
      title: "Ayurvedic Nutrition for Modern Life",
      excerpt: "Learn how to incorporate ancient nutritional wisdom into your busy modern lifestyle for optimal health.",
      category: "Nutrition",
      author: "Nutrition Expert",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
      tags: ["Nutrition", "Diet", "Health"]
    }
  ];

  const categories = ["All", "Rituals", "Ingredients", "Skincare", "Seasonal", "Mindfulness", "Nutrition"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO title="Ayurvedic Journal" description="Insights on rituals, ingredients and Ayurveda—our editorial space." />
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
          @keyframes pageFlip {
            0% { transform: rotateY(0deg); }
            50% { transform: rotateY(5deg); }
            100% { transform: rotateY(0deg); }
          }
          @keyframes leafFloat {
            0%, 100% { transform: rotate(0deg) translateY(0px); }
            50% { transform: rotate(5deg) translateY(-5px); }
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
          .blog-card:hover .blog-image {
            transform: scale(1.1);
          }
          .blog-image {
            transition: transform 0.7s ease;
          }
          .premium-search {
            background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(139, 69, 19, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.3);
            backdrop-filter: blur(10px);
          }
          .premium-search:focus {
            border: 1px solid rgba(139, 69, 19, 0.6);
            box-shadow: 0 0 25px rgba(139, 69, 19, 0.2);
          }
          .category-filter {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(160, 82, 45, 0.05));
            border: 1px solid rgba(139, 69, 19, 0.2);
            transition: all 0.3s ease;
          }
          .category-filter:hover {
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(160, 82, 45, 0.1));
            transform: translateY(-2px);
          }
          .book-icon:hover {
            animation: pageFlip 1s ease-in-out infinite;
          }
          .leaf-icon:hover {
            animation: leafFloat 2s ease-in-out infinite;
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
                <BookOpen className="h-16 w-16 text-amber-700 book-icon" />
              </div>
              <h1 className="font-brandSerif text-4xl md:text-5xl lg:text-6xl shimmer-text font-bold">
                Ayurvedic Journal
              </h1>
              <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
                Discover ancient wisdom for modern living through our curated articles on wellness, rituals, and the timeless art of Ayurveda
              </p>
              <div className="flex items-center justify-center gap-4 text-amber-700">
                <Leaf className="h-6 w-6 leaf-icon" />
                <span className="text-lg font-medium">Wisdom • Wellness • Wonder</span>
                <Leaf className="h-6 w-6 leaf-icon" />
              </div>
            </div>
          </div>
        </section>

        <div className="container pb-20">
          {/* Search and Filter Section */}
          <section className="mb-16">
            <div className="luxury-card rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-700 group-focus-within:scale-110 transition-transform duration-300" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles..."
                      className="premium-search pl-12 h-12 rounded-xl text-amber-900 placeholder-amber-700/60 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="category-filter w-[180px] h-12 rounded-xl">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-white to-amber-50 border-amber-200">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="hover:bg-amber-100">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Info */}
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-amber-900/70">
                  Showing <span className="font-semibold text-amber-900">{filteredPosts.length}</span> articles
                  {selectedCategory !== "All" && (
                    <span> in <span className="font-semibold text-amber-900">{selectedCategory}</span></span>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Featured Article */}
          {filteredPosts.length > 0 && (
            <section className="mb-16">
              <div className="luxury-card rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover blog-image"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-700 text-white font-semibold px-4 py-2">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <Badge variant="outline" className="border-amber-300 text-amber-700 mb-4">
                        {filteredPosts[0].category}
                      </Badge>
                    </div>
                    <h2 className="font-brandSerif text-3xl text-amber-900 mb-4 leading-tight">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-amber-800/80 mb-6 leading-relaxed text-lg">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-amber-700 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <Button className="premium-button text-white font-semibold px-8 py-3 rounded-xl w-fit">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Grid */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-brandSerif text-3xl text-amber-900 mb-4">Latest Articles</h2>
              <p className="text-lg text-amber-800/70 max-w-2xl mx-auto">
                Explore our collection of insights on wellness, ancient wisdom, and holistic living
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.slice(1).map((post) => (
                <Card key={post.id} className="luxury-card blog-card rounded-3xl overflow-hidden shadow-xl group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover blog-image"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-700/90 text-white font-medium px-3 py-1">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="h-6 w-6 text-white cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="font-brandSerif text-xl text-amber-900 leading-tight group-hover:text-amber-700 transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-amber-700">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-amber-800/80 mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-amber-700 mb-3">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="border-amber-300 text-amber-700 text-xs">
                            <Tag className="h-2 w-2 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full rounded-xl border-amber-300 text-amber-700 hover:bg-amber-50 font-medium">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="text-center">
            <div className="luxury-card rounded-3xl p-12">
              <Sparkles className="h-12 w-12 text-amber-700 mx-auto mb-6" />
              <h2 className="font-brandSerif text-3xl text-amber-900 mb-4">Stay Connected with Ancient Wisdom</h2>
              <p className="text-lg text-amber-800/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our journal and receive the latest articles on Ayurvedic wisdom, 
                wellness rituals, and holistic living directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="premium-search h-12 rounded-xl flex-1"
                />
                <Button className="premium-button text-white font-semibold px-8 py-3 rounded-xl">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-amber-700/60 mt-4">
                Join 10,000+ wellness enthusiasts who trust our insights
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
