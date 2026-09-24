import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { kategoriGaleri, galeri } from "@/lib/data";

export function generateStaticParams() {
  return kategoriGaleri.map((kat) => ({
    kategori: kat.slug,
  }));
}

export default async function KategoriGaleriPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori: slug } = await params;
  const kategoriData = kategoriGaleri.find((k) => k.slug === slug);

  if (!kategoriData) {
    notFound();
  }

  const daftarHari = galeri[slug as keyof typeof galeri] || [];

  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className={`bg-gradient-to-br ${kategoriData.warna} text-white py-16 md:py-20`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6 text-sm">
            <Link href="/" className="hover:underline opacity-90">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <Link href="/galeri" className="hover:underline opacity-90">
              Galeri
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="font-semibold">{kategoriData.nama}</span>
          </div>

          <div className="text-center">
            <div className="text-6xl md:text-7xl mb-4">{kategoriData.icon}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {kategoriData.nama}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {kategoriData.deskripsi}
            </p>
          </div>
        </div>
      </section>

      {/* DAFTAR HARI */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Daftar Kegiatan
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E5FAA] mt-2 mb-2">
              Pilih Tanggal Kegiatan
            </h2>
            <p className="text-sm text-gray-500">
              Klik tanggal untuk melihat foto kegiatan pada hari itu
            </p>
          </div>

          <div className="space-y-4">
            {daftarHari.map((hari, i) => (
              <Link
                key={i}
                href={`/galeri/${slug}/${hari.tanggal}`}
                className="group bg-white rounded-xl border-2 border-gray-100 hover:border-[#1E5FAA] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row md:items-center gap-4 p-4"
              >
                {/* Tanggal Badge */}
                <div
                  className={`flex-shrink-0 w-full md:w-32 h-24 md:h-24 rounded-lg bg-gradient-to-br ${kategoriData.warna} flex flex-col items-center justify-center text-white`}
                >
                  <div className="text-3xl font-bold">
                    {new Date(hari.tanggal).getDate()}
                  </div>
                  <div className="text-xs opacity-90">
                    {new Date(hari.tanggal).toLocaleDateString("id-ID", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-[#1E5FAA] mb-1 group-hover:text-[#E63946] transition">
                    {hari.judul}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{hari.deskripsi}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      📸 <strong className="text-[#1E5FAA]">{hari.foto.length}</strong> foto
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(hari.tanggal).toLocaleDateString("id-ID", {
                        weekday: "long",
                      })}
                    </span>
                  </div>
                </div>

                {/* Panah */}
                <div className="flex-shrink-0 text-2xl text-gray-300 group-hover:text-[#1E5FAA] group-hover:translate-x-2 transition-all">
                  →
                </div>
              </Link>
            ))}
          </div>

          {daftarHari.length === 0 && (
            <div className="text-center py-16 bg-[#F5F9FF] rounded-2xl">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-500 mb-4">
                Belum ada kegiatan di kategori ini.
              </p>
              <Link
                href="/galeri"
                className="text-[#1E5FAA] font-semibold hover:underline"
              >
                ← Kembali ke Galeri
              </Link>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 text-[#1E5FAA] font-semibold hover:underline"
            >
              ← Kembali ke Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* KATEGORI LAIN */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E5FAA]">
              Jelajahi Kategori Lain
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {kategoriGaleri
              .filter((k) => k.slug !== slug)
              .slice(0, 4)
              .map((kat, i) => (
                <Link
                  key={i}
                  href={`/galeri/${kat.slug}`}
                  className={`group bg-gradient-to-br ${kat.warna} rounded-xl p-5 text-white hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  <div className="text-3xl mb-2">{kat.icon}</div>
                  <div className="font-bold text-sm leading-tight">
                    {kat.nama}
                  </div>
                  <div className="text-xs opacity-80 mt-2 group-hover:translate-x-1 transition-transform">
                    Lihat →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}