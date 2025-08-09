import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/seo/SEO";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const featured = products.slice(0, 3);
  const navigate = useNavigate();
  return (
    <>
      <SEO title="Premium Ayurvedic Wellness" description="Shop Ayurvedic skincare, oils, soaps and luxury gifting by Isha Urja." />
      <main>
        <HeroCarousel />

        <section className="container py-16">
          <header className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-brandSerif text-3xl md:text-4xl mb-2">Featured Rituals</h2>
              <p className="text-lg text-muted-foreground">Handpicked products for a luxurious routine</p>
            </div>
            <Button variant="outline" className="hover:scale-105 transition-transform" onClick={() => navigate("/shop")}>Browse All</Button>
          </header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <div key={p.id} className="group">
                <ProductCard id={p.id} name={p.name} price={p.price} image={p.image} onView={() => navigate(`/product/${p.slug}`)} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary/40 via-secondary/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          <div className="container py-16 grid gap-12 md:grid-cols-2 items-center relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Handcrafted Excellence
              </div>
              <h3 className="font-brandSerif text-4xl md:text-5xl leading-tight">Crafted with <span className="text-primary">Care</span></h3>
              <p className="text-lg text-muted-foreground leading-relaxed">Small-batch creations inspired by Indian heritage and authentic Ayurvedic principles. Each product tells a story of tradition, wellness, and mindful living.</p>
              <div className="flex gap-4">
                <Link to="/about" className="inline-block">
                  <Button variant="hero" className="hover:scale-105 transition-transform">Our Story</Button>
                </Link>
                <Link to="/custom-order" className="inline-block">
                  <Button variant="outline" className="hover:scale-105 transition-transform">Custom Orders</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl border p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl">✨</span>
                  </div>
                  <div>
                    <h4 className="font-brandSerif text-xl">Premium Experience</h4>
                    <p className="text-sm text-muted-foreground">Luxury wellness journey</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed">Experience a premium journey through wellness rituals. Subtle textures, warm tones and gentle motion create a calm, luxurious feel that transforms your daily routine into a sacred practice.</p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-primary/40 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-primary/60 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">Trusted by 1000+ customers</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <header className="mb-12 text-center">
            <h3 className="font-brandSerif text-3xl md:text-4xl mb-4">Shop by Category</h3>
            <p className="text-lg text-muted-foreground">Explore rituals curated for every mood</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/shop?q=Oil" className="group">
              <div className="relative rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-primary text-2xl">🌿</span>
                  </div>
                  <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors mb-2">Abhyanga Oils</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Nourishing body oils for daily ritual and deep moisturization</p>
                  <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Collection →
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?q=Soap" className="group">
              <div className="relative rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-accent text-2xl">🧼</span>
                  </div>
                  <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors mb-2">Artisanal Soaps</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Cold-processed, skin-loving bars with natural ingredients</p>
                  <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Collection →
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?q=Scrub" className="group">
              <div className="relative rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-primary text-2xl">✨</span>
                  </div>
                  <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors mb-2">Face & Foot Scrubs</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Polish, brighten and revive with gentle exfoliation</p>
                  <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Collection →
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?q=Gift" className="group">
              <div className="relative rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-accent text-2xl">🎁</span>
                  </div>
                  <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors mb-2">Gifts & Combos</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Thoughtful sets for loved ones and special occasions</p>
                  <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Collection →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-16">
          <header className="mb-12 text-center">
            <h3 className="font-brandSerif text-3xl md:text-4xl mb-4">Why Choose <span className="text-primary">Isha Urja</span></h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of ancient Ayurvedic wisdom and modern luxury in every product
            </p>
          </header>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl">🌱</span>
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-brandSerif text-xl mb-3">100% Natural</h4>
              <p className="text-muted-foreground leading-relaxed">
                Pure, organic ingredients sourced directly from nature. No harmful chemicals or synthetic additives.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl">🏺</span>
                </div>
                <div className="absolute -inset-4 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-brandSerif text-xl mb-3">Handcrafted</h4>
              <p className="text-muted-foreground leading-relaxed">
                Small-batch artisanal products made with love and attention to every detail.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl">📜</span>
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-brandSerif text-xl mb-3">Ancient Wisdom</h4>
              <p className="text-muted-foreground leading-relaxed">
                Time-tested Ayurvedic formulations passed down through generations of wellness practitioners.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40">
          <div className="container py-12">
            <header className="mb-6 text-center">
              <h3 className="font-brandSerif text-2xl">Ritual Stories</h3>
              <p className="text-sm text-muted-foreground">What our community is saying</p>
            </header>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-lg border p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">“The Abhyanga oil feels luxurious and smells divine. My evening routine feels complete.”</p>
                <p className="mt-3 text-sm font-medium">— Aisha, Delhi</p>
              </article>
              <article className="rounded-lg border p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">“Beautiful packaging and authentic formulations. Perfect for gifting.”</p>
                <p className="mt-3 text-sm font-medium">— Rohan, Mumbai</p>
              </article>
              <article className="rounded-lg border p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">“The sandalwood soap is gentle yet effective. My skin loves it.”</p>
                <p className="mt-3 text-sm font-medium">— Meera, Bengaluru</p>
              </article>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-card via-card/90 to-card/80 rounded-3xl border-2 p-8 md:p-12 text-center shadow-2xl backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Exclusive Access
              </div>
              
              <h3 className="font-brandSerif text-3xl md:text-4xl mb-4">Join our <span className="text-primary">Ritual Letter</span></h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Exclusive launches, Ayurvedic tips, wellness rituals, and special offers delivered to your inbox. 
                Be the first to discover our new collections and limited-edition products.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-3 p-2 bg-background rounded-2xl border shadow-inner">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 border-0 bg-transparent text-center focus-visible:ring-0 focus-visible:ring-offset-0" 
                  />
                  <Button variant="hero" className="px-8 py-3 hover:scale-105 transition-transform">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  🌿 Join 1000+ wellness enthusiasts • No spam, unsubscribe anytime
                </p>
              </div>
              
              {/* Social proof */}
              <div className="mt-8 flex items-center justify-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-primary/20 rounded-full border border-white"></div>
                    <div className="w-6 h-6 bg-accent/20 rounded-full border border-white"></div>
                    <div className="w-6 h-6 bg-primary/30 rounded-full border border-white"></div>
                  </div>
                  <span className="text-sm">1000+ subscribers</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm">5.0 rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
