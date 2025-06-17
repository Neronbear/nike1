import Image from "next/image";

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{name}</h3>
                <p className="text-muted-foreground mb-2">{price.toLocaleString()} ₽</p>
                <button className="mt-auto inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                    В корзину
                </button>
            </div>
        </div>
    );
}