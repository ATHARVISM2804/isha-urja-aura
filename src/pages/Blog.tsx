import { SEO } from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  return (
    <>
      <SEO title="Ayurvedic Journal" description="Insights on rituals, ingredients and Ayurveda—our editorial space." />
      <main className="container py-12">
        <h1 className="font-brandSerif text-3xl">Ayurvedic Journal</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Articles on daily rituals, ingredients and the philosophy of Ayurveda. (Coming soon)
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-brandSerif">Abhyanga: The Art of Self-Massage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Discover how a daily oil massage can restore balance and vitality.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-brandSerif">Decoding Ayurvedic Ingredients</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">From neem to sandalwood—learn the stories behind our botanicals.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-brandSerif">A Ritual for Radiant Skin</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">A simple three-step ritual to cleanse, nourish and glow.</CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
