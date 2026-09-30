import Link from "next/link";
import { sekolah } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-[#0F2C4C] overflow-hidden">
      {/* Pattern halus di background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2C4C] via-[#0F2C4C] to-[#1E5FAA]/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        {/* KIRI: Teks (7 kolom) */}
        <div className="md:col-span-7 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C9A961]/10 border border-[#C9A961]/30 backdrop-blur px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
            <span className="text-[#C9A961] text-xs font-bold uppercase tracking-widest">
              PPDB 2025 / 2026 Dibuka
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
            Mendidik Generasi
            <br />
            <span className="text-[#C9A961] italic">Cerdas & Berkarakter</span>
          </h1>

          {/* Deskripsi */}
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
            {sekolah.nama} — Sekolah Dasar Negeri terakreditasi{" "}
            <strong className="text-[#C9A961]">{sekolah.akreditasi}</strong> di
            Kecamatan {sekolah.alamat.kecamatan}, Kabupaten{" "}
            {sekolah.alamat.kabupaten}. Berdiri sejak 1985, kami berkomitmen
            membentuk generasi unggul yang beriman, cerdas, dan berkarakter.
          </p>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/ppdb"
              className="bg-[#C9A961] text-[#0F2C4C] px-8 py-4 rounded-lg font-bold hover:bg-[#A88C42] transition-all shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2 group"
            >
              Daftar PPDB Sekarang
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/profil"
              className="bg-white/5 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Kenali Sekolah Kami
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-serif text-4xl font-bold text-[#C9A961]">
                {sekolah.akreditasi}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">
                Akreditasi
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl font-bold text-[#C9A961]">
                12
              </div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">
                Guru & Staf
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl font-bold text-[#C9A961]">
                40+
              </div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">
                Tahun Mendidik
              </div>
            </div>
          </div>
        </div>

        {/* KANAN: Kartu Info (5 kolom) */}
        <div className="md:col-span-5">
          <div className="relative">
            {/* Ornamen sudut */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#C9A961]" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#C9A961]" />

            {/* Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-xs uppercase tracking-widest text-[#C9A961] font-bold mb-2">
                  SPMB 2025 / 2026
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#0F2C4C] mb-1">
                  Penerimaan Murid Baru
                </h2>
                <p className="text-xs text-gray-500">
                  Pendaftaran dibuka sampai 30 Juni 2025
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-[#E5E1D8]" />
                <span className="text-[#C9A961] text-xs">◆</span>
                <div className="flex-1 h-px bg-[#E5E1D8]" />
              </div>

              {/* Info list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center text-sm flex-shrink-0">
                    📅
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Pendaftaran
                    </div>
                    <div className="text-sm font-semibold text-[#0F2C4C]">
                      1 Juni - 30 Juni 2025
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center text-sm flex-shrink-0">
                    👶
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Usia Minimal
                    </div>
                    <div className="text-sm font-semibold text-[#0F2C4C]">
                      6 tahun per 1 Juli 2025
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center text-sm flex-shrink-0">
                    💰
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Biaya Pendaftaran
                    </div>
                    <div className="text-sm font-bold text-[#C9A961]">
                      GRATIS
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/ppdb"
                className="block w-full bg-[#0F2C4C] text-white text-center py-4 rounded-lg font-bold hover:bg-[#1E5FAA] transition-colors shadow-lg"
              >
                Daftar Online →
              </Link>

              <p className="text-center text-xs text-gray-400 mt-4">
                Info: {sekolah.telepon}
              </p>
            </div>
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
            fill="#FAF8F3"
          />
        </svg>
      </div>
    </section>
  );
}