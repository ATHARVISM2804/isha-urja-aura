import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="container py-12">
      <h1 className="font-brandSerif text-3xl">Contact</h1>
      <p className="mt-2 text-muted-foreground">We'd love to hear from you.</p>
      <form className="mt-6 grid gap-4 max-w-2xl">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Email" />
        <Textarea rows={5} placeholder="Message" />
        <Button variant="hero" className="w-fit">Send Message</Button>
      </form>
    </main>
  );
}
