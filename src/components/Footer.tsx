"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_ITEMS } from "@lib/constants";
import { scrollToSection } from "@lib/scrollToSection";
import { techIconMap } from "@lib/constants";

export function Footer() {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-[200px] flex flex-col justify-between items-center bg-black text-white text-sm font-bold py-12 md:py-14 gap-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-xs md:text-sm">
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

        <div className="flex flex-row gap-6 text-lg md:text-xl">
          <a href="https://github.com/NickCorfmat">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/nicolascorfmat/">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="mailto:nfcorfmat@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      <p className="flex flex-wrap justify-center items-center gap-2 text-white/40 text-xs font-bold text-center px-4">
        Built with
        <i className="fa-regular fa-heart"></i>
        using
        <span className="inline-flex items-center gap-1">
          <img src={techIconMap["Next.js"]} alt="Next.js" className="w-4 h-4" />
          next.js
        </span>
        and
        <span className="inline-flex items-center gap-1">
          <img
            src={techIconMap["Tailwind"]}
            alt="Tailwind"
            className="w-4 h-4"
          />
          tailwind
        </span>
      </p>
    </div>
  );
}
