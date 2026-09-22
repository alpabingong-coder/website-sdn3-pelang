import Link from "next/link";

const galeriItems = [
  { emoji: "🎒", judul: "Upacara Bendera", warna: "from-blue-500 to-blue-700" },
  { emoji: "📚", judul: "Kegiatan Belajar", warna: "from-emerald-500 to-emerald-700" },
  { emoji: "⚽", judul: "Olahraga", warna: "from-orange-500 to-orange-700" },
  { emoji: "🎨", judul: "Seni & Kreativitas", warna: "from-pink-500 to-pink-700" },
  { emoji: "🎭", judul: "Pentas Seni", warna: "from-purple-500 to-purple-700" },
  { emoji: "🏆", judul: "Lomba & Prestasi", warna: "from-yellow-500 to-yellow-700" },
  { emoji: "🌱", judul: "Pramuka", warna: "from-green-500 to-green-700" },
  { emoji: "📖", judul: "Perpustakaan", warna: "from-indigo-500 to-indigo-700" },
];

export default function Galeri() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
            Galeri Kegiatan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
            Momen Berharga di Sekolah Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai kegiatan seru dan mendidik yang kami lakukan bersama
            siswa-siswi SDN 3 Pelang.
          </p>
        </div>

        {/* Grid Foto */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galeriItems.map((item, i) => (
            <div
              key={i}
              className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${item.warna} group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300`}
            >
              {/* Emoji besar sebagai placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500">
                {item.emoji}
              </div>

              {/* Overlay gradient + judul */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div className="text-white">
                  <div className="font-bold text-sm md:text-base">
                    {item.judul}
                  </div>
                  <div className="text-xs opacity-80">Klik untuk lihat</div>
                </div>
              </div>

              {/* Label kecil */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                📷
              </div>
            </div>
          ))}
        </div>

        {/* Tombol bawah */}
        <div className="text-center mt-10">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 bg-[#1E5FAA] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#164a85] transition"
          >
            Lihat Galeri Lengkap →
          </Link>
        </div>
      </div>
    </section>
  );
}