import Link from "next/link";
import { programUnggulan } from "@/lib/data";

export default function ProgramUnggulan() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
            Program Unggulan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
            Membangun Karakter,{" "}
            <span className="italic text-[#C9A961]">Mengembangkan Potensi</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs">◆</span>
            <div className="w-12 h-0.5 bg-[#C9A961]" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai program dirancang untuk mengembangkan potensi akademik,
            karakter, dan keterampilan siswa secara menyeluruh.
          </p>
        </div>

        {/* Grid 6 Program */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programUnggulan.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E5E1D8] hover:border-[#C9A961]"
            >
              {/* Ikon */}
              <div className="w-16 h-16 rounded-xl bg-[#FAF8F3] flex items-center justify-center text-3xl mb-5 group-hover:bg-[#0F2C4C] transition-colors duration-300">
                {item.icon}
              </div>

              {/* Judul */}
              <h3 className="font-serif text-xl font-bold text-[#0F2C4C] mb-3 leading-snug">
                {item.judul}
              </h3>

              {/* Garis dekoratif */}
              <div className="w-10 h-0.5 bg-[#C9A961] mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Deskripsi */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.deskripsi}
              </p>

              {/* Link kecil */}
              <div className="flex items-center gap-1 text-[#C9A961] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pelajari lebih lanjut →
              </div>
            </div>
          ))}
        </div>

        {/* Tombol bawah */}
        <div className="text-center mt-12">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 bg-[#0F2C4C] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#1E5FAA] transition-all shadow-md hover:shadow-lg group"
          >
            Lihat Semua Program
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}