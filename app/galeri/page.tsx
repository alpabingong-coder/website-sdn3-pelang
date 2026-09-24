import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, kategoriGaleri } from "@/lib/data";

export default function GaleriPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Galeri Kegiatan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Momen Berharga di {sekolah.namaSingkat}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Klik kategori di bawah untuk melihat dokumentasi foto kegiatan.
          </p>
        </div>
      </section>

      {/* KATEGORI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Kategori Galeri
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Pilih Kategori
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Klik salah satu kategori untuk melihat foto-foto kegiatan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategoriGaleri.map((kat, i) => (
              <Link
                key={i}
                href={`/galeri/${kat.slug}`}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${kat.warna} aspect-video`}
              >
                {/* Emoji besar */}
                <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500 opacity-90">
                  {kat.icon}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Konten */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{kat.nama}</h3>
                  <p className="text-xs text-gray-200 line-clamp-2 mb-3">
                    {kat.deskripsi}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#FDB913] group-hover:gap-2 transition-all">
                    Lihat Foto →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 bg-[#F5F9FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-3">📸</div>
          <h3 className="font-bold text-[#1E5FAA] mb-2 text-xl">
            Dokumentasi Terus Bertambah
          </h3>
          <p className="text-sm text-gray-600">
            Kami rutin mengupdate galeri ini dengan momen-momen terbaru dari
            kegiatan siswa di {sekolah.namaSingkat}.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ingin Anak Anda Ikut Berpartisipasi?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan {sekolah.namaSingkat} dan rasakan pengalaman
            belajar yang menyenangkan.
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