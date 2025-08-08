import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartProvider";

export function CartSheet() {
  const { isOpen, closeCart, items, total, removeItem, updateQty } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? undefined : closeCart())}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-brandSerif">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-base text-muted-foreground">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" loading="lazy" />
                <div className="flex-1">
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-base text-muted-foreground">₹{item.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>-</Button>
                    <span className="text-base">{item.qty}</span>
                    <Button variant="outline" size="sm" onClick={() => updateQty(item.id, item.qty + 1)}>+</Button>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => removeItem(item.id)}>Remove</Button>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="font-medium">Total</p>
          <p className="text-lg font-semibold">₹{total.toFixed(2)}</p>
        </div>
        <Button className="mt-4 w-full" variant="hero">Checkout</Button>
      </SheetContent>
    </Sheet>
  );
}
