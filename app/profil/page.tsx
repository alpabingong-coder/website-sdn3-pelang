import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, profil, guru, fasilitas } from "@/lib/data";

export default function ProfilPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#0F2C4C] overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2C4C] via-[#0F2C4C] to-[#1E5FAA]/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-[#C9A961]/10 border border-[#C9A961]/30 backdrop-blur px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs font-bold uppercase tracking-widest">
              Profil Sekolah
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Mengenal{" "}
            <span className="italic text-[#C9A961]">
              {sekolah.namaSingkat}
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Sejarah, visi misi, dan struktur organisasi {sekolah.nama}.
          </p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 md:h-12"
          >
            <path
              d="M0 60L60 54.7C120 49.3 240 38.7 360 33.3C480 28 600 28 720 33.3C840 38.7 960 49.3 1080 49.3C1200 49.3 1320 38.7 1380 33.3L1440 28V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="#FAF8F3"
            />
          </svg>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* KIRI: Kotak Sejarah */}
            <div className="md:col-span-5 relative">
              {/* Ornamen sudut */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A961]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C9A961]" />

              <div className="relative bg-gradient-to-br from-[#0F2C4C] to-[#164a85] rounded-2xl p-10 text-white text-center shadow-2xl">
                <div className="text-6xl mb-4">🏫</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#C9A961] font-bold mb-3">
                  Berdiri Sejak
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {profil.tahunBerdiri}
                </div>
                <div className="w-16 h-0.5 bg-[#C9A961] mx-auto mb-4" />
                <div className="text-white/60 text-sm">
                  Lebih dari 40 tahun mendidik generasi bangsa
                </div>
              </div>
            </div>

            {/* KANAN: Teks Sejarah */}
            <div className="md:col-span-7">
              <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
                Sejarah Singkat
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-6 leading-tight">
                Perjalanan{" "}
                <span className="italic text-[#C9A961]">
                  {sekolah.namaSingkat}
                </span>
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#C9A961]" />
                <span className="text-[#C9A961] text-xs">◆</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                {profil.sejarah}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-[#E5E1D8]">
                  <div className="font-serif text-3xl font-bold text-[#0F2C4C]">
                    {sekolah.akreditasi}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                    Akreditasi
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-[#E5E1D8]">
                  <div className="font-serif text-3xl font-bold text-[#0F2C4C]">
                    12
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                    Guru & Staf
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-[#E5E1D8]">
                  <div className="font-serif text-3xl font-bold text-[#0F2C4C]">
                    40+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                    Tahun
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
              Visi & Misi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
              Arah & Tujuan{" "}
              <span className="italic text-[#C9A961]">Pendidikan</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs">◆</span>
              <div className="w-12 h-0.5 bg-[#C9A961]" />
            </div>
          </div>

          {/* Visi */}
          <div className="bg-[#FAF8F3] rounded-2xl p-8 md:p-12 mb-8 max-w-4xl mx-auto border border-[#E5E1D8]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#C9A961] rounded-xl flex items-center justify-center text-3xl">
                🎯
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F2C4C]">
                Visi Sekolah
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#C9A961] pl-6 py-2 font-serif">
              &ldquo;{profil.visi}&rdquo;
            </p>
          </div>

          {/* Misi */}
          <div className="bg-[#FAF8F3] rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-[#E5E1D8]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#0F2C4C] rounded-xl flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F2C4C]">
                Misi Sekolah
              </h3>
            </div>
            <ol className="space-y-4">
              {profil.misi.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-lg bg-[#0F2C4C] text-[#C9A961] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 font-serif">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* GURU */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
              Struktur Organisasi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
              Guru & Tenaga{" "}
              <span className="italic text-[#C9A961]">Kependidikan</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs">◆</span>
              <div className="w-12 h-0.5 bg-[#C9A961]" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim pendidik yang berdedikasi untuk mendampingi putra-putri Anda
              di {sekolah.namaSingkat}.
            </p>
          </div>

          {/* Kepala Sekolah Highlight */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#0F2C4C] to-[#164a85] text-white rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden">
              {/* Ornamen sudut */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-[#C9A961]/50" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-[#C9A961]/50" />

              {guru[0].foto ? (
                <img
                  src={guru[0].foto}
                  alt={guru[0].nama}
                  className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-[#C9A961] shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-bold text-[#0F2C4C] bg-[#C9A961] border-4 border-[#C9A961]/50 shadow-lg font-serif">
                  {guru[0].nama.charAt(0)}
                </div>
              )}

              <div className="text-xs uppercase tracking-[0.2em] text-[#C9A961] font-bold mb-2">
                Kepala Sekolah
              </div>
              <div className="font-serif text-xl font-bold">
                {guru[0].nama}
              </div>
            </div>
          </div>

          {/* Grid Guru */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guru.slice(1).map((g, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-[#E5E1D8] hover:border-[#C9A961] group"
              >
                <div className="flex items-center gap-4">
                  {g.foto ? (
                    <img
                      src={g.foto}
                      alt={g.nama}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-[#0F2C4C] bg-[#FAF8F3] border-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition flex-shrink-0 font-serif">
                      {g.nama.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="font-serif font-bold text-[#0F2C4C] text-sm leading-tight group-hover:text-[#C9A961] transition">
                      {g.nama}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {g.jabatan}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
              Fasilitas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
              Sarana &{" "}
              <span className="italic text-[#C9A961]">Prasarana</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs">◆</span>
              <div className="w-12 h-0.5 bg-[#C9A961]" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fasilitas yang mendukung kegiatan belajar mengajar di{" "}
              {sekolah.namaSingkat}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fasilitas.map((f, i) => (
              <div
                key={i}
                className="bg-[#FAF8F3] rounded-2xl p-6 text-center hover:bg-[#0F2C4C] transition-all duration-500 group border border-[#E5E1D8] hover:border-[#0F2C4C]"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-500">
                  {f.icon}
                </div>
                <h3 className="font-serif font-bold text-[#0F2C4C] mb-2 group-hover:text-white transition leading-snug">
                  {f.nama}
                </h3>
                <div className="w-10 h-0.5 bg-[#C9A961] mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
                <p className="text-xs text-gray-600 leading-relaxed group-hover:text-white/60 transition">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10 italic">
            * Daftar fasilitas dapat berubah sesuai dengan pengembangan sekolah
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0F2C4C] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <div className="text-5xl mb-6">🎓</div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ingin Tahu{" "}
            <span className="italic text-[#C9A961]">Lebih Banyak?</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Kunjungi langsung {sekolah.nama} atau hubungi kami untuk informasi
            lebih lanjut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-[#C9A961] text-[#0F2C4C] px-8 py-4 rounded-lg font-bold hover:bg-[#A88C42] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
            >
              Hubungi Kami
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/ppdb"
              className="bg-white/5 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
            >
              Daftar PPDB
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}