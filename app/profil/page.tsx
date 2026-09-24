import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, profil, guru, fasilitas } from "@/lib/data";

export default function ProfilPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO PROFIL */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Profil Sekolah
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mengenal {sekolah.namaSingkat}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Sejarah, visi misi, dan struktur organisasi {sekolah.nama}.
          </p>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#1E5FAA] to-[#164a85] rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
              <div className="text-6xl mb-4">🏫</div>
              <div className="text-sm uppercase tracking-widest text-[#FDB913] font-bold mb-2">
                Berdiri Sejak
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {profil.tahunBerdiri}
              </div>
              <div className="text-blue-100 text-sm mt-4">
                Lebih dari 40 tahun mendidik generasi bangsa
              </div>
            </div>

            <div>
              <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
                Sejarah Singkat
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
                Perjalanan {sekolah.namaSingkat}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {profil.sejarah}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F5F9FF] rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#1E5FAA]">
                    {sekolah.akreditasi}
                  </div>
                  <div className="text-xs text-gray-500">Akreditasi</div>
                </div>
                <div className="bg-[#F5F9FF] rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#1E5FAA]">12</div>
                  <div className="text-xs text-gray-500">Guru & Staf</div>
                </div>
                <div className="bg-[#F5F9FF] rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#1E5FAA]">40+</div>
                  <div className="text-xs text-gray-500">Tahun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Visi & Misi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2">
              Arah & Tujuan Pendidikan
            </h2>
          </div>

          {/* Visi */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center text-3xl">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-[#1E5FAA]">
                Visi Sekolah
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#FDB913] pl-6 py-2">
              "{profil.visi}"
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#1E5FAA] rounded-xl flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-[#1E5FAA]">
                Misi Sekolah
              </h3>
            </div>
            <ol className="space-y-4">
              {profil.misi.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#F5F9FF] text-[#1E5FAA] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* STRUKTUR ORGANISASI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Struktur Organisasi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Guru & Tenaga Kependidikan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim pendidik yang berdedikasi untuk mendampingi putra-putri
              Anda di {sekolah.namaSingkat}.
            </p>
          </div>

          {/* Kepala Sekolah - Highlight */}
                   <div className="max-w-md mx-auto mb-10">
            <div className="bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white rounded-2xl p-6 text-center shadow-xl">
              {guru[0].foto ? (
                <img
                  src={guru[0].foto}
                  alt={guru[0].nama}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#FDB913] shadow-lg"
                />
              ) : (
                <div
                  className={`w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br ${guru[0].warna} border-4 border-[#FDB913] shadow-lg`}
                >
                  {guru[0].nama.charAt(0)}
                </div>
              )}
              <div className="text-xs uppercase tracking-wider text-[#FDB913] font-bold mb-1">
                Kepala Sekolah
              </div>
              <div className="text-xl font-bold">{guru[0].nama}</div>
            </div>
          </div>

          {/* Guru Lainnya */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guru.slice(1).map((g, i) => (
              <div
                key={i}
                className="bg-[#F5F9FF] rounded-xl p-5 hover:shadow-lg transition border-l-4 border-[#1E5FAA] hover:border-[#FDB913]"
              >
                <div className="flex items-center gap-4">
                  {g.foto ? (
                    <img
                      src={g.foto}
                      alt={g.nama}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-white shadow"
                    />
                  ) : (
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br ${g.warna} flex-shrink-0 shadow`}
                    >
                      {g.nama.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="font-bold text-[#1E5FAA] text-sm leading-tight">
                      {g.nama}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {g.jabatan}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Fasilitas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Sarana & Prasarana
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fasilitas yang mendukung kegiatan belajar mengajar di{" "}
              {sekolah.namaSingkat}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fasilitas.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1E5FAA] mb-2">{f.nama}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-8 italic">
            * Daftar fasilitas dapat berubah sesuai dengan pengembangan
            sekolah
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ingin Tahu Lebih Banyak?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Kunjungi langsung {sekolah.nama} atau hubungi kami untuk informasi
            lebih lanjut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition inline-flex items-center justify-center gap-2"
            >
              📞 Hubungi Kami
            </Link>
            <Link
              href="/ppdb"
              className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
            >
              📝 Daftar PPDB
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}