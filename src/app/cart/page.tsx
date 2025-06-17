'use client';

import { useCart } from "@/store/cart";
import Image from "next/image";
import { X } from "lucide-react"; // иконка-крестик (если используешь lucide)

export default function CartPage() {
    const items = useCart((state) => state.items);
    const removeFromCart = useCart((state) => state.removeFromCart);

    if (items.length === 0) {
        return <div className="p-10 text-center text-muted-foreground">Корзина пуста</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>
            <ul className="space-y-6">
                {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-6 border rounded-lg p-4">
                        <div className="relative">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="rounded-md"
                            />
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="absolute top-[-8px] right-[-8px] bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-md transition"
                                aria-label="Удалить"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-muted-foreground">Цена: {item.price} ₽</p>
                            <p className="text-muted-foreground">Количество: {item.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}