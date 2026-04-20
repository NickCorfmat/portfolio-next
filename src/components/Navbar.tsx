"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAVBAR_ITEMS } from "@lib/constants";
import { scrollToSection } from "@lib/scrollToSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[75px] flex flex-row justify-end items-center px-12 text-lg font-bold text-white gap-8 z-[1000] transition-colors duration-300 ${
        scrolled ? "bg-[#111111]" : "bg-transparent"
      }`}
    >
      {NAVBAR_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={(e) => scrollToSection(e, item, pathname)}
        >
          {item.label.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
