import Link from "next/link";

const galeriItems = [
  { 
    emoji: "🎒", 
    judul: "Upacara Bendera", 
    kategori: "Upacara", 
    bg: "bg-blue-100", 
    iconBg: "bg-blue-500",
    textColor: "text-blue-700"
  },
  { 
    emoji: "📚", 
    judul: "Kegiatan Belajar", 
    kategori: "Belajar", 
    bg: "bg-emerald-100", 
    iconBg: "bg-emerald-500",
    textColor: "text-emerald-700"
  },
  { 
    emoji: "⚽", 
    judul: "Olahraga", 
    kategori: "Olahraga", 
    bg: "bg-orange-100", 
    iconBg: "bg-orange-500",
    textColor: "text-orange-700"
  },
  { 
    emoji: "🎨", 
    judul: "Seni & Kreativitas", 
    kategori: "Seni", 
    bg: "bg-pink-100", 
    iconBg: "bg-pink-500",
    textColor: "text-pink-700"
  },
  { 
    emoji: "🎭", 
    judul: "Pentas Seni", 
    kategori: "Seni", 
    bg: "bg-purple-100", 
    iconBg: "bg-purple-500",
    textColor: "text-purple-700"
  },
  { 
    emoji: "🏆", 
    judul: "Lomba & Prestasi", 
    kategori: "Prestasi", 
    bg: "bg-yellow-100", 
    iconBg: "bg-yellow-500",
    textColor: "text-yellow-700"
  },
  { 
    emoji: "🌱", 
    judul: "Pramuka", 
    kategori: "Pramuka", 
    bg: "bg-green-100", 
    iconBg: "bg-green-500",
    textColor: "text-green-700"
  },
  { 
    emoji: "📖", 
    judul: "Perpustakaan", 
    kategori: "Belajar", 
    bg: "bg-cyan-100", 
    iconBg: "bg-cyan-500",
    textColor: "text-cyan-700"
  },
];

export default function Galeri() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Galeri Kegiatan
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-3 mb-4">
            Momen Berharga di{" "}
            <span className="text-gradient">Sekolah Kami</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Berbagai kegiatan seru dan mendidik yang kami lakukan bersama
            siswa-siswi SDN 3 Pelang.
          </p>
        </div>

        {/* Grid Galeri — Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galeriItems.map((item, i) => (
            <Link
              key={i}
              href="/galeri"
              className={`group ${item.bg} rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
            >
              {/* Blob dekoratif */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/40 blur-xl group-hover:scale-150 transition-transform duration-700" />

              {/* Icon circle */}
              <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.iconBg} flex items-center justify-center text-3xl md:text-4xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {item.emoji}
              </div>

              {/* Judul */}
              <h3 className="font-heading text-base md:text-lg font-extrabold text-slate-900 mb-2 leading-tight">
                {item.judul}
              </h3>

              {/* Kategori pill */}
              <span className={`inline-block ${item.textColor} bg-white/60 backdrop-blur text-xs font-bold px-3 py-1 rounded-full`}>
                {item.kategori}
              </span>

              {/* Arrow kecil */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center text-white text-sm`}>
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tombol bawah */}
        <div className="text-center mt-12">
          <Link
            href="/galeri"
            className="btn-primary inline-flex items-center gap-2"
          >
            Lihat Galeri Lengkap
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}