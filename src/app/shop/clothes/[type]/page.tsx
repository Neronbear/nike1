// src/app/shop/clothes/[type]/page.tsx

'use client';

import { useParams } from 'next/navigation';

export default function ClothesCategoryPage() {
    const params = useParams();
    const type = params.type;

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Одежда: {type}</h1>
            <p>Тут будет список товаров категории "{type}".</p>
        </div>
    );
}