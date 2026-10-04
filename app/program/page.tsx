import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, programUnggulan } from "@/lib/data";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/Animate";

const ekstrakurikuler = [
  {
    icon: "🏕️",
    nama: "Pramuka",
    desc: "Melatih kemandirian, kepemimpinan, dan cinta alam",
    jadwal: "Sabtu, 08.00-10.00",
    warnaBg: "bg-blue-100",
    warnaIcon: "bg-blue-500",
    warnaText: "text-blue-700",
  },
  {
    icon: "🎨",
    nama: "Seni Lukis",
    desc: "Mengembangkan kreativitas dan imajinasi siswa",
    jadwal: "Rabu, 14.00-15.30",
    warnaBg: "bg-pink-100",
    warnaIcon: "bg-pink-500",
    warnaText: "text-pink-700",
  },
  {
    icon: "⚽",
    nama: "Sepak Bola",
    desc: "Olahraga favorit untuk melatih kerja sama tim",
    jadwal: "Kamis, 15.00-17.00",
    warnaBg: "bg-orange-100",
    warnaIcon: "bg-orange-500",
    warnaText: "text-orange-700",
  },
  {
    icon: "🏐",
    nama: "Bola Voli",
    desc: "Melatih ketangkasan dan sportivitas",
    jadwal: "Selasa, 15.00-16.30",
    warnaBg: "bg-purple-100",
    warnaIcon: "bg-purple-500",
    warnaText: "text-purple-700",
  },
  {
    icon: "🎵",
    nama: "Seni Musik",
    desc: "Bermain alat musik dan vokal bersama",
    jadwal: "Jumat, 14.00-15.00",
    warnaBg: "bg-green-100",
    warnaIcon: "bg-green-500",
    warnaText: "text-green-700",
  },
  {
    icon: "📖",
    nama: "Baca Al-Qur'an",
    desc: "Belajar membaca dan menghafal Al-Qur'an",
    jadwal: "Senin-Kamis, 07.00-07.30",
    warnaBg: "bg-yellow-100",
    warnaIcon: "bg-yellow-500",
    warnaText: "text-yellow-700",
  },
];

const kegiatanRutin = [
  {
    icon: "🇮🇩",
    nama: "Upacara Bendera",
    jadwal: "Senin, 07.00 WIB",
    desc: "Menumbuhkan rasa nasionalisme dan cinta tanah air",
    warnaBg: "bg-red-100",
    warnaIcon: "bg-red-500",
  },
  {
    icon: "🤸",
    nama: "Senam Pagi",
    jadwal: "Jumat, 07.00 WIB",
    desc: "Menjaga kebugaran jasmani siswa dan guru",
    warnaBg: "bg-orange-100",
    warnaIcon: "bg-orange-500",
  },
  {
    icon: "📚",
    nama: "Literasi 15 Menit",
    jadwal: "Setiap Hari, 07.00-07.15",
    desc: "Membaca buku sebelum pelajaran dimulai",
    warnaBg: "bg-blue-100",
    warnaIcon: "bg-blue-500",
  },
  {
    icon: "🙏",
    nama: "Doa Bersama",
    jadwal: "Setiap Hari, Sebelum Belajar",
    desc: "Memulai aktivitas dengan doa",
    warnaBg: "bg-purple-100",
    warnaIcon: "bg-purple-500",
  },
  {
    icon: "🧹",
    nama: "Jumat Bersih",
    jadwal: "Jumat, 07.30 WIB",
    desc: "Kerja bakti membersihkan lingkungan sekolah",
    warnaBg: "bg-green-100",
    warnaIcon: "bg-green-500",
  },
  {
    icon: "🕌",
    nama: "Sholat Berjamaah",
    jadwal: "Setiap Hari, Dzuhur",
    desc: "Melatih kedisiplinan ibadah siswa",
    warnaBg: "bg-teal-100",
    warnaIcon: "bg-teal-500",
  },
];

const jadwal = [
  {
    hari: "Senin - Kamis",
    kelas: "Kelas 1-6 (Full Day)",
    jam: "07.00 - 13.00 WIB",
    jumlah: "6 jam pelajaran",
  },
  {
    hari: "Jumat",
    kelas: "Kelas 1-6",
    jam: "07.00 - 11.00 WIB",
    jumlah: "4 jam pelajaran",
  },
  {
    hari: "Sabtu",
    kelas: "Kegiatan Pramuka & Ekskul",
    jam: "07.00 - 12.00 WIB",
    jumlah: "Opsional",
  },
  {
    hari: "Minggu & Hari Libur",
    kelas: "Libur",
    jam: "Tutup",
    jumlah: "",
  },
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Program & Kegiatan
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Program Unggulan <span className="text-gradient">SDN 3 Pelang</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Berbagai program dirancang untuk mengembangkan potensi akademik,
            karakter, dan keterampilan siswa secara menyeluruh.
          </p>
        </div>
      </section>

      {/* PROGRAM UNGGULAN */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Program Unggulan
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Membangun Karakter,{" "}
              <span className="text-gradient">Mengembangkan Potensi</span>
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programUnggulan.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                  {/* Gradient border hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>

                  <h3 className="font-heading text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition leading-snug">
                    {item.judul}
                  </h3>

                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 group-hover:w-20 transition-all duration-300" />

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.deskripsi}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* EKSTRAKURIKULER */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Ekstrakurikuler
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Kembangkan <span className="text-gradient">Bakat & Minat</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Berbagai kegiatan ekstrakurikuler gratis untuk mengembangkan bakat
              dan minat siswa.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ekstrakurikuler.map((item, i) => (
              <StaggerItem key={i}>
                <div
                  className={`group ${item.warnaBg} rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full`}
                >
                  {/* Blob dekoratif */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/40 blur-xl group-hover:scale-150 transition-transform duration-700" />

                  <div
                    className={`relative w-16 h-16 rounded-2xl ${item.warnaIcon} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-2 leading-tight">
                    {item.nama}
                  </h3>

                  <p className="text-slate-700 text-sm mb-4 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  <div className={`flex items-center gap-2 text-xs ${item.warnaText} font-bold pt-3 border-t-2 border-white/50`}>
                    <span>🕐</span>
                    <span>{item.jadwal}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* KEGIATAN RUTIN */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Kegiatan Rutin
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Kegiatan <span className="text-gradient">Harian Sekolah</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Kegiatan rutin yang membentuk karakter dan kedisiplinan siswa.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {kegiatanRutin.map((keg, i) => (
              <StaggerItem key={i}>
                <div
                  className={`flex items-start gap-4 ${keg.warnaBg} rounded-3xl p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent h-full`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${keg.warnaIcon} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}
                  >
                    {keg.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-extrabold text-slate-900 mb-1">
                      {keg.nama}
                    </h3>
                    <div className="text-xs text-orange-600 font-bold mb-2 flex items-center gap-1">
                      <span>🕐</span>
                      <span>{keg.jadwal}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {keg.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* JADWAL PELAJARAN */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Jadwal Pelajaran
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3">
              Jam <span className="text-gradient">Belajar</span>
            </h2>
          </FadeInUp>

          <FadeInUp className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
            <div className="space-y-4">
              {jadwal.map((j, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="font-heading font-extrabold text-slate-900">
                      {j.hari}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {j.kelas}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-heading font-extrabold ${
                        j.jam === "Tutup" ? "text-red-500" : "text-blue-600"
                      }`}
                    >
                      {j.jam}
                    </div>
                    {j.jumlah && (
                      <div className="text-xs text-slate-500 font-medium">
                        {j.jumlah}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-2xl text-xs text-slate-600 font-medium border border-blue-100">
              💡 <strong>Catatan:</strong> Jam pelajaran dapat menyesuaikan
              dengan kegiatan sekolah. Untuk info lebih detail, hubungi wali
              kelas masing-masing.
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Tertarik <span className="text-yellow-300">Bergabung?</span>
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Daftarkan putra-putri Anda sekarang dan rasakan pengalaman belajar
            yang menyenangkan di {sekolah.namaSingkat}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ppdb"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              📝 Daftar PPDB
            </Link>
            <Link
              href="/kontak"
              className="bg-white/10 backdrop-blur border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              📞 Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}