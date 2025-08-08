import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function HeroCarousel() {
  const [api, setApi] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: hero1, title: "Ancient Rituals, Modern Luxury", subtitle: "Premium Ayurvedic skincare & wellness", cta: "Shop Now" },
    { image: hero2, title: "Gifts of Wellness", subtitle: "Thoughtful combos for every occasion", cta: "Explore Gifting" },
    { image: hero3, title: "Crafted by Nature", subtitle: "Handmade soaps, oils & candles", cta: "Discover Collection" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    // Track current slide
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Initial call

    // Auto-play interval
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 8000); // Change slide every 8 seconds (slower)

    return () => {
      clearInterval(autoplay);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section aria-label="Hero" className="relative">
      <Carousel 
        className="w-full"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          duration: 30, // Slower, smoother transition (default is 25)
          dragFree: false,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="transition-transform ease-in-out">
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[64vh] md:h-[78vh]">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-opacity duration-1000 ease-in-out" loading="eager" />
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
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 w-8 rounded-full transition-all duration-500 ease-in-out ${
                i === currentSlide ? 'bg-white scale-110' : 'bg-white/30 hover:bg-white/50 hover:scale-105'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
