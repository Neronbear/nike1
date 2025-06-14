'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
    label: string;
    href?: string;
    content: React.ReactNode;
}

export function MegaMenu({ label, href = "#", content }: MegaMenuProps) {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150); // небольшая задержка
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={href}
                className="text-base font-semibold text-muted-foreground transition-colors hover:text-foreground px-2"
            >
                {label}
            </Link>

            {open && (
                <div className="fixed top-[64px] left-0 w-full z-40 bg-white shadow-md border-t border-border">
                    <div
                        className="mx-auto max-w-7xl px-8 py-10 grid grid-cols-4 gap-8"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {content}
                    </div>
                </div>
            )}
        </div>
    );
}