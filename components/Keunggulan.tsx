"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "./Animate";
import { keunggulan } from "@/lib/data";

export default function Keunggulan() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <FadeInUp className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Keunggulan Kami
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-3 mb-4">
            Mengapa Memilih{" "}
            <span className="text-gradient">SDN 3 Pelang?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Kami menghadirkan pendidikan dasar berkualitas dengan pendekatan
            menyeluruh untuk tumbuh kembang putra-putri Anda.
          </p>
        </FadeInUp>

        {/* Grid 4 Kartu dengan Animasi Stagger */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keunggulan.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Nomor dekoratif */}
                <div className="font-heading text-5xl font-extrabold text-slate-200 mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  0{i + 1}
                </div>

                {/* Ikon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {item.icon}
                </div>

                {/* Judul */}
                <h3 className="font-heading text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.judul}
                </h3>

                {/* Garis dekoratif */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 group-hover:w-20 transition-all duration-300" />

                {/* Deskripsi */}
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {item.deskripsi}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}