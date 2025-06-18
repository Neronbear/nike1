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
                                <MenuColumn
                                    title="Разделы"
                                    items={[
                                        { label: "Актуальное", href: "/featured" },
                                        { label: "Новинки", href: "/new" },
                                        { label: "События", href: "/events" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Рекомендации"
                                    items={[
                                        { label: "Для тебя", href: "/for-you" },
                                        { label: "Сезонное", href: "/season" },
                                        { label: "Тренды", href: "/trends" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Сервисы"
                                    items={[
                                        { label: "Подписка", href: "/subscription" },
                                        { label: "Nike Club", href: "/club" },
                                        { label: "Подарочные карты", href: "/gifts" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Медиа"
                                    items={[
                                        { label: "Nike TV", href: "/tv" },
                                        { label: "Истории", href: "/stories" },
                                        { label: "Новости", href: "/news" },
                                    ]}
                                />
                            </>
                        }
                    />

                    <MegaMenu
                        label="О нас"
                        href="/about"
                        isActive={pathname === "/about"}
                        content={
                            <>
                                <MenuColumn
                                    title="Компания"
                                    items={[
                                        { label: "История", href: "/about/history" },
                                        { label: "Миссия", href: "/about/mission" },
                                        { label: "Карьера", href: "/about/career" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Проекты"
                                    items={[
                                        { label: "Кампании", href: "/projects/campaigns" },
                                        { label: "Сообщества", href: "/projects/community" },
                                        { label: "Экология", href: "/projects/eco" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Для инвесторов"
                                    items={[
                                        { label: "Публичные отчёты", href: "/investors/reports" },
                                        { label: "Презентации", href: "/investors/presentations" },
                                        { label: "Контакты", href: "/investors/contacts" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Партнёрам"
                                    items={[
                                        { label: "Оптовикам", href: "/partners/wholesale" },
                                        { label: "Дистрибуторам", href: "/partners/distributors" },
                                        { label: "Аффилиатам", href: "/partners/affiliates" },
                                    ]}
                                />
                            </>
                        }
                    />

                    <MegaMenu
                        label="Каталог"
                        href="/shop"
                        isActive={pathname === "/shop"}
                        content={
                            <>
                                <MenuColumn
                                    title="Обувь"
                                    items={[
                                        { label: "football", href: "/shop/shoes/air-max" },
                                        { label: "basketball", href: "/shop/shoes/jordan" },
                                        { label: "street", href: "/shop/shoes/blazer" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Одежда"
                                    items={[
                                        { label: "Куртки", href: "/shop/clothes/jackets" },
                                        { label: "Футболки", href: "/shop/clothes/tshirts" },
                                        { label: "Штаны", href: "/shop/clothes/pants" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Аксессуары"
                                    items={[
                                        { label: "Рюкзаки", href: "/shop/accessories/backpacks" },
                                        { label: "Кепки", href: "/shop/accessories/caps" },
                                        { label: "Носки", href: "/shop/accessories/socks" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Спорт"
                                    items={[
                                        { label: "Бег", href: "/shop/sport/running" },
                                        { label: "Баскетбол", href: "/shop/sport/basketball" },
                                        { label: "Футбол", href: "/shop/sport/football" },
                                    ]}
                                />
                            </>
                        }
                    />

                    <MegaMenu
                        label="Контакты"
                        href="/contact"
                        isActive={pathname === "/contact"}
                        content={
                            <>
                                <MenuColumn
                                    title="Мы на связи"
                                    items={[
                                        { label: "Связаться", href: "/contact/connect" },
                                        { label: "Магазины", href: "/contact/stores" },
                                        { label: "Поддержка", href: "/contact/support" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Помощь"
                                    items={[
                                        { label: "Частые вопросы", href: "/help/faq" },
                                        { label: "Доставка", href: "/help/shipping" },
                                        { label: "Возврат", href: "/help/returns" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Поддержка"
                                    items={[
                                        { label: "Техническая", href: "/support/tech" },
                                        { label: "Сообщить об ошибке", href: "/support/bug" },
                                    ]}
                                />
                                <MenuColumn
                                    title="Сотрудничество"
                                    items={[
                                        { label: "Стать партнёром", href: "/partners/new" },
                                        { label: "СМИ", href: "/partners/media" },
                                        { label: "Инфлюенсеры", href: "/partners/influencers" },
                                    ]}
                                />
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

function MenuColumn({
                        title,
                        items,
                    }: {
    title: string;
    items: { label: string; href: string }[];
}) {
    return (
        <div>
            <div className="font-bold mb-2">{title}</div>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground transition"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}