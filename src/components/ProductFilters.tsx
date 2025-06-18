'use client';

export function ProductFilters() {
    return (
        <aside className="w-64 p-4 border-r border-border">
            <h2 className="font-semibold text-lg mb-4">Фильтры</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Материал</label>
                <select className="w-full border rounded px-2 py-1">
                    <option value="">Все</option>
                    <option value="Нейлон">Нейлон</option>
                    <option value="Кожа">Кожа</option>
                    <option value="Синтетика">Синтетика</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Цена</label>
                <input type="range" min={1000} max={20000} className="w-full" />
            </div>
        </aside>
    );
}