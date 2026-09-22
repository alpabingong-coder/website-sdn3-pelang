import Link from "next/link";

const artikel = [
  {
    emoji: "🎓",
    judul: "PPDB 2025 Resmi Dibuka, Ini Syarat dan Jadwalnya",
    tanggal: "15 Juni 2025",
    kategori: "Pengumuman",
    ringkasan:
      "Pendaftaran peserta didik baru SDN 3 Pelang tahun ajaran 2025/2026 resmi dibuka mulai 1 Juli 2025.",
    warna: "from-blue-500 to-blue-700",
  },
  {
    emoji: "🏆",
    judul: "Siswa SDN 3 Pelang Raih Juara 1 Lomba Cerdas Cermat",
    tanggal: "10 Juni 2025",
    kategori: "Prestasi",
    ringkasan:
      "Membanggakan! Tim cerdas cermat SDN 3 Pelang berhasil menyabet juara 1 tingkat kecamatan.",
    warna: "from-yellow-500 to-orange-600",
  },
  {
    emoji: "🌱",
    judul: "Kegiatan Pramuka: Belajar Mandiri Sejak Dini",
    tanggal: "5 Juni 2025",
    kategori: "Kegiatan",
    ringkasan:
      "Puluhan siswa mengikuti kegiatan perkemahan Pramuka di lingkungan sekolah dengan penuh semangat.",
    warna: "from-green-500 to-emerald-700",
  },
];

export default function InfoTerbaru() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
            Info Terbaru
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
            Berita, Kegiatan, dan Prestasi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti kabar terbaru seputar kegiatan dan prestasi siswa-siswi
            SDN 3 Pelang.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: 3 Artikel */}
          <div className="lg:col-span-2 space-y-6">
            {artikel.map((item, i) => (
              <article
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group flex flex-col sm:flex-row"
              >
                {/* Thumbnail */}
                <div
                  className={`sm:w-48 aspect-video sm:aspect-square bg-gradient-to-br ${item.warna} flex items-center justify-center text-6xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  {item.emoji}
                </div>

                {/* Konten */}
                <div className="p-5 flex-1">
                  {/* Badge Kategori + Tanggal */}
                  <div className="flex items-center gap-3 mb-2 text-xs">
                    <span className="bg-[#F5F9FF] text-[#1E5FAA] font-semibold px-2 py-1 rounded">
                      {item.kategori}
                    </span>
                    <span className="text-gray-400">📅 {item.tanggal}</span>
                  </div>

                  {/* Judul */}
                  <h3 className="text-lg font-bold text-[#1E5FAA] mb-2 group-hover:text-[#E63946] transition leading-snug">
                    <Link href="/artikel">{item.judul}</Link>
                  </h3>

                  {/* Ringkasan */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.ringkasan}
                  </p>

                  {/* Link Baca */}
                  <Link
                    href="/artikel"
                    className="text-[#E63946] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar Kanan */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-bold text-[#1E5FAA] mb-3">🔍 Pencarian</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Cari berita..."
                  className="flex-1 border border-gray-200 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
                <button className="bg-[#1E5FAA] text-white px-4 rounded-r-md hover:bg-[#164a85] transition text-sm">
                  Cari
                </button>
              </div>
            </div>

            {/* Sosmed */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-bold text-[#1E5FAA] mb-3">
                📱 Ikuti Kami
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Follow social media sekolah untuk update terbaru.
              </p>
              <div className="flex gap-2">
                {["📘", "📷", "▶️", "💬"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#F5F9FF] hover:bg-[#1E5FAA] hover:text-white transition flex items-center justify-center text-lg"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Prioritas */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-bold text-[#1E5FAA] mb-3">
                ⭐ Menu Prioritas
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Info PPDB 2025", href: "/ppdb" },
                  { label: "Program Unggulan", href: "/program" },
                  { label: "Tentang Sekolah", href: "/profil" },
                  { label: "Hubungi Kami", href: "/kontak" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#1E5FAA] transition"
                    >
                      <span className="text-[#FDB913]">›</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-10">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 bg-[#1E5FAA] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#164a85] transition"
          >
            Lihat Semua Artikel →
          </Link>
        </div>
      </div>
    </section>
  );
}