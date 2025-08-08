import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CustomOrder() {
  return (
    <main className="container py-12">
      <h1 className="font-brandSerif text-3xl">Custom Order</h1>
      <p className="mt-2 text-muted-foreground">Create your own Ayurvedic combo or gift pack.</p>
      <form className="mt-6 grid gap-4 max-w-2xl">
        <Input placeholder="Your Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Phone" />
        <Textarea placeholder="Tell us what you'd like in your custom combo" rows={6} />
        <Button variant="hero" className="w-fit">Submit Request</Button>
      </form>
    </main>
  );
}
