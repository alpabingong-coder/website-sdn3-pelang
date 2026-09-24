"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, artikel, kategoriArtikel } from "@/lib/data";

function formatTanggal(tanggal: string) {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArtikelPage() {
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = artikel
    .filter((a) => (filter === "Semua" ? true : a.kategori === filter))
    .filter(
      (a) =>
        search === "" ||
        a.judul.toLowerCase().includes(search.toLowerCase()) ||
        a.ringkasan.toLowerCase().includes(search.toLowerCase())
    );

  const artikelPopuler = [...artikel]
    .sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime())
    .slice(0, 4);

  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Berita & Artikel
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Informasi Terbaru {sekolah.namaSingkat}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Kabar terbaru, prestasi, pengumuman, dan informasi penting seputar
            kegiatan sekolah.
          </p>
        </div>
      </section>

      {/* KONTEN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* KIRI: FILTER + LIST ARTIKEL */}
            <div className="lg:col-span-2">
              {/* Filter Kategori */}
              <div className="flex flex-wrap gap-2 mb-8">
                {kategoriArtikel.map((kat) => (
                  <button
                    key={kat}
                    onClick={() => setFilter(kat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                      filter === kat
                        ? "bg-[#1E5FAA] text-white"
                        : "bg-[#F5F9FF] text-[#1E5FAA] hover:bg-[#1E5FAA] hover:text-white"
                    }`}
                  >
                    {kat}
                  </button>
                ))}
              </div>

              {/* Info jumlah */}
              <p className="text-sm text-gray-500 mb-6">
                Menampilkan <strong className="text-[#1E5FAA]">{filtered.length}</strong> artikel
                {filter !== "Semua" && ` di kategori "${filter}"`}
              </p>

              {/* List Artikel */}
              {filtered.length > 0 ? (
                <div className="space-y-6">
                  {filtered.map((a) => (
                    <article
                      key={a.slug}
                      className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col sm:flex-row"
                    >
                      {/* Thumbnail */}
                      <Link
                        href={`/artikel/${a.slug}`}
                        className={`sm:w-48 aspect-video sm:aspect-square bg-gradient-to-br ${a.warna} flex items-center justify-center text-5xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {a.emoji}
                      </Link>

                      {/* Konten */}
                      <div className="p-5 flex-1">
                        <div className="flex items-center gap-3 mb-2 text-xs flex-wrap">
                          <span className="bg-[#F5F9FF] text-[#1E5FAA] font-semibold px-2 py-1 rounded">
                            {a.kategori}
                          </span>
                          <span className="text-gray-400">
                            📅 {formatTanggal(a.tanggal)}
                          </span>
                          <span className="text-gray-400">✍️ {a.penulis}</span>
                        </div>

                        <h3 className="text-lg font-bold text-[#1E5FAA] mb-2 group-hover:text-[#E63946] transition leading-snug">
                          <Link href={`/artikel/${a.slug}`}>{a.judul}</Link>
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                          {a.ringkasan}
                        </p>

                        <Link
                          href={`/artikel/${a.slug}`}
                          className="text-[#E63946] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Baca selengkapnya →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-[#F5F9FF] rounded-2xl">
                  <div className="text-6xl mb-4">📭</div>
                  <p className="text-gray-500">
                    Tidak ada artikel yang cocok.
                  </p>
                </div>
              )}
            </div>

            {/* KANAN: SIDEBAR */}
            <aside className="space-y-6">
              {/* Search */}
              <div className="bg-[#F5F9FF] p-5 rounded-xl">
                <h3 className="font-bold text-[#1E5FAA] mb-3 text-sm">
                  🔍 Pencarian
                </h3>
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
              </div>

              {/* Populer */}
              <div className="bg-[#F5F9FF] p-5 rounded-xl">
                <h3 className="font-bold text-[#1E5FAA] mb-4 text-sm">
                  🔥 Artikel Terbaru
                </h3>
                <ul className="space-y-3">
                  {artikelPopuler.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/artikel/${a.slug}`}
                        className="flex gap-3 group"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${a.warna} flex items-center justify-center text-xl flex-shrink-0`}
                        >
                          {a.emoji}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-gray-700 group-hover:text-[#1E5FAA] transition line-clamp-2 leading-snug">
                            {a.judul}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {formatTanggal(a.tanggal)}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kategori */}
              <div className="bg-[#F5F9FF] p-5 rounded-xl">
                <h3 className="font-bold text-[#1E5FAA] mb-4 text-sm">
                  📁 Kategori
                </h3>
                <ul className="space-y-2">
                  {kategoriArtikel.slice(1).map((kat) => (
                    <li key={kat}>
                      <button
                        onClick={() => setFilter(kat)}
                        className="w-full text-left text-sm text-gray-600 hover:text-[#1E5FAA] transition flex items-center justify-between"
                      >
                        <span>{kat}</span>
                        <span className="text-xs text-gray-400">
                          ({artikel.filter((a) => a.kategori === kat).length})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white p-5 rounded-xl text-center">
                <div className="text-3xl mb-2">📢</div>
                <h3 className="font-bold mb-2 text-sm">Punya Informasi?</h3>
                <p className="text-xs text-blue-100 mb-3">
                  Kirim berita atau saran ke sekolah
                </p>
                <Link
                  href="/kontak"
                  className="block bg-[#FDB913] text-[#1E5FAA] py-2 rounded-md font-semibold text-sm hover:bg-yellow-400 transition"
                >
                  Hubungi Kami
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}