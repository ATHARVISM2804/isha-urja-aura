import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
  const slides = [
    { image: hero1, title: "Ancient Rituals, Modern Luxury", subtitle: "Premium Ayurvedic skincare & wellness", cta: "Shop Now" },
    { image: hero2, title: "Gifts of Wellness", subtitle: "Thoughtful combos for every occasion", cta: "Explore Gifting" },
    { image: hero3, title: "Crafted by Nature", subtitle: "Handmade soaps, oils & candles", cta: "Discover Collection" },
  ];

  return (
    <section aria-label="Hero" className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[64vh] md:h-[78vh]">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/10" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container">
                    <div className="max-w-xl animate-fade-in">
                      <h1 className="font-brandSerif text-4xl md:text-6xl leading-tight">{s.title}</h1>
                      <p className="mt-3 text-base md:text-lg text-foreground/80">{s.subtitle}</p>
                      <div className="mt-6 flex gap-3">
                        <Button variant="hero">{s.cta}</Button>
                        <Button variant="outline">Browse All</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
