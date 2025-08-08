import { SEO } from "@/components/seo/SEO";

export default function About() {
  return (
    <>
      <SEO title="About Isha Urja" description="Our Ayurvedic story—crafting small-batch, authentic formulations with care." />
      <main className="container py-12">
        <h1 className="font-brandSerif text-3xl">About Isha Urja</h1>
        <section className="mt-4 grid gap-8 md:grid-cols-2">
          <p className="text-muted-foreground max-w-prose">
            Rooted in the science of Ayurveda, Isha Urja blends ancient rituals with modern sensibilities. Our products are
            crafted in small batches using time-honored processes and ethically sourced botanicals.
          </p>
          <div className="rounded-lg border p-6 shadow-sm">
            We believe in slow beauty—where efficacy, sustainability and craftsmanship meet. Each ritual is designed to
            restore balance and elevate your everyday.
          </div>
        </section>
      </main>
    </>
  );
}
