
import { create } from 'zustand';

type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    getCount: () => number;
};

export const useCart = create<CartState>((set, get) => ({
    items: [],
    addToCart: (item) => {
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);

        if (existing) {
            set({
                items: items.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
            });
        } else {
            set({
                items: [...items, { ...item, quantity: 1 }],
            });
        }
    },
    removeFromCart: (id) => {
        set({
            items: get().items.filter((item) => item.id !== id),
        });
    },
    getCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));