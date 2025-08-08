import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export default function CustomOrder() {
  return (
    <>
      <SEO title="Custom Ayurvedic Combos" description="Design a bespoke wellness gift or ritual kit with Isha Urja." />
      <main className="container py-12">
        <h1 className="font-brandSerif text-3xl">Custom Order</h1>
        <p className="mt-2 text-muted-foreground">Create your own Ayurvedic combo or gift pack.</p>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          {["Personalized", "Premium Packaging", "Delivered with Care"].map((t) => (
            <Card key={t}>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Tailor products, notes and wrapping to suit the occasion.</CardContent>
            </Card>
          ))}
        </section>

        <form className="mt-8 grid gap-4 max-w-2xl">
          <Input placeholder="Your Name" required />
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Phone" />
          <Textarea placeholder="Tell us what you'd like in your custom combo" rows={6} />
          <Button variant="hero" className="w-fit">Submit Request</Button>
        </form>
      </main>
    </>
  );
}

