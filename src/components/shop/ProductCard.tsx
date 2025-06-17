'use client';

import Image from "next/image";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/formatPrice";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
    const addToCart = useCart((state) => state.addToCart);

    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-muted-foreground">{formatPrice(price)} ₽</p>
                <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                    onClick={() => addToCart({ id, name, price, image })}
                >
                    В корзину
                </button>
            </div>
        </div>
    );
}