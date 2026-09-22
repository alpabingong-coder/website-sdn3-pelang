"use client";

import { useState } from "react";
import Link from "next/link";
import { menu, sekolah } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Nama Sekolah */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#1E5FAA] rounded-full flex items-center justify-center text-white font-bold text-lg">
            SD
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-[#1E5FAA] leading-tight">
              {sekolah.namaSingkat}
            </div>
            <div className="text-xs text-gray-500">
              NPSN {sekolah.npsn} • Akreditasi {sekolah.akreditasi}
            </div>
          </div>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-[#1E5FAA] font-medium transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/ppdb"
              className="bg-[#E63946] text-white px-5 py-2 rounded-md hover:bg-[#c52d3a] transition font-medium"
            >
              PPDB 2025
            </Link>
          </li>
        </ul>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-[#1E5FAA]"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile (dropdown) */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <ul className="px-4 py-4 space-y-3">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-[#1E5FAA] font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/ppdb"
                onClick={() => setOpen(false)}
                className="block bg-[#E63946] text-white px-5 py-2 rounded-md text-center font-medium"
              >
                PPDB 2025
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}