// app/shop/[category]/[type]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function SubCategoryPage() {
    const { category, type } = useParams();

    const filtered = products.filter(
        (product) =>
            product.category === category && product.type === type
    );

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                {category} / {type}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filtered.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
}