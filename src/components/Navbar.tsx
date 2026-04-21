'use client';

import { scrollToSection } from "@lib/scrollToSection";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAVBAR_ITEMS } from '@lib/constants';
import { scrollToSection } from '@lib/scrollToSection';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof NAVBAR_ITEMS)[number]
  ) => {
    scrollToSection(e, item, pathname);
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[1000] flex h-[75px] w-full flex-row items-center justify-end px-8 text-lg font-bold text-white transition-colors duration-300 ${
          scrolled || menuOpen ? 'bg-[#111111]' : 'bg-transparent'
        }`}
      >
        <nav className="hidden flex-row items-center gap-8 md:flex">
          {NAVBAR_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="transition-opacity duration-150 hover:opacity-70"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <button
          className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-[2px] w-6 origin-center rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? 'scale-x-0 opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 origin-center rounded-full bg-white transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-10 bg-[#111111] transition-all duration-300 md:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {NAVBAR_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            className="text-xl font-bold tracking-widest text-white transition-opacity duration-150 hover:opacity-60"
          >
            {item.label.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}
