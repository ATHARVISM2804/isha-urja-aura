import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We’ll get back to you within 24–48 hours." });
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Isha Urja—location, email, phone and a quick contact form." />
      <main className="container py-12">
        <header>
          <h1 className="font-brandSerif text-3xl">Contact</h1>
          <p className="mt-2 text-muted-foreground">We'd love to hear from you.</p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Address</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Isha Urja Studio
              <br /> Mumbai, Maharashtra, India
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              +91 98765 43210
              <br /> Mon–Sat, 10:00–18:00
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> Email</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              hello@isha-urja.com
              <br /> support@isha-urja.com
            </CardContent>
          </Card>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <Card className="shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <CardTitle className="font-brandSerif">Find Us on Google Maps</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="Isha Urja location on Google Maps"
                  src="https://www.google.com/maps?q=Mumbai%20Maharashtra%20India&output=embed"
                  loading="lazy"
                  className="h-full w-full rounded-md border"
                />
              </AspectRatio>
              <a
                className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
                href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C%20Maharashtra%2C%20India"
                target="_blank" rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-brandSerif">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Input placeholder="Your Name" required />
                </div>
                <div className="grid gap-2">
                  <Input type="email" placeholder="Email" required />
                </div>
                <div className="grid gap-2">
                  <Input placeholder="Subject" />
                </div>
                <div className="grid gap-2">
                  <Textarea rows={5} placeholder="Message" required />
                </div>
                <Button variant="hero" className="w-fit">Send Message</Button>
                <p className="text-xs text-muted-foreground flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Typical response time: 24–48 hours</p>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
