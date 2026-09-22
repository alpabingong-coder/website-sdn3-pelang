import Link from "next/link";
import { sekolah } from "@/lib/data";

export default function Tentang() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Foto/Ilustrasi */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto bg-gradient-to-br from-[#1E5FAA] to-[#164a85] flex items-center justify-center">
              {/* Placeholder — nanti ganti dengan foto asli */}
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-4">🏫</div>
                <div className="text-2xl font-bold">{sekolah.namaSingkat}</div>
                <div className="text-sm opacity-80 mt-2">
                  Foto gedung sekolah segera hadir
                </div>
              </div>
            </div>

            {/* Badge mengambang */}
            <div className="absolute -bottom-4 -right-4 bg-[#FDB913] text-[#1E5FAA] px-6 py-3 rounded-xl shadow-lg font-bold">
              🎓 Akreditasi {sekolah.akreditasi}
            </div>
          </div>

          {/* Kolom Kanan: Teks */}
          <div>
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-6">
              Mengenal {sekolah.namaSingkat} Lebih Dekat
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#1E5FAA]">{sekolah.nama}</strong> adalah
              sekolah dasar negeri yang berlokasi di Desa {sekolah.alamat.desa},
              Kecamatan {sekolah.alamat.kecamatan}, Kabupaten{" "}
              {sekolah.alamat.kabupaten}. Kami hadir untuk memberikan pendidikan
              dasar berkualitas bagi putra-putri Anda.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
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
                  <span className="w-6 h-6 rounded-full bg-[#1E5FAA] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/profil"
              className="inline-flex items-center gap-2 bg-[#1E5FAA] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#164a85] transition"
            >
              Selengkapnya Tentang Kami
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}