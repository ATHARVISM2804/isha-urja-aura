export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-secondary/30">
      <div className="container grid gap-10 py-10 md:grid-cols-4">
        <div>
          <h3 className="font-brandSerif text-xl">Isha Urja</h3>
          <p className="mt-3 text-base text-muted-foreground">
            Premium Ayurvedic skincare and wellness crafted with devotion to nature.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-lg">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-base">
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/gifting" className="hover:underline">Gifting</a></li>
            <li><a href="/custom-order" className="hover:underline">Custom Order</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg">Policies</h4>
          <ul className="mt-3 space-y-2 text-base">
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg">Newsletter</h4>
          <p className="mt-3 text-base text-muted-foreground">Sign up for rituals, tips and offers.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 rounded-md border bg-background px-3 py-2 text-base" />
            <button className="rounded-md bg-primary px-4 text-base text-primary-foreground">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Isha Urja. All rights reserved.</div>
    </footer>
  );
}
