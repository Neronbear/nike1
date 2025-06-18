import { use } from "react";
import { notFound } from "next/navigation";

interface Props {
    params: {
        model: string;
    };
}

const validModels = ["air-max", "jordan", "blazer"];

export default function ShoeModelPage({ params }: Props) {
    const { model } = params;

    if (!validModels.includes(model)) {
        notFound(); // 404, если модель не существует
    }

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">Модель: {model.replace("-", " ")}</h1>
            <p>Здесь будут отображены товары из серии <strong>{model}</strong>.</p>
        </main>
    );
}