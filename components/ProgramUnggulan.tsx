import Link from "next/link";
import { programUnggulan } from "@/lib/data";

export default function ProgramUnggulan() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
            Program Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
            Membangun Karakter, Mengembangkan Potensi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai program dirancang untuk mengembangkan potensi akademik,
            karakter, dan keterampilan siswa secara menyeluruh.
          </p>
        </div>

        {/* Grid 6 Program (3 kolom desktop, 2 tablet, 1 HP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programUnggulan.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#1E5FAA] hover:border-[#FDB913] group"
            >
              {/* Ikon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#F5F9FF] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1E5FAA] leading-tight">
                  {item.judul}
                </h3>
              </div>

              {/* Deskripsi */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.deskripsi}
              </p>

              {/* Link kecil */}
              <div className="mt-4 flex items-center gap-1 text-[#E63946] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pelajari lebih lanjut →
              </div>
            </div>
          ))}
        </div>

        {/* Tombol bawah */}
        <div className="text-center mt-12">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 bg-[#1E5FAA] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#164a85] transition"
          >
            Lihat Semua Program →
          </Link>
        </div>
      </div>
    </section>
  );
}