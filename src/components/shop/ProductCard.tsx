'use client';

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/formatPrice";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export function ProductCard(product: Product) {
    const addToCart = useCart((state) => state.addToCart);

    return (
        <Link href={`/shop/${product.id}`} className="block group">
            <div className="relative border rounded-xl overflow-hidden hover:shadow-md transition">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                />
                <div className="p-4">
                    <h3 className="font-semibold group-hover:underline">{product.name}</h3>
                    <p className="text-muted-foreground">{formatPrice(product.price)} ₽</p>
                    <button
                        onClick={(e) => {
                            e.preventDefault(); // чтобы не переходило по ссылке
                            addToCart(product);
                        }}
                        className="mt-2 text-sm px-4 py-2 border rounded hover:bg-black hover:text-white transition"
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </Link>
    );
}