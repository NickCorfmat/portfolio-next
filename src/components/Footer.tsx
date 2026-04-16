import Link from "next/link";

import { NAVBAR_ITEMS } from "@lib/constants";

export function Footer() {
  return (
    <div className="w-full h-[150px] flex flex-row justify-center items-center bg-black text-white text-sm gap-24">
      <div className="flex flex-row gap-12">
        {NAVBAR_ITEMS.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-6 text-xl">
        <a href="https://www.linkedin.com/in/nicolascorfmat/">
          <i className="devicon-github-original"></i>
        </a>
        <a href="https://github.com/NickCorfmat">
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="mailto:nfcorfmat@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
