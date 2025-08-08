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

        <section className="container py-12">
          <header className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-brandSerif text-2xl">Featured Rituals</h2>
              <p className="text-sm text-muted-foreground">Handpicked products for a luxurious routine</p>
            </div>
            <Button variant="outline" onClick={() => navigate("/shop")}>Browse All</Button>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} onView={() => navigate(`/product/${p.slug}`)} />
            ))}
          </div>
        </section>

        <section className="bg-secondary/40">
          <div className="container py-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-brandSerif text-2xl">Crafted with Care</h3>
              <p className="mt-2 text-muted-foreground">Small-batch creations inspired by Indian heritage and authentic Ayurvedic principles.</p>
              <Link to="/about" className="inline-block mt-4"><Button variant="hero">Our Story</Button></Link>
            </div>
            <div className="rounded-lg border p-6">Experience a premium journey through wellness rituals. Subtle textures, warm tones and gentle motion create a calm, luxurious feel.</div>
          </div>
        </section>

        <section className="container py-12">
          <header className="mb-6">
            <h3 className="font-brandSerif text-2xl">Shop by Category</h3>
            <p className="text-sm text-muted-foreground">Explore rituals curated for every mood</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/shop?q=Oil" className="group rounded-lg border p-6 hover-scale">
              <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors">Abhyanga Oils</h4>
              <p className="text-sm text-muted-foreground mt-1">Nourishing body oils for daily ritual</p>
            </Link>
            <Link to="/shop?q=Soap" className="group rounded-lg border p-6 hover-scale">
              <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors">Artisanal Soaps</h4>
              <p className="text-sm text-muted-foreground mt-1">Cold-processed, skin-loving bars</p>
            </Link>
            <Link to="/shop?q=Scrub" className="group rounded-lg border p-6 hover-scale">
              <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors">Face & Foot Scrubs</h4>
              <p className="text-sm text-muted-foreground mt-1">Polish, brighten and revive</p>
            </Link>
            <Link to="/shop?q=Gift" className="group rounded-lg border p-6 hover-scale">
              <h4 className="font-brandSerif text-xl group-hover:text-primary transition-colors">Gifts & Combos</h4>
              <p className="text-sm text-muted-foreground mt-1">Thoughtful sets for loved ones</p>
            </Link>
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

        <section className="container py-12">
          <div className="rounded-lg border p-6 md:p-10 text-center shadow-[var(--shadow-elegant)]">
            <h3 className="font-brandSerif text-2xl">Join our Ritual Letter</h3>
            <p className="mt-2 text-muted-foreground">Exclusive launches, Ayurvedic tips and special offers</p>
            <div className="mt-4 mx-auto max-w-md flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
