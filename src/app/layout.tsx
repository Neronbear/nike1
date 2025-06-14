import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

// Подключаем кастомные переменные CSS для шрифта
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nike Style",
    description: "Каталог товаров в стиле Nike",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header />
        <main className="p-0 m-0">{children}</main>
        </body>
        </html>
    );
}