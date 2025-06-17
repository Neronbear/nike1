'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MegaMenu } from "./MegaMenu";
import { CartLink } from "./CartLink";

export function Header() {
    const pathname = usePathname();

    return (
        <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Навигация */}
                <nav className="flex gap-10">
                    <MegaMenu
                        label="Главная"
                        href="/"
                        isActive={pathname === "/"}
                        content={
                            <>
                                <MenuColumn title="Разделы" items={["Актуальное", "Новинки", "События"]} />
                                <MenuColumn title="Рекомендации" items={["Для тебя", "Сезонное", "Тренды"]} />
                                <MenuColumn title="Сервисы" items={["Подписка", "Nike Club", "Подарочные карты"]} />
                                <MenuColumn title="Медиа" items={["Nike TV", "Истории", "Новости"]} />
                            </>
                        }
                    />
                    <MegaMenu
                        label="О нас"
                        href="/about"
                        isActive={pathname === "/about"}
                        content={
                            <>
                                <MenuColumn title="Компания" items={["История", "Миссия", "Карьера"]} />
                                <MenuColumn title="Проекты" items={["Кампании", "Сообщества", "Экология"]} />
                                <MenuColumn title="Для инвесторов" items={["Публичные отчёты", "Презентации", "Контакты"]} />
                                <MenuColumn title="Партнёрам" items={["Оптовикам", "Дистрибуторам", "Аффилиатам"]} />
                            </>
                        }
                    />
                    <MegaMenu
                        label="Каталог"
                        href="/shop"
                        isActive={pathname === "/shop"}
                        content={
                            <>
                                <MenuColumn title="Обувь" items={["Air Max", "Jordan", "Blazer"]} />
                                <MenuColumn title="Одежда" items={["Куртки", "Футболки", "Штаны"]} />
                                <MenuColumn title="Аксессуары" items={["Рюкзаки", "Кепки", "Носки"]} />
                                <MenuColumn title="Спорт" items={["Бег", "Баскетбол", "Футбол"]} />
                            </>
                        }
                    />
                    <MegaMenu
                        label="Контакты"
                        href="/contact"
                        isActive={pathname === "/contact"}
                        content={
                            <>
                                <MenuColumn title="Мы на связи" items={["Связаться", "Магазины", "Поддержка"]} />
                                <MenuColumn title="Помощь" items={["Частые вопросы", "Доставка", "Возврат"]} />
                                <MenuColumn title="Поддержка" items={["Техническая", "Сообщить об ошибке"]} />
                                <MenuColumn title="Сотрудничество" items={["Стать партнёром", "СМИ", "Инфлюенсеры"]} />
                            </>
                        }
                    />
                </nav>

                {/* Корзина */}
                <CartLink />
            </div>
        </header>
    );
}

function MenuColumn({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <div className="font-bold mb-2">{title}</div>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item}>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition">
              {item}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}