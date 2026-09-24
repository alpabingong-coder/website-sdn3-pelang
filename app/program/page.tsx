import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, programUnggulan } from "@/lib/data";

const ekstrakurikuler = [
  { icon: "🏕️", nama: "Pramuka", desc: "Melatih kemandirian, kepemimpinan, dan cinta alam", jadwal: "Sabtu, 08.00-10.00" },
  { icon: "🎨", nama: "Seni Lukis", desc: "Mengembangkan kreativitas dan imajinasi siswa", jadwal: "Rabu, 14.00-15.30" },
  { icon: "⚽", nama: "Sepak Bola", desc: "Olahraga favorit untuk melatih kerja sama tim", jadwal: "Kamis, 15.00-17.00" },
  { icon: "🏐", nama: "Bola Voli", desc: "Melatih ketangkasan dan sportivitas", jadwal: "Selasa, 15.00-16.30" },
  { icon: "🎵", nama: "Seni Musik", desc: "Bermain alat musik dan vokal bersama", jadwal: "Jumat, 14.00-15.00" },
  { icon: "📖", nama: "Baca Al-Qur'an", desc: "Belajar membaca dan menghafal Al-Qur'an", jadwal: "Senin-Kamis, 07.00-07.30" },
];

const kegiatanRutin = [
  { icon: "🇮🇩", nama: "Upacara Bendera", jadwal: "Senin, 07.00 WIB", desc: "Menumbuhkan rasa nasionalisme dan cinta tanah air" },
  { icon: "🤸", nama: "Senam Pagi", jadwal: "Jumat, 07.00 WIB", desc: "Menjaga kebugaran jasmani siswa dan guru" },
  { icon: "📚", nama: "Literasi 15 Menit", jadwal: "Setiap Hari, 07.00-07.15", desc: "Membaca buku sebelum pelajaran dimulai" },
  { icon: "🙏", nama: "Doa Bersama", jadwal: "Setiap Hari, Sebelum Belajar", desc: "Memulai aktivitas dengan doa" },
  { icon: "🧹", nama: "Jumat Bersih", jadwal: "Jumat, 07.30 WIB", desc: "Kerja bakti membersihkan lingkungan sekolah" },
  { icon: "🕌", nama: "Sholat Berjamaah", jadwal: "Setiap Hari, Dzuhur", desc: "Melatih kedisiplinan ibadah siswa" },
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Program & Kegiatan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Program Unggulan {sekolah.namaSingkat}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Berbagai program dirancang untuk mengembangkan potensi akademik,
            karakter, dan keterampilan siswa secara menyeluruh.
          </p>
        </div>
      </section>

      {/* PROGRAM UNGGULAN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Program Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Membangun Karakter, Mengembangkan Potensi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programUnggulan.map((item, i) => (
              <div
                key={i}
                className="bg-[#F5F9FF] p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#1E5FAA] hover:border-[#FDB913] group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1E5FAA] leading-tight">
                    {item.judul}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EKSTRAKURIKULER */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Ekstrakurikuler
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Kembangkan Bakat & Minat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai kegiatan ekstrakurikuler gratis untuk mengembangkan
              bakat dan minat siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ekstrakurikuler.map((ekskul, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {ekskul.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E5FAA] mb-2">
                  {ekskul.nama}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {ekskul.desc}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#FDB913] font-semibold border-t pt-3">
                  <span>🕐</span>
                  <span>{ekskul.jadwal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEGIATAN RUTIN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Kegiatan Rutin
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Kegiatan Harian Sekolah
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kegiatan rutin yang membentuk karakter dan kedisiplinan siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {kegiatanRutin.map((keg, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#F5F9FF] rounded-xl p-5 hover:shadow-md transition border-l-4 border-[#1E5FAA]"
              >
                <div className="text-4xl flex-shrink-0">{keg.icon}</div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#1E5FAA] mb-1">
                    {keg.nama}
                  </h3>
                  <div className="text-xs text-[#E63946] font-semibold mb-2 flex items-center gap-1">
                    <span>🕐</span>
                    <span>{keg.jadwal}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {keg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JADWAL PELAJARAN */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Jadwal Pelajaran
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2">
              Jam Belajar
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <div className="font-bold text-[#1E5FAA]">
                    Senin - Kamis
                  </div>
                  <div className="text-xs text-gray-500">
                    Kelas 1-6 (Full Day)
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1E5FAA]">
                    07.00 - 13.00 WIB
                  </div>
                  <div className="text-xs text-gray-500">6 jam pelajaran</div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <div className="font-bold text-[#1E5FAA]">Jumat</div>
                  <div className="text-xs text-gray-500">Kelas 1-6</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1E5FAA]">
                    07.00 - 11.00 WIB
                  </div>
                  <div className="text-xs text-gray-500">4 jam pelajaran</div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <div className="font-bold text-[#1E5FAA]">Sabtu</div>
                  <div className="text-xs text-gray-500">Kegiatan Pramuka & Ekskul</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1E5FAA]">
                    07.00 - 12.00 WIB
                  </div>
                  <div className="text-xs text-gray-500">Opsional</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#1E5FAA]">
                    Minggu & Hari Libur
                  </div>
                  <div className="text-xs text-gray-500">Libur</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#E63946]">Tutup</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F5F9FF] rounded-lg text-xs text-gray-600">
              💡 <strong>Catatan:</strong> Jam pelajaran dapat menyesuaikan
              dengan kegiatan sekolah. Untuk info lebih detail, hubungi wali
              kelas masing-masing.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tertarik Bergabung?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Daftarkan putra-putri Anda sekarang dan rasakan pengalaman belajar
            yang menyenangkan di {sekolah.namaSingkat}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ppdb"
              className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition inline-flex items-center justify-center gap-2"
            >
              📝 Daftar PPDB
            </Link>
            <Link
              href="/kontak"
              className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
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