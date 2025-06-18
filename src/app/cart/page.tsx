'use client';

import { useCart } from "@/store/cart";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";

export default function CartPage() {
    const { items, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>

            {items.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <div className="space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                            <Image src={item.image} alt={item.name} width={100} height={100} className="rounded" />
                            <div className="flex-1">
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-muted-foreground">{formatPrice(item.price)} ₽</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 border rounded">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 border rounded">+</button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 hover:underline">
                                Удалить
                            </button>
                        </div>
                    ))}
                    <div className="text-xl font-bold mt-6">Итого: {formatPrice(total)} ₽</div>
                </div>
            )}
        </main>
    );
}