import Link from "next/link";

const artikel = [
  {
    emoji: "🎓",
    judul: "PPDB 2025 Resmi Dibuka, Ini Syarat dan Jadwalnya",
    tanggal: "15 Juni 2025",
    kategori: "Pengumuman",
    warnaBg: "bg-blue-100",
    warnaIcon: "bg-blue-500",
    warnaText: "text-blue-700",
    ringkasan:
      "Pendaftaran peserta didik baru SDN 3 Pelang tahun ajaran 2025/2026 resmi dibuka mulai 1 Juli 2025.",
  },
  {
    emoji: "🏆",
    judul: "Siswa SDN 3 Pelang Raih Juara 1 Lomba Cerdas Cermat",
    tanggal: "10 Juni 2025",
    kategori: "Prestasi",
    warnaBg: "bg-yellow-100",
    warnaIcon: "bg-yellow-500",
    warnaText: "text-yellow-700",
    ringkasan:
      "Membanggakan! Tim cerdas cermat SDN 3 Pelang berhasil menyabet juara 1 tingkat kecamatan.",
  },
  {
    emoji: "🌱",
    judul: "Kegiatan Pramuka: Belajar Mandiri Sejak Dini",
    tanggal: "5 Juni 2025",
    kategori: "Kegiatan",
    warnaBg: "bg-green-100",
    warnaIcon: "bg-green-500",
    warnaText: "text-green-700",
    ringkasan:
      "Puluhan siswa mengikuti kegiatan perkemahan Pramuka di lingkungan sekolah dengan penuh semangat.",
  },
];

export default function InfoTerbaru() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Info Terbaru
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-3 mb-4">
            Berita, Kegiatan, &{" "}
            <span className="text-gradient">Prestasi</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Ikuti kabar terbaru seputar kegiatan dan prestasi siswa-siswi SDN 3
            Pelang.
          </p>
        </div>

        {/* Grid Artikel — 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {artikel.map((item, i) => (
            <Link
              key={i}
              href="/artikel"
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Thumbnail dengan warna */}
              <div className={`relative h-48 ${item.warnaBg} flex items-center justify-center overflow-hidden`}>
                {/* Blob dekoratif */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/40 blur-xl group-hover:scale-150 transition-transform duration-700" />

                {/* Icon circle */}
                <div className={`relative w-20 h-20 rounded-2xl ${item.warnaIcon} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.emoji}
                </div>

                {/* Badge kategori */}
                <span className={`absolute top-4 left-4 ${item.warnaText} bg-white/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full`}>
                  {item.kategori}
                </span>
              </div>

              {/* Konten */}
              <div className="p-6">
                <p className="text-xs text-slate-500 font-semibold mb-2">
                  📅 {item.tanggal}
                </p>
                <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition leading-snug line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {item.ringkasan}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-bold">
                  Baca selengkapnya
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tombol bawah */}
        <div className="text-center">
          <Link
            href="/artikel"
            className="btn-primary inline-flex items-center gap-2"
          >
            Lihat Semua Artikel
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}