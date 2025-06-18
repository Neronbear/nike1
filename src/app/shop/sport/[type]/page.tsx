'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function SportTypePage() {
    const { type } = useParams<{ type: string }>();

    const filteredProducts = products.filter(
        (product) => product.category === 'sport' && product.type === type
    );

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Раздел спорта: {type}</h1>

            {filteredProducts.length === 0 ? (
                <p>Нет товаров в подкатегории: {type}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            )}
        </main>
    );
}