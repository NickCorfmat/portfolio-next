"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAVBAR_ITEMS } from "@lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[75px] flex flex-row justify-center items-center text-md text-white gap-8 z-[1000] transition-colors duration-300 ${
        scrolled ? "bg-[#111111]" : "bg-transparent"
      }`}
    >
      {NAVBAR_ITEMS.map((item) => (
        <Link key={item.label} href={item.href}>
          {item.label.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
