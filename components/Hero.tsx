import Link from "next/link";
import { sekolah } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] overflow-hidden">
      {/* Ornamen dekoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks */}
        <div className="text-white text-center md:text-left">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            PPDB 2025 / 2026 DIBUKA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Selamat Datang di{" "}
            <span className="text-[#FDB913]">{sekolah.namaSingkat}</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Sekolah Dasar Negeri terakreditasi <strong>{sekolah.akreditasi}</strong> di
            Kecamatan {sekolah.alamat.kecamatan}, Kabupaten {sekolah.alamat.kabupaten}.
            Mendidik generasi cerdas, berkarakter, dan berprestasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/ppdb"
              className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition shadow-lg"
            >
              📝 Daftar PPDB Sekarang
            </Link>
            <Link
              href="/profil"
              className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition"
            >
              Kenali Sekolah Kami
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-[#FDB913]">
                {sekolah.akreditasi}
              </div>
              <div className="text-sm text-blue-100">Akreditasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FDB913]">6</div>
              <div className="text-sm text-blue-100">Kelas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FDB913]">100%</div>
              <div className="text-sm text-blue-100">Gratis</div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Kartu PPDB */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative">
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-[#E63946] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg rotate-6">
              GRATIS!
            </div>

            <h2 className="text-2xl font-bold text-[#1E5FAA] mb-2">
              SPMB / PPDB 2025
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Sistem Penerimaan Murid Baru
            </p>

            {/* Info Pendaftaran */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-[#1E5FAA] text-lg">📅</span>
                <div>
                  <div className="font-semibold text-gray-700">Pendaftaran</div>
                  <div className="text-gray-500">1 - 30 Juni 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-[#1E5FAA] text-lg">👶</span>
                <div>
                  <div className="font-semibold text-gray-700">Usia Minimal</div>
                  <div className="text-gray-500">6 tahun per 1 Juli 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-[#1E5FAA] text-lg">📋</span>
                <div>
                  <div className="font-semibold text-gray-700">Syarat</div>
                  <div className="text-gray-500">
                    KK, Akta Lahir, Ijazah TK, Foto 3x4
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/ppdb"
              className="block w-full bg-[#1E5FAA] text-white text-center py-3 rounded-md font-bold hover:bg-[#164a85] transition"
            >
              Daftar Online →
            </Link>

            <p className="text-xs text-center text-gray-400 mt-3">
              Info: {sekolah.telepon}
            </p>
          </div>
        </div>
      </div>

      {/* Wave bawah */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F5F9FF"
          />
        </svg>
      </div>
    </section>
  );
}