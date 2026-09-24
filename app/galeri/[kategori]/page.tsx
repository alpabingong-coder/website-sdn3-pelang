import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, kategoriGaleri, galeri } from "@/lib/data";

// Generate halaman statis untuk tiap kategori (optimasi)
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

  // Cari kategori berdasarkan slug
  const kategoriData = kategoriGaleri.find((k) => k.slug === slug);

  if (!kategoriData) {
    notFound();
  }

  // Ambil foto-foto untuk kategori ini
  const fotoList = galeri[slug as keyof typeof galeri] || [];

  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section
        className={`bg-gradient-to-br ${kategoriData.warna} text-white py-16 md:py-20`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
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

      {/* GRID FOTO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#1E5FAA]">
                Foto Kegiatan
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {fotoList.length} foto dalam kategori ini
              </p>
            </div>
            <Link
              href="/galeri"
              className="text-[#1E5FAA] font-semibold text-sm hover:underline"
            >
              ← Kembali ke Galeri
            </Link>
          </div>

          {fotoList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fotoList.map((foto, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Preview Foto / Placeholder */}
                  <div
                    className={`aspect-video bg-gradient-to-br ${kategoriData.warna} flex items-center justify-center relative overflow-hidden`}
                  >
                    {foto.foto ? (
                      <img
                        src={foto.foto}
                        alt={foto.judul}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                        {foto.emoji}
                      </div>
                    )}

                    {/* Label tanggal */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#1E5FAA] text-xs font-bold px-3 py-1 rounded-full">
                      📅 {foto.tanggal}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#1E5FAA] text-base mb-1 leading-snug">
                      {foto.judul}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {kategoriData.nama}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F5F9FF] rounded-2xl">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-500 mb-4">
                Belum ada foto untuk kategori ini.
              </p>
              <Link
                href="/galeri"
                className="text-[#1E5FAA] font-semibold hover:underline"
              >
                ← Kembali ke Galeri
              </Link>
            </div>
          )}

          {/* Info upload foto */}
          <div className="mt-12 bg-[#F5F9FF] rounded-xl p-6 max-w-2xl mx-auto text-center">
            <div className="text-3xl mb-2">📸</div>
            <p className="text-sm text-gray-600">
              Foto-foto dokumentasi asli akan segera ditambahkan. Untuk
              sementara, ini adalah preview kategori.
            </p>
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