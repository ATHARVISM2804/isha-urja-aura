import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartProvider";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="container py-16">
        <p>Product not found.</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate(-1)}>Go Back</Button>
      </main>
    );
  }

  return (
    <main className="container py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="w-full rounded" />
        <div>
          <h1 className="font-brandSerif text-3xl md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-lg font-medium">₹{product.price.toFixed(2)}</p>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          <div className="mt-6 flex gap-3">
            <Button variant="hero" onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}>Add to Cart</Button>
            <Button variant="outline" onClick={() => navigate("/shop")}>Back to Shop</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
