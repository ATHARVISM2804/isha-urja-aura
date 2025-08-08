import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartProvider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";


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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query)}`);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4">
        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="font-brandSerif text-xl text-left">Isha Urja</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `text-lg py-2 px-3 rounded-md transition-colors ${
                      isActive 
                        ? "text-primary font-medium bg-primary/10" 
                        : "text-foreground/70 hover:text-foreground hover:bg-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile Search in Menu */}
              <div className="mt-6 pt-6 border-t">
                <form onSubmit={(e) => { onSearch(e); closeMobileMenu(); }}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
                    <Input 
                      value={query} 
                      onChange={(e) => setQuery(e.target.value)} 
                      placeholder="Search products" 
                      className="pl-9" 
                    />
                  </div>
                </form>
              </div>

              {/* Mobile Auth Link */}
              <div className="mt-4">
                <Link to="/auth" onClick={closeMobileMenu}>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Login / Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="font-brandSerif text-xl sm:text-2xl tracking-wide flex-1 md:flex-none">
          Isha Urja
        </Link>

        <nav className="ml-6 hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `text-base ${isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`
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

        <div className="ml-auto flex items-center gap-2">
          <Link to="/auth" className="hidden sm:block">
            <Button variant="ghost" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login / Sign Up</span>
            </Button>
          </Link>

          <Button variant="outline" size="icon" aria-label="Open cart" onClick={openCart}>
            <ShoppingCart className="h-5 w-5" />
          </Button>
          {itemsCount > 0 && (
            <span className="ml-[-10px] mt-[-20px] inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-sm text-primary-foreground">
              {itemsCount}
            </span>
          )}
        </div>
      </div>

      {/* Mobile search - only show when menu is closed */}
      {!isMobileMenuOpen && (
        <form onSubmit={onSearch} className="container pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="pl-9" />
          </div>
        </form>
      )}
    </header>
  );
}
