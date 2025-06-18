'use client';

import Link from "next/link";
import { useCart } from "@/store/cart";

export function CartLink() {
    const count = useCart((state) =>
        state.items.reduce((total, item) => total + item.quantity, 0)
    );

    return (
        <Link href="/cart" className="relative flex items-center">
      <span className="text-base font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer">
        Корзина
      </span>
            {count > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
            )}
        </Link>
    );
}