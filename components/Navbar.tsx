"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu, sekolah } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-[#E5E1D8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                     {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <img
            src="/logo-sdn.png"
            alt={`Logo ${sekolah.namaSingkat}`}
            className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform drop-shadow-sm flex-shrink-0"
          />
          <div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-600 font-semibold mt-0.5">
  <span className="md:hidden">SD NEGERI 3 PELANG</span>
  <span className="hidden md:inline">SEKOLAH DASAR NEGERI 3 PELANG</span>
</div>
          </div>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {menu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-[#0F2C4C]"
                      : "text-gray-600 hover:text-[#0F2C4C]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C9A961]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA PPDB */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/ppdb"
            className="bg-[#0F2C4C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1E5FAA] transition-colors shadow-sm hover:shadow-md"
          >
            Daftar PPDB
          </Link>
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-2xl text-[#0F2C4C]"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden border-t border-[#E5E1D8] bg-white">
          <ul className="px-6 py-4 space-y-1">
            {menu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#FAF8F3] text-[#0F2C4C] font-semibold"
                        : "text-gray-700 hover:bg-[#FAF8F3]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/ppdb"
                onClick={() => setOpen(false)}
                className="block bg-[#0F2C4C] text-white px-4 py-3 rounded-lg text-center font-semibold"
              >
                Daftar PPDB 2025
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}