import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartProvider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Gifting", to: "/gifting" },
  { label: "Custom Order", to: "/custom-order" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const { openCart, itemsCount } = useCart();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query)}`);
  };

  const handleGoogle = async () => {
    toast({ title: "Google Sign-In", description: "Google login coming soon." });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="font-brandSerif text-2xl tracking-wide">
          Isha Urja
        </Link>

        <nav className="ml-6 hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <form onSubmit={onSearch} className="ml-auto hidden md:flex w-[320px] items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="pl-9"
            />
          </div>
        </form>

        <div className="ml-auto md:ml-4 flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login / Sign Up</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-brandSerif text-xl">Welcome to Isha Urja</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <Button variant="outline" onClick={handleGoogle}>Continue with Google</Button>
                <p className="text-sm text-muted-foreground">More sign-in options coming soon.</p>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="icon" aria-label="Open cart" onClick={openCart}>
            <ShoppingCart className="h-5 w-5" />
          </Button>
          {itemsCount > 0 && (
            <span className="ml-[-10px] mt-[-20px] inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-primary-foreground">
              {itemsCount}
            </span>
          )}
        </div>
      </div>

      {/* Mobile search */}
      <form onSubmit={onSearch} className="container pb-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="pl-9" />
        </div>
      </form>
    </header>
  );
}
