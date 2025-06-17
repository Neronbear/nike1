// src/app/shop/[id]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products"; // массив с товарами
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";

type Props = {
    params: {
        id: string;
    };
};

export default function ProductPage({ params }: Props) {
    const productId = Number(params.id);
    const product = products.find((p) => p.id === productId);

    if (!product) return notFound();

    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                />

                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-muted-foreground mb-6">{formatPrice(product.price)} ₽</p>

                    <div className="space-y-2">
                        <p className="text-sm">🏷 Категория: {product.category}</p>
                        <p className="text-sm">🧵 Материал: {product.material || "Не указано"}</p>
                        <p className="text-sm">📦 В наличии: {product.stock || "Много"}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}