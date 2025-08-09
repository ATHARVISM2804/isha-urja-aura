import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const [cat, setCat] = useState<string>(params.get("cat") || "All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState<string>(q);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=400&fit=crop",
      title: "Ayurvedic Herbs",
      subtitle: "Traditional ingredients for modern wellness"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=400&fit=crop",
      title: "Natural Skincare",
      subtitle: "Pure botanical extracts for radiant skin"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      title: "Wellness Rituals",
      subtitle: "Ancient practices for modern living"
    },
    {
      url: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=400&fit=crop",
      title: "Luxury Experience",
      subtitle: "Premium quality in every product"
    },
    {
      url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=400&fit=crop",
      title: "Holistic Beauty",
      subtitle: "Beauty that comes from within"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const filtered = useMemo(() => {
    let result = products.filter((p) =>
      (cat === "All" || p.category === cat) &&
      (searchQuery.length === 0 || p.name.toLowerCase().includes(searchQuery))
    );

    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [searchQuery, cat, sortBy]);

  const onCategoryChange = (value: string) => {
    setCat(value);
    const ps = new URLSearchParams(location.search);
    if (value === "All") ps.delete("cat"); else ps.set("cat", value);
    navigate({ search: ps.toString() });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const ps = new URLSearchParams(location.search);
    if (searchQuery) ps.set("q", searchQuery); else ps.delete("q");
    navigate({ search: ps.toString() });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-amber-100/50">
      <style>
        {`
        @keyframes luxuryFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }
        @keyframes shimmerGlow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slideIn {
          0% { transform: translateX(100%) scale(0.8); opacity: 0; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .luxury-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          border: 1px solid rgba(139, 69, 19, 0.2);
          backdrop-filter: blur(15px);
          transition: all 0.4s ease;
        }
        .luxury-card:hover {
          animation: luxuryFloat 2s ease-in-out infinite;
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
          border: 1px solid rgba(139, 69, 19, 0.3);
        }
        .premium-filter {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(160, 82, 45, 0.05));
          border: 1px solid rgba(139, 69, 19, 0.2);
          backdrop-filter: blur(10px);
        }
        .premium-filter:hover {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.12), rgba(160, 82, 45, 0.08));
          border: 1px solid rgba(139, 69, 19, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 69, 19, 0.15);
        }
        .shimmer-text {
          background: linear-gradient(90deg, #8b4513, #d2691e, #cd853f, #d2691e, #8b4513);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerGlow 3s ease-in-out infinite;
        }
        .luxury-search {
          background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(139, 69, 19, 0.05));
          border: 1px solid rgba(139, 69, 19, 0.3);
          backdrop-filter: blur(15px);
        }
        .luxury-search:focus {
          border: 1px solid rgba(139, 69, 19, 0.5);
          box-shadow: 0 0 25px rgba(139, 69, 19, 0.2);
        }
        .carousel-slide {
          animation: slideIn 0.8s ease-out;
        }
        .carousel-content {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        .carousel-nav-btn {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(160, 82, 45, 0.8));
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .carousel-nav-btn:hover {
          background: linear-gradient(135deg, rgba(139, 69, 19, 1), rgba(160, 82, 45, 0.9));
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
        }
        .carousel-indicator {
          transition: all 0.3s ease;
        }
        .carousel-indicator.active {
          background: linear-gradient(90deg, #8b4513, #a0522d);
          transform: scale(1.2);
        }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
        <div className="container relative z-10">
          <div className="text-center space-y-6">
            <h1 className="font-brandSerif text-5xl md:text-6xl lg:text-7xl shimmer-text font-bold">
              Luxury Collection
            </h1>
            <p className="text-xl md:text-2xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
              Discover our premium Ayurvedic skincare and wellness products, crafted with ancient wisdom and modern luxury
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-700">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-2 text-lg font-medium">Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-16">
        {/* Filters Section */}
        <div className="luxury-card rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-700 group-focus-within:scale-110 transition-transform duration-300" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search luxury products..."
                  className="luxury-search pl-12 h-12 rounded-xl text-amber-900 placeholder-amber-700/60 transition-all duration-300"
                />
              </div>
            </form>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={cat} onValueChange={onCategoryChange}>
                <SelectTrigger className="premium-filter w-[200px] h-12 rounded-xl transition-all duration-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gradient-to-br from-white to-amber-50 border-amber-200">
                  <SelectItem value="All">All Categories</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c} className="hover:bg-amber-100">{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="premium-filter w-[180px] h-12 rounded-xl transition-all duration-300">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="bg-gradient-to-br from-white to-amber-50 border-amber-200">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border border-amber-300 rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-none h-12 px-4 ${viewMode === "grid" ? "bg-amber-700 text-white" : "text-amber-700 hover:bg-amber-100"}`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-none h-12 px-4 ${viewMode === "list" ? "bg-amber-700 text-white" : "text-amber-700 hover:bg-amber-100"}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-6 pt-6 border-t border-amber-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-amber-900/70">
              Showing <span className="font-semibold text-amber-900">{filtered.length}</span> of <span className="font-semibold text-amber-900">{products.length}</span> premium products
            </p>
            {searchQuery && (
              <p className="text-amber-900/70">
                Search results for "<span className="font-semibold text-amber-900">{searchQuery}</span>"
              </p>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <section className={`grid gap-8 ${
          viewMode === "grid" 
            ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1 max-w-4xl mx-auto"
        }`}>
          {filtered.map((p) => (
            <div key={p.id} className="luxury-card rounded-2xl overflow-hidden group">
              <ProductCard
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                onView={() => navigate(`/product/${p.slug}`)}
              />
            </div>
          ))}
        </section>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="luxury-card rounded-2xl p-12 max-w-md mx-auto">
              <Heart className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-amber-900 mb-2">No Products Found</h3>
              <p className="text-amber-700 mb-6">
                We couldn't find any products matching your criteria. Try adjusting your filters.
              </p>
              <Button 
                onClick={() => {
                  setCat("All");
                  setSearchQuery("");
                  navigate("/shop");
                }}
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-xl"
              >
                View All Products
              </Button>
            </div>
          </div>
        )}

        {/* Collection Info */}
        <div className="mt-20 text-center">
          <div className="luxury-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="font-brandSerif text-3xl md:text-4xl text-amber-900 mb-6">
              Crafted with Ancient Wisdom
            </h2>
            <p className="text-lg text-amber-800/80 leading-relaxed">
              Each product in our collection is meticulously crafted using traditional Ayurvedic principles 
              combined with modern luxury standards. Experience the perfect harmony of nature's finest 
              ingredients and contemporary wellness innovation.
            </p>
          </div>
        </div>

        {/* Luxury Carousel */}
        <div className="mt-20">
          <div className="luxury-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[500px] overflow-hidden">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-110"
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center carousel-slide"
                    style={{ backgroundImage: `url(${image.url})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-start">
                      <div className="container">
                        <div className="max-w-xl text-white carousel-content">
                          <h3 className="font-brandSerif text-4xl md:text-5xl font-bold mb-4">
                            {image.title}
                          </h3>
                          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            {image.subtitle}
                          </p>
                          <Button className="mt-8 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105">
                            Explore Collection
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="carousel-nav-btn absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="carousel-nav-btn absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`carousel-indicator w-3 h-3 rounded-full ${
                      index === currentSlide
                        ? "active"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Bottom Info */}
            <div className="p-8 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="text-center">
                <h3 className="font-brandSerif text-2xl text-amber-900 mb-3">
                  Discover the Beauty of Ayurveda
                </h3>
                <p className="text-amber-800/80 max-w-2xl mx-auto">
                  Immerse yourself in our world of natural luxury where traditional wisdom meets contemporary elegance. 
                  Each moment is crafted to elevate your wellness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
