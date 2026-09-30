import Link from "next/link";

const artikel = [
  {
    emoji: "🎓",
    judul: "PPDB 2025 Resmi Dibuka, Ini Syarat dan Jadwalnya",
    tanggal: "15 Juni 2025",
    kategori: "Pengumuman",
    ringkasan:
      "Pendaftaran peserta didik baru SDN 3 Pelang tahun ajaran 2025/2026 resmi dibuka mulai 1 Juli 2025.",
  },
  {
    emoji: "🏆",
    judul: "Siswa SDN 3 Pelang Raih Juara 1 Lomba Cerdas Cermat",
    tanggal: "10 Juni 2025",
    kategori: "Prestasi",
    ringkasan:
      "Membanggakan! Tim cerdas cermat SDN 3 Pelang berhasil menyabet juara 1 tingkat kecamatan.",
  },
  {
    emoji: "🌱",
    judul: "Kegiatan Pramuka: Belajar Mandiri Sejak Dini",
    tanggal: "5 Juni 2025",
    kategori: "Kegiatan",
    ringkasan:
      "Puluhan siswa mengikuti kegiatan perkemahan Pramuka di lingkungan sekolah dengan penuh semangat.",
  },
];

export default function InfoTerbaru() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
            Info Terbaru
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
            Berita, Kegiatan, &{" "}
            <span className="italic text-[#C9A961]">Prestasi</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs">◆</span>
            <div className="w-12 h-0.5 bg-[#C9A961]" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti kabar terbaru seputar kegiatan dan prestasi siswa-siswi SDN 3
            Pelang.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: 3 Artikel */}
          <div className="lg:col-span-2 space-y-6">
            {artikel.map((item, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row border border-[#E5E1D8] hover:border-[#C9A961] group"
              >
                {/* Thumbnail */}
                <div className="sm:w-48 aspect-video sm:aspect-square bg-gradient-to-br from-[#0F2C4C] to-[#1E5FAA] flex items-center justify-center text-5xl flex-shrink-0 relative overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {item.emoji}
                  </div>
                  {/* Ornamen sudut */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C9A961]/50" />
                </div>

                {/* Konten */}
                <div className="p-6 flex-1">
                  {/* Badge Kategori + Tanggal */}
                  <div className="flex items-center gap-3 mb-3 text-xs">
                    <span className="bg-[#C9A961]/10 text-[#C9A961] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {item.kategori}
                    </span>
                    <span className="text-gray-400">
                      {item.tanggal}
                    </span>
                  </div>

                  {/* Judul */}
                  <h3 className="font-serif text-lg font-bold text-[#0F2C4C] mb-3 group-hover:text-[#C9A961] transition leading-snug">
                    <Link href="/artikel">{item.judul}</Link>
                  </h3>

                  {/* Ringkasan */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.ringkasan}
                  </p>

                  {/* Link Baca */}
                  <Link
                    href="/artikel"
                    className="text-[#C9A961] text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Baca selengkapnya
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar Kanan */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E1D8]">
              <h3 className="font-serif font-bold text-[#0F2C4C] mb-4 flex items-center gap-2">
                <span className="text-[#C9A961]">🔍</span>
                Pencarian
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Cari berita..."
                  className="flex-1 border border-[#E5E1D8] rounded-l-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A961]"
                />
                <button className="bg-[#0F2C4C] text-white px-4 rounded-r-lg hover:bg-[#1E5FAA] transition text-sm font-semibold">
                  Cari
                </button>
              </div>
            </div>

            {/* Sosmed */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E1D8]">
              <h3 className="font-serif font-bold text-[#0F2C4C] mb-4 flex items-center gap-2">
                <span className="text-[#C9A961]">◆</span>
                Ikuti Kami
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Follow social media sekolah untuk update terbaru.
              </p>
              <div className="flex gap-2">
                {["📘", "📷", "▶️", "💬"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#FAF8F3] hover:bg-[#0F2C4C] hover:text-[#C9A961] transition-all flex items-center justify-center text-lg"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Prioritas */}
            <div className="bg-gradient-to-br from-[#0F2C4C] to-[#164a85] p-6 rounded-2xl text-white shadow-lg">
              <h3 className="font-serif font-bold mb-4 flex items-center gap-2">
                <span className="text-[#C9A961]">◆</span>
                Menu Prioritas
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Info PPDB 2025", href: "/ppdb" },
                  { label: "Program Unggulan", href: "/program" },
                  { label: "Tentang Sekolah", href: "/profil" },
                  { label: "Hubungi Kami", href: "/kontak" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-white/80 hover:text-[#C9A961] transition group"
                    >
                      <span className="text-[#C9A961] group-hover:translate-x-1 transition-transform">
                        ›
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-12">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 bg-[#0F2C4C] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#1E5FAA] transition-all shadow-md hover:shadow-lg group"
          >
            Lihat Semua Artikel
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}