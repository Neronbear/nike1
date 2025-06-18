'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductFilters } from '@/components/ProductFilters';

export default function ShoeModelPage() {
    const { model } = useParams<{ model: string }>();

    const modelProducts = products.filter(
        (product) => product.category === 'shoes' && product.type === model
    );

    return (
        <main className="flex p-6 gap-6">
            {/* Левая панель фильтров */}
            <ProductFilters />

            {/* Контент */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Модель: {model}</h1>

                {modelProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modelProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <p>Нет товаров для модели <strong>{model}</strong>.</p>
                )}
            </div>
        </main>
    );
}