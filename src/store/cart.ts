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
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

export const useCart = create<CartState>((set) => ({
    items: [],
    addToCart: (item) =>
        set((state) => {
            const existing = state.items.find((i) => i.id === item.id);
            if (existing) {
                return {
                    items: state.items.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                };
            }
            return {
                items: [...state.items, { ...item, quantity: 1 }],
            };
        }),
    increaseQuantity: (id) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })),
    decreaseQuantity: (id) =>
        set((state) => ({
            items: state.items
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0),
        })),
    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),
}));