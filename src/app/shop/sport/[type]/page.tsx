'use client';

import { useParams } from 'next/navigation';

export default function SportTypePage() {
    const { type } = useParams();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Раздел спорта: {type}</h1>
            <p>Страница подкатегории: {type}</p>
        </main>
    );
}