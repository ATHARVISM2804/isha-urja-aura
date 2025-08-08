import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/cart/CartProvider";

type Props = {
  id: string;
  name: string;
  price: number;
  image: string;
  onView?: () => void;
};

export function ProductCard({ id, name, price, image, onView }: Props) {
  const { addItem } = useCart();
  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3]">
          <img src={image} alt={`${name} product image`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">₹{price.toFixed(2)}</p>
          <div className="mt-3 flex gap-2">
            <Button variant="outline" onClick={onView}>View</Button>
            <Button variant="hero" onClick={() => addItem({ id, name, price, image })}>Add to Cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
