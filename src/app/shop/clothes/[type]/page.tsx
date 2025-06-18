'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductFilters } from '@/components/ProductFilters';

export default function ClothesCategoryPage() {
    const { type } = useParams<{ type: string }>();

    const filteredProducts = products.filter(
        (product) => product.category === 'clothes' && product.type === type
    );

    return (
        <main className="flex p-6 gap-6">
            {/* Слева фильтры */}
            <ProductFilters />

            {/* Справа карточки товаров */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Одежда: {type}</h1>

                {filteredProducts.length === 0 ? (
                    <p>Нет товаров в категории: {type}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}