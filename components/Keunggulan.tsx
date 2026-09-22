import { keunggulan } from "@/lib/data";

export default function Keunggulan() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
            Mengapa Memilih SDN 3 Pelang?
          </h2>
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
              className="group bg-[#F5F9FF] p-6 rounded-xl border border-blue-100 hover:border-[#1E5FAA] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Ikon */}
              <div className="w-14 h-14 rounded-xl bg-[#1E5FAA] flex items-center justify-center text-3xl mb-4 group-hover:bg-[#FDB913] transition-colors duration-300">
                {item.icon}
              </div>

              {/* Judul */}
              <h3 className="text-lg font-bold text-[#1E5FAA] mb-2">
                {item.judul}
              </h3>

              {/* Deskripsi */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.deskripsi}
              </p>

              {/* Garis bawah dekoratif */}
              <div className="w-12 h-1 bg-[#FDB913] mt-4 group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}