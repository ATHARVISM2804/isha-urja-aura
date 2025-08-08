import { SEO } from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Gifting() {
  return (
    <>
      <SEO title="Luxury Ayurvedic Gifting" description="Curated gift sets and premium combos for every occasion." />
      <main className="container py-12">
        <h1 className="font-brandSerif text-3xl">Gifting</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Discover curated combos and luxurious gift packs designed to celebrate wellness.
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="font-brandSerif">Calming Ritual</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Lavender oil, sandalwood soap and soy candle. A serene self-care set.
              <div className="mt-4"><Button variant="hero">View Combo</Button></div>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="font-brandSerif">Glow Essentials</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Ubtan face scrub, rosewater mist and nourishing balm for daily radiance.
              <div className="mt-4"><Button variant="hero">View Combo</Button></div>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="font-brandSerif">Grand Gift Hamper</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A handpicked selection of our most-loved rituals for special occasions.
              <div className="mt-4"><Button variant="hero">View Combo</Button></div>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
