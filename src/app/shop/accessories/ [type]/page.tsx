'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductFilters } from '@/components/ProductFilters';

export default function AccessoryTypePage() {
    const { type } = useParams();
    const filtered = products.filter(
        (p) => p.category === 'accessories' && p.type === type
    );

    return (
        <main className="flex p-6 gap-6">
            <ProductFilters />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
}