import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
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
      </main>
    </>
  );
};

export default Index;
