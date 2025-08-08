import { SEO } from "@/components/seo/SEO";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Chrome, Lock, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function Auth() {
  const onGoogle = () => {
    toast({
      title: "Connect Supabase to enable Google login",
      description: "Use the green Supabase button (top-right) to connect, then I’ll wire this up.",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Demo only", description: "Auth will be enabled after Supabase is connected." });
  };

  return (
    <>
      <SEO title="Login or Sign Up" description="Access your Isha Urja account or create one in seconds." />
      <main className="container py-12 grid gap-10 md:grid-cols-2">
        <section className="space-y-4 self-center">
          <h1 className="font-brandSerif text-3xl">Welcome back</h1>
          <p className="text-muted-foreground max-w-prose">
            Manage your orders, track shipments, and save your favorite Ayurvedic rituals. New here? Create an
            account in seconds.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><User className="h-4 w-4 text-primary" /> Simple sign up</li>
            <li className="flex items-center gap-3"><Lock className="h-4 w-4 text-primary" /> Secure & private</li>
            <li className="flex items-center gap-3"><Chrome className="h-4 w-4 text-primary" /> Continue with Google</li>
          </ul>
        </section>

        <section>
          <Card className="shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <CardTitle className="font-brandSerif">Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="mt-4">
                  <div className="grid gap-3">
                    <Button variant="outline" onClick={onGoogle} className="w-full">
                      <Chrome className="h-4 w-4" /> Continue with Google
                    </Button>
                    <div className="relative text-center text-xs text-muted-foreground">
                      <span className="bg-background px-2 relative z-10">or</span>
                      <div className="absolute left-0 right-0 top-1/2 -z-0 h-px bg-border" />
                    </div>
                    <form onSubmit={onSubmit} className="grid gap-3">
                      <Input type="email" placeholder="Email" required />
                      <Input type="password" placeholder="Password" required />
                      <Button variant="hero" className="w-full">Login</Button>
                    </form>
                    <p className="text-xs text-muted-foreground text-center">
                      By continuing, you agree to our <Link to="/" className="underline">Terms</Link> and <Link to="/" className="underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="signup" className="mt-4">
                  <div className="grid gap-3">
                    <Button variant="outline" onClick={onGoogle} className="w-full">
                      <Chrome className="h-4 w-4" /> Continue with Google
                    </Button>
                    <div className="relative text-center text-xs text-muted-foreground">
                      <span className="bg-background px-2 relative z-10">or</span>
                      <div className="absolute left-0 right-0 top-1/2 -z-0 h-px bg-border" />
                    </div>
                    <form onSubmit={onSubmit} className="grid gap-3">
                      <Input placeholder="Full Name" required />
                      <Input type="email" placeholder="Email" required />
                      <Input type="password" placeholder="Password" required />
                      <Button variant="hero" className="w-full">Create Account</Button>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
