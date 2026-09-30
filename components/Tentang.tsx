import Link from "next/link";
import { sekolah } from "@/lib/data";

export default function Tentang() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* KIRI: Foto/Ilustrasi (5 kolom) */}
          <div className="md:col-span-5 relative">
            {/* Frame ornamen */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A961]" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C9A961]" />

            {/* Foto bulat */}
            <div className="relative rounded-full overflow-hidden aspect-square max-w-sm mx-auto bg-gradient-to-br from-[#0F2C4C] to-[#1E5FAA] flex items-center justify-center shadow-2xl">
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-4">🏫</div>
                <div className="font-serif text-2xl font-bold">
                  {sekolah.namaSingkat}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#C9A961] mt-2">
                  Sejak 1985
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: Teks (7 kolom) */}
          <div className="md:col-span-7">
            <span className="text-[#C9A961] font-bold text-xs uppercase tracking-[0.2em]">
              Tentang Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2C4C] mt-3 mb-6 leading-tight">
              Mengenal {sekolah.namaSingkat}{" "}
              <span className="italic text-[#C9A961]">Lebih Dekat</span>
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs">◆</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              <strong className="text-[#0F2C4C]">{sekolah.nama}</strong> adalah
              sekolah dasar negeri yang berlokasi di Desa {sekolah.alamat.desa},
              Kecamatan {sekolah.alamat.kecamatan}, Kabupaten{" "}
              {sekolah.alamat.kabupaten}. Kami hadir untuk memberikan pendidikan
              dasar berkualitas bagi putra-putri Anda.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Dengan tenaga pendidik yang berpengalaman dan lingkungan belajar
              yang nyaman, kami berkomitmen membentuk generasi yang cerdas,
              berkarakter, dan siap menghadapi tantangan masa depan.
            </p>

            {/* List keunggulan singkat */}
            <ul className="space-y-3 mb-8">
              {[
                "Tenaga pendidik profesional & berpengalaman",
                "Lingkungan belajar aman & nyaman",
                "Kurikulum Merdeka terkini",
                "Ekstrakurikuler beragam",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#C9A961] text-[#0F2C4C] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/profil"
              className="inline-flex items-center gap-2 bg-[#0F2C4C] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#1E5FAA] transition-all shadow-md hover:shadow-lg group"
            >
              Selengkapnya Tentang Kami
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}