import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
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

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query)}`);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-xl shadow-lg shadow-black/5">
      <style>
        {`
        @keyframes shimmerMove {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(300%) rotate(45deg); }
        }
        @keyframes luxuryGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.1); }
          50% { box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.2), 0 0 40px rgba(var(--primary-rgb), 0.1); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.3)); }
          50% { filter: drop-shadow(0 0 16px rgba(var(--primary-rgb), 0.5)); }
        }
        @keyframes searchGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.2), inset 0 1px 0 rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 40px rgba(139, 69, 19, 0.4), inset 0 1px 0 rgba(255,255,255,0.2); }
        }
        @keyframes logoShine {
          0% { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes luxuryButtonGlow {
          0%, 100% { 
            box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.15), 
                        inset 0 1px 0 rgba(255,255,255,0.1),
                        0 0 0 1px rgba(var(--primary-rgb), 0.1); 
          }
          50% { 
            box-shadow: 0 8px 30px rgba(var(--primary-rgb), 0.3), 
                        inset 0 1px 0 rgba(255,255,255,0.2),
                        0 0 0 1px rgba(var(--primary-rgb), 0.2); 
          }
        }
        @keyframes cartPulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(-2deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(2deg); }
        }
        @keyframes luxuryRipple {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          100% { transform: scale(2) rotate(180deg); opacity: 0; }
        }
        .luxury-shimmer {
          position: relative;
          overflow: hidden;
        }
        .luxury-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: translateX(-100%) rotate(45deg);
          transition: transform 0.6s ease;
          z-index: 1;
        }
        .luxury-shimmer:hover::before {
          animation: shimmerMove 0.8s ease-out;
        }
        .floating-element:hover {
          animation: floatUp 2s ease-in-out infinite;
        }
        .glow-pulse:hover {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .luxury-border {
          background: linear-gradient(45deg, transparent, rgba(var(--primary-rgb), 0.1), transparent);
          background-size: 300% 300%;
          animation: luxuryGlow 3s ease-in-out infinite;
        }
        .logo-shine {
          background: linear-gradient(90deg, 
            hsl(var(--primary)) 0%, 
            hsl(var(--primary)) 20%, 
            hsl(var(--primary)/0.8) 40%, 
            hsl(var(--primary)) 60%, 
            hsl(var(--primary)) 80%, 
            hsl(var(--primary)) 100%);
          background-size: 100% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logo-shine:hover {
          animation: logoShine 2s ease-in-out infinite;
          background: linear-gradient(90deg, 
            hsl(var(--primary)/1.2) 0%, 
            hsl(var(--primary)/1.1) 20%, 
            hsl(var(--primary)) 40%, 
            hsl(var(--primary)/1.1) 60%, 
            hsl(var(--primary)/1.2) 80%, 
            hsl(var(--primary)/1.2) 100%);
        }
        .logo-shine:active {
          background: linear-gradient(90deg, 
            hsl(var(--primary)/1.4) 0%, 
            hsl(var(--primary)/1.3) 20%, 
            hsl(var(--primary)/1.2) 40%, 
            hsl(var(--primary)/1.3) 60%, 
            hsl(var(--primary)/1.4) 80%, 
            hsl(var(--primary)/1.4) 100%);
          transform: scale(1.05);
        }
        .premium-search {
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.15) 0%, 
            rgba(160, 82, 45, 0.1) 25%,
            rgba(139, 69, 19, 0.08) 50%, 
            rgba(160, 82, 45, 0.1) 75%,
            rgba(139, 69, 19, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 69, 19, 0.3);
        }
        .premium-search:focus {
          animation: searchGlow 2s ease-in-out infinite;
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.2) 0%, 
            rgba(160, 82, 45, 0.15) 25%,
            rgba(139, 69, 19, 0.12) 50%, 
            rgba(160, 82, 45, 0.15) 75%,
            rgba(139, 69, 19, 0.2) 100%);
          border: 1px solid rgba(139, 69, 19, 0.5);
        }
        .premium-search:hover {
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.18) 0%, 
            rgba(160, 82, 45, 0.12) 25%,
            rgba(139, 69, 19, 0.1) 50%, 
            rgba(160, 82, 45, 0.12) 75%,
            rgba(139, 69, 19, 0.18) 100%);
          border: 1px solid rgba(139, 69, 19, 0.4);
        }
        .luxury-button {
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.08) 0%, 
            rgba(160, 82, 45, 0.05) 50%, 
            rgba(139, 69, 19, 0.08) 100%);
          border: 1px solid rgba(139, 69, 19, 0.4);
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          color: hsl(var(--foreground));
        }
        .luxury-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            transparent, 
            rgba(139, 69, 19, 0.15), 
            transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .luxury-button:hover::before {
          transform: translateX(100%);
        }
        .luxury-button:hover {
          animation: luxuryButtonGlow 2s ease-in-out infinite;
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.18) 0%, 
            rgba(160, 82, 45, 0.12) 50%, 
            rgba(139, 69, 19, 0.18) 100%);
          border: 1px solid rgba(139, 69, 19, 0.7);
          transform: translateY(-4px) scale(1.05);
          color: rgba(139, 69, 19, 1);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.25);
        }
        .luxury-button:active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: luxuryRipple 0.6s ease-out;
        }
        .cart-luxury {
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.05) 0%, 
            rgba(160, 82, 45, 0.08) 50%, 
            rgba(139, 69, 19, 0.05) 100%);
          border: 1px solid rgba(139, 69, 19, 0.4);
          backdrop-filter: blur(15px);
          color: hsl(var(--foreground));
        }
        .cart-luxury:hover {
          animation: luxuryButtonGlow 2s ease-in-out infinite, cartPulse 1s ease-in-out infinite;
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.15) 0%, 
            rgba(160, 82, 45, 0.18) 50%, 
            rgba(139, 69, 19, 0.15) 100%);
          border: 1px solid rgba(139, 69, 19, 0.7);
          transform: translateY(-6px) scale(1.1);
          color: rgba(139, 69, 19, 1);
          box-shadow: 0 10px 30px rgba(139, 69, 19, 0.3);
        }
        `}
      </style>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="container relative flex h-20 items-center gap-6">

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 rounded-xl bg-gradient-to-br from-background to-muted/50 border border-border/50 luxury-shimmer floating-element hover:shadow-2xl hover:shadow-primary/20 hover:scale-110 hover:rotate-3 transition-all duration-500 hover:from-primary/15 hover:to-primary/10 group"
            >
              <Menu className="h-5 w-5 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[320px] sm:w-[400px] bg-gradient-to-br from-background via-background to-muted/20 border-r border-border/30 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <SheetHeader className="relative">
              <SheetTitle className="font-brandSerif text-xl text-left text-primary font-bold tracking-wide flex items-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1754750548/asgtehj_gu63sc.jpg"
                  alt="Isha"
                  className="h-8 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="relative flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `text-[1rem] py-3 px-4 rounded-xl transition-all duration-700 font-medium tracking-wide whitespace-nowrap luxury-shimmer group relative ${
                      isActive
                        ? "text-primary font-semibold bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 shadow-lg glow-pulse"
                        : "text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.08] hover:-translate-y-1 floating-element"
                    }`
                  }
                >
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-500">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          to="/"
          className="flex-1 md:flex-none transition-all duration-300"
        >
          <img 
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1754750548/asgtehj_gu63sc.jpg"
            alt="Isha"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav with luxury effects */}
        <nav className="ml-8 hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `relative text-[0.95rem] font-medium px-4 py-2 whitespace-nowrap rounded-xl tracking-wide transition-all duration-700 luxury-shimmer group overflow-hidden ${
                  isActive
                    ? "text-primary font-semibold bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 shadow-lg glow-pulse"
                    : "text-foreground/80 hover:text-foreground hover:bg-gradient-to-br hover:from-primary/8 hover:via-primary/12 hover:to-primary/6 hover:border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 hover:scale-[1.12] hover:-translate-y-2 floating-element"
                }`
              }
            >
              <span className="relative z-20 group-hover:tracking-wider transition-all duration-500">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
            </NavLink>
          ))}
        </nav>

        {/* Desktop Search */}
        <form onSubmit={onSearch} className="ml-auto hidden md:flex w-[350px] items-center gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-amber-800/15 to-amber-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-900 group-focus-within:text-amber-800 group-focus-within:scale-125 group-focus-within:rotate-12 transition-all duration-500 z-10" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search luxury products..."
              className="pl-11 h-11 rounded-xl premium-search focus:border-amber-800/60 focus:ring-amber-800/30 focus:ring-2 transition-all duration-700 focus:scale-[1.03] hover:shadow-lg relative z-10 backdrop-blur-xl text-foreground placeholder:text-amber-900/60"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-amber-800/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </form>

        {/* Auth & Cart */}
        <div className="ml-auto flex items-center gap-3">
          <Link to="/auth" className="hidden sm:block">
            <Button
              className="gap-3 h-12 px-6 rounded-2xl luxury-button font-semibold text-sm tracking-wide transition-all duration-700 group relative z-10"
            >
              <User className="h-5 w-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <span className="hidden sm:inline group-hover:tracking-widest transition-all duration-500">Login / Sign Up</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-900/5 via-amber-800/10 to-amber-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Button>
          </Link>

          <div className="relative">
            <Button
              size="icon"
              aria-label="Open cart"
              onClick={openCart}
              className="h-12 w-12 rounded-2xl cart-luxury transition-all duration-700 group relative z-10"
            >
              <ShoppingCart className="h-6 w-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-900/10 via-amber-800/15 to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Button>
            {itemsCount > 0 && (
              <span className="absolute -top-3 -right-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 px-2 text-xs font-bold text-white shadow-2xl ring-3 ring-background/50 backdrop-blur-sm floating-element glow-pulse">
                {itemsCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
