import Link from "next/link";

import { NAVBAR_ITEMS } from "../lib/constants";

export function Footer() {
  return (
    <div className="w-full h-[150px] flex flex-row justify-center items-center bg-black text-white gap-8">
      <div className="flex flex-row gap-8">
        {NAVBAR_ITEMS.map((item) => (
          <div>
            <Link key={item.label} href={item.href}>
              {item.label.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
      <div className="text-2xl">
        <i className="devicon-github-original"></i>
        <i className="devicon-linkedin-plain"></i>
      </div>
    </div>
  );
}
