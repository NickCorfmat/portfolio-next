"use client";

import Link from "next/link";

import { NAVBAR_ITEMS } from "../lib/constants";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[95px] flex flex-row justify-center items-center bg-black text-md text-white gap-8">
      {NAVBAR_ITEMS.map((item) => (
        <div>
          <Link key={item.label} href={item.href}>
            {item.label.toUpperCase()}
          </Link>
        </div>
      ))}
    </div>
  );
}
