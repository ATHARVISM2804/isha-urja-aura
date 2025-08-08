import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const [cat, setCat] = useState<string>(params.get("cat") || "All");

  const filtered = useMemo(() => {
    return products.filter((p) =>
      (cat === "All" || p.category === cat) &&
      (q.length === 0 || p.name.toLowerCase().includes(q))
    );
  }, [q, cat]);

  const onCategoryChange = (value: string) => {
    setCat(value);
    const ps = new URLSearchParams(location.search);
    if (value === "All") ps.delete("cat"); else ps.set("cat", value);
    navigate({ search: ps.toString() });
  };

  return (
    <main className="container py-10">
      <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-brandSerif text-3xl">Shop</h1>
        <div className="flex items-center gap-3">
          <Select value={cat} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-[260px]"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            onView={() => navigate(`/product/${p.slug}`)}
          />
        ))}
      </section>
    </main>
  );
}
