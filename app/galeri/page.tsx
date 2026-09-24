"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/lib/data";

// Data galeri (sementara pakai emoji sebagai placeholder)
// Nanti tinggal ganti field `foto` dengan path gambar asli
const galeriItems = [
  { emoji: "🎒", judul: "Upacara Bendera", kategori: "Upacara", warna: "from-blue-500 to-blue-700", foto: "" },
  { emoji: "📚", judul: "Kegiatan Belajar", kategori: "Belajar", warna: "from-emerald-500 to-emerald-700", foto: "" },
  { emoji: "⚽", judul: "Olahraga", kategori: "Olahraga", warna: "from-orange-500 to-orange-700", foto: "" },
  { emoji: "🎨", judul: "Seni & Kreativitas", kategori: "Seni", warna: "from-pink-500 to-pink-700", foto: "" },
  { emoji: "🎭", judul: "Pentas Seni", kategori: "Seni", warna: "from-purple-500 to-purple-700", foto: "" },
  { emoji: "🏆", judul: "Lomba & Prestasi", kategori: "Prestasi", warna: "from-yellow-500 to-yellow-700", foto: "" },
  { emoji: "🌱", judul: "Pramuka", kategori: "Pramuka", warna: "from-green-500 to-green-700", foto: "" },
  { emoji: "📖", judul: "Perpustakaan", kategori: "Belajar", warna: "from-indigo-500 to-indigo-700", foto: "" },
  { emoji: "🎵", judul: "Latihan Musik", kategori: "Seni", warna: "from-red-500 to-red-700", foto: "" },
  { emoji: "🏐", judul: "Bola Voli", kategori: "Olahraga", warna: "from-cyan-500 to-cyan-700", foto: "" },
  { emoji: "🕌", judul: "Sholat Berjamaah", kategori: "Ibadah", warna: "from-teal-500 to-teal-700", foto: "" },
  { emoji: "🧹", judul: "Jumat Bersih", kategori: "Upacara", warna: "from-lime-500 to-lime-700", foto: "" },
];

const kategoriList = [
  "Semua",
  "Upacara",
  "Belajar",
  "Olahraga",
  "Seni",
  "Prestasi",
  "Pramuka",
  "Ibadah",
];

export default function GaleriPage() {
  const [filter, setFilter] = useState("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredItems =
    filter === "Semua"
      ? galeriItems
      : galeriItems.filter((item) => item.kategori === filter);

  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Galeri Kegiatan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Momen Berharga di {sekolah.namaSingkat}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Kumpulan dokumentasi kegiatan belajar, ekstrakurikuler, dan
            momen seru lainnya.
          </p>
        </div>
      </section>

      {/* FILTER & GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {kategoriList.map((kat) => (
              <button
                key={kat}
                onClick={() => setFilter(kat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  filter === kat
                    ? "bg-[#1E5FAA] text-white shadow-md"
                    : "bg-[#F5F9FF] text-[#1E5FAA] hover:bg-[#1E5FAA] hover:text-white"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>

          {/* Info jumlah */}
          <p className="text-center text-sm text-gray-500 mb-8">
            Menampilkan <strong className="text-[#1E5FAA]">{filteredItems.length}</strong> foto
            {filter !== "Semua" && ` dalam kategori "${filter}"`}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, i) => {
              const originalIndex = galeriItems.indexOf(item);
              return (
                <div
                  key={i}
                  onClick={() => setLightbox(originalIndex)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${item.warna} group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  {/* Foto atau emoji placeholder */}
                  {item.foto ? (
                    <img
                      src={item.foto}
                      alt={item.judul}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500">
                      {item.emoji}
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <div className="font-bold text-sm md:text-base">
                        {item.judul}
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        {item.kategori}
                      </div>
                    </div>
                  </div>

                  {/* Badge kategori */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#1E5FAA] text-xs font-bold px-2 py-1 rounded-full">
                    {item.kategori}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Kalau kosong */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-500">
                Belum ada foto untuk kategori "{filter}"
              </p>
            </div>
          )}

          {/* Info upload foto */}
          <div className="mt-12 bg-[#F5F9FF] rounded-xl p-6 max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-3">📸</div>
            <h3 className="font-bold text-[#1E5FAA] mb-2">
              Galeri Foto Segera Bertambah
            </h3>
            <p className="text-sm text-gray-600">
              Kami sedang mengumpulkan dokumentasi kegiatan terbaru. Nantinya
              galeri ini akan menampilkan foto-foto asli kegiatan siswa
              di {sekolah.namaSingkat}.
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-[#FDB913] transition"
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* Konten */}
            <div
              className={`aspect-video rounded-2xl bg-gradient-to-br ${galeriItems[lightbox].warna} flex items-center justify-center relative overflow-hidden`}
            >
              {galeriItems[lightbox].foto ? (
                <img
                  src={galeriItems[lightbox].foto}
                  alt={galeriItems[lightbox].judul}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-9xl">{galeriItems[lightbox].emoji}</div>
              )}
            </div>

            {/* Info */}
            <div className="text-white text-center mt-4">
              <div className="text-xl font-bold">
                {galeriItems[lightbox].judul}
              </div>
              <div className="text-sm text-gray-300 mt-1">
                Kategori: {galeriItems[lightbox].kategori}
              </div>
            </div>

            {/* Navigasi */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() =>
                  setLightbox(
                    lightbox === 0 ? galeriItems.length - 1 : lightbox - 1
                  )
                }
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white px-6 py-2 rounded-md transition"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={() =>
                  setLightbox(
                    lightbox === galeriItems.length - 1 ? 0 : lightbox + 1
                  )
                }
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white px-6 py-2 rounded-md transition"
              >
                Selanjutnya →
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              Klik di luar foto untuk menutup
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ingin Anak Anda Ikut Berpartisipasi?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan {sekolah.namaSingkat} dan rasakan pengalaman
            belajar yang menyenangkan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ppdb"
              className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition inline-flex items-center justify-center gap-2"
            >
              📝 Daftar PPDB
            </Link>
            <Link
              href="/kontak"
              className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
            >
              📞 Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}