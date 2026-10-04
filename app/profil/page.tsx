import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, profil, guru, fasilitas } from "@/lib/data";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/Animate";

export default function ProfilPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Profil Sekolah
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Mengenal <span className="text-gradient">SDN 3 Pelang</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Sejarah, visi misi, dan struktur organisasi {sekolah.nama}.
          </p>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* KIRI: Kotak Sejarah */}
            <FadeInUp className="md:col-span-5 relative">
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-10 text-white text-center shadow-2xl">
                <div className="text-6xl mb-4">🏫</div>
                <div className="text-xs uppercase tracking-[0.2em] text-yellow-300 font-bold mb-3">
                  Berdiri Sejak
                </div>
                <div className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                  {profil.tahunBerdiri}
                </div>
                <div className="w-16 h-0.5 bg-white/50 mx-auto mb-4" />
                <div className="text-white/90 text-sm font-medium">
                  Lebih dari 40 tahun mendidik generasi bangsa
                </div>
              </div>
            </FadeInUp>

            {/* KANAN: Teks Sejarah */}
            <FadeInUp delay={0.2} className="md:col-span-7">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
                Sejarah Singkat
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-6 leading-tight">
                Perjalanan <span className="text-gradient">SDN 3 Pelang</span>
              </h2>

              <p className="text-slate-700 leading-relaxed mb-8 text-base font-medium">
                {profil.sejarah}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                  <div className="font-heading text-3xl font-extrabold text-gradient">
                    {sekolah.akreditasi}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-bold">
                    Akreditasi
                  </div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
                  <div className="font-heading text-3xl font-extrabold text-gradient">
                    12
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-bold">
                    Guru & Staf
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-4 text-center border border-yellow-100">
                  <div className="font-heading text-3xl font-extrabold text-gradient">
                    40+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1 font-bold">
                    Tahun
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Visi & Misi
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Arah & Tujuan <span className="text-gradient">Pendidikan</span>
            </h2>
          </FadeInUp>

          {/* Visi */}
          <FadeInUp className="bg-white rounded-3xl p-8 md:p-12 mb-8 max-w-4xl mx-auto shadow-lg border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl shadow-lg">
                🎯
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                Visi Sekolah
              </h3>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2 font-medium">
              &ldquo;{profil.visi}&rdquo;
            </p>
          </FadeInUp>

          {/* Misi */}
          <FadeInUp delay={0.2} className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-3xl shadow-lg">
                🚀
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                Misi Sekolah
              </h3>
            </div>
            <ol className="space-y-4">
              {profil.misi.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0 mt-0.5 font-heading">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-700 leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </FadeInUp>
        </div>
      </section>

      {/* GURU */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Struktur Organisasi
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Guru & Tenaga <span className="text-gradient">Kependidikan</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Tim pendidik yang berdedikasi untuk mendampingi putra-putri Anda
              di {sekolah.namaSingkat}.
            </p>
          </FadeInUp>

          {/* Kepala Sekolah */}
          <FadeInUp className="max-w-md mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-3xl p-8 text-center shadow-2xl">
              {guru[0].foto ? (
                <img
                  src={guru[0].foto}
                  alt={guru[0].nama}
                  className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-bold bg-white/20 border-4 border-white/50 shadow-lg font-heading">
                  {guru[0].nama.charAt(0)}
                </div>
              )}
              <div className="text-xs uppercase tracking-[0.2em] text-yellow-300 font-bold mb-2">
                Kepala Sekolah
              </div>
              <div className="font-heading text-xl font-extrabold">
                {guru[0].nama}
              </div>
            </div>
          </FadeInUp>

          {/* Grid Guru - Premium Card */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {guru.slice(1).map((g, i) => (
              <StaggerItem key={i}>
                <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer h-full">
                  {/* Gradient border saat hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Glow dekoratif di background */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Foto besar di atas */}
                  <div className="relative pt-8 pb-4 px-4 flex flex-col items-center">
                    <div className="relative">
                      {g.foto ? (
                        <img
                          src={g.foto}
                          alt={g.nama}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white shadow-lg group-hover:scale-110 transition-all duration-500 font-heading">
                          {g.nama.charAt(0)}
                        </div>
                      )}

                      {/* Badge check di pojok foto */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-md group-hover:scale-110 transition-transform duration-500">
                        ✓
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 pb-6 text-center">
                    <h3 className="font-heading font-extrabold text-slate-900 text-sm md:text-base leading-tight mb-2 group-hover:text-blue-600 transition line-clamp-2 min-h-[2.5rem]">
                      {g.nama}
                    </h3>

                    {/* Pill jabatan */}
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
                      {g.jabatan}
                    </div>
                  </div>

                  {/* Garis dekoratif di bawah */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Fasilitas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Sarana & <span className="text-gradient">Prasarana</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Fasilitas yang mendukung kegiatan belajar mengajar di{" "}
              {sekolah.namaSingkat}.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {fasilitas.map((f, i) => (
              <StaggerItem key={i}>
                <div className="group relative bg-white rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-transparent hover:-translate-y-2 cursor-pointer h-full overflow-hidden">
                  {/* Gradient border hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Glow blur */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    {f.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition leading-snug text-sm md:text-base">
                    {f.nama}
                  </h3>
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="text-center text-xs text-slate-400 mt-10 italic">
            * Daftar fasilitas dapat berubah sesuai dengan pengembangan sekolah
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <div className="text-5xl mb-6">🎓</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Ingin Tahu <span className="text-yellow-300">Lebih Banyak?</span>
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Kunjungi langsung {sekolah.nama} atau hubungi kami untuk informasi
            lebih lanjut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Hubungi Kami →
            </Link>
            <Link
              href="/ppdb"
              className="bg-white/10 backdrop-blur border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Daftar PPDB
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}