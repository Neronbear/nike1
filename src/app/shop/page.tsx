import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export default function ShopPage() {
    return (
        <main className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
}