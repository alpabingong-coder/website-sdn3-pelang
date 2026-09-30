import Link from "next/link";

const galeriItems = [
  { emoji: "🎒", judul: "Upacara Bendera", kategori: "Upacara" },
  { emoji: "📚", judul: "Kegiatan Belajar", kategori: "Belajar" },
  { emoji: "⚽", judul: "Olahraga", kategori: "Olahraga" },
  { emoji: "🎨", judul: "Seni & Kreativitas", kategori: "Seni" },
  { emoji: "🎭", judul: "Pentas Seni", kategori: "Seni" },
  { emoji: "🏆", judul: "Lomba & Prestasi", kategori: "Prestasi" },
  { emoji: "🌱", judul: "Pramuka", kategori: "Pramuka" },
  { emoji: "📖", judul: "Perpustakaan", kategori: "Belajar" },
];

// Mapping kategori ke warna navy/gold palette
const warnaKategori: Record<string, { bg: string; accent: string }> = {
  Upacara: { bg: "from-[#0F2C4C] to-[#1E5FAA]", accent: "#C9A961" },
  Belajar: { bg: "from-[#1E5FAA] to-[#0F2C4C]", accent: "#C9A961" },
  Olahraga: { bg: "from-[#0F2C4C] to-[#164a85]", accent: "#C9A961" },
  Seni: { bg: "from-[#164a85] to-[#0F2C4C]", accent: "#C9A961" },
  Prestasi: { bg: "from-[#C9A961] to-[#A88C42]", accent: "#0F2C4C" },
  Pramuka: { bg: "from-[#0F2C4C] to-[#1E5FAA]", accent: "#C9A961" },
};

export default function Galeri() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
            Galeri Kegiatan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
            Momen Berharga di{" "}
            <span className="italic text-[#C9A961]">Sekolah Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs">◆</span>
            <div className="w-12 h-0.5 bg-[#C9A961]" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai kegiatan seru dan mendidik yang kami lakukan bersama
            siswa-siswi SDN 3 Pelang.
          </p>
        </div>

        {/* Grid Foto */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galeriItems.map((item, i) => {
            const warna =
              warnaKategori[item.kategori] || warnaKategori.Upacara;
            return (
              <Link
                key={i}
                href="/galeri"
                className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${warna.bg} group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500`}
              >
                {/* Emoji */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500">
                  {item.emoji}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="font-serif font-bold text-sm md:text-base leading-tight">
                      {item.judul}
                    </div>
                    <div
                      className="text-xs mt-1 font-semibold"
                      style={{ color: warna.accent }}
                    >
                      {item.kategori}
                    </div>
                  </div>
                </div>

                {/* Ornamen sudut gold */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C9A961]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </div>

        {/* Tombol bawah */}
        <div className="text-center mt-12">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 bg-[#0F2C4C] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#1E5FAA] transition-all shadow-md hover:shadow-lg group"
          >
            Lihat Galeri Lengkap
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}