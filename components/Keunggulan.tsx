import { keunggulan } from "@/lib/data";

export default function Keunggulan() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
            Keunggulan Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-4">
            Mengapa Memilih{" "}
            <span className="italic text-[#C9A961]">SDN 3 Pelang?</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs">◆</span>
            <div className="w-12 h-0.5 bg-[#C9A961]" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menghadirkan pendidikan dasar berkualitas dengan pendekatan
            menyeluruh untuk tumbuh kembang putra-putri Anda.
          </p>
        </div>

        {/* Grid 4 Kotak */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keunggulan.map((item, i) => (
            <div
              key={i}
              className="group bg-[#FAF8F3] p-8 rounded-2xl hover:bg-[#0F2C4C] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Nomor dekoratif */}
              <div className="text-[#C9A961]/30 font-serif text-5xl font-bold mb-2 group-hover:text-[#C9A961]/60 transition-colors">
                0{i + 1}
              </div>

              {/* Ikon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Judul */}
              <h3 className="font-serif text-lg font-bold text-[#0F2C4C] mb-3 group-hover:text-white transition-colors leading-snug">
                {item.judul}
              </h3>

              {/* Garis dekoratif */}
              <div className="w-10 h-0.5 bg-[#C9A961] mb-3 group-hover:w-16 transition-all duration-300" />

              {/* Deskripsi */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}