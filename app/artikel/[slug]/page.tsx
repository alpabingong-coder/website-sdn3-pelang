import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah, artikel } from "@/lib/data";

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

function formatTanggal(tanggal: string) {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function DetailArtikelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = artikel.find((a) => a.slug === slug);

  if (!data) notFound();

  // Artikel terkait (kategori sama, exclude yang sekarang)
  const related = artikel
    .filter((a) => a.kategori === data.kategori && a.slug !== slug)
    .slice(0, 3);

  // Artikel terbaru (buat sidebar)
  const terbaru = [...artikel]
    .filter((a) => a.slug !== slug)
    .sort((a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime())
    .slice(0, 4);

  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className={`bg-gradient-to-br ${data.warna} text-white py-12 md:py-16`}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm flex flex-wrap gap-2">
            <Link href="/" className="hover:underline opacity-90">Home</Link>
            <span className="opacity-60">/</span>
            <Link href="/artikel" className="hover:underline opacity-90">Artikel</Link>
            <span className="opacity-60">/</span>
            <span className="font-semibold">{data.kategori}</span>
          </div>

          <div className="text-center">
            <div className="text-6xl mb-4">{data.emoji}</div>
            <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold mb-4">
              {data.kategori}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {data.judul}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-90">
              <span>📅 {formatTanggal(data.tanggal)}</span>
              <span>•</span>
              <span>✍️ {data.penulis}</span>
            </div>
          </div>
        </div>
      </section>

      {/* KONTEN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Artikel Utama */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {data.konten.map((par, i) => (
                  <p
                    key={i}
                    className="text-gray-700 leading-relaxed mb-4 text-base"
                  >
                    {par}
                  </p>
                ))}
              </div>

              {/* Share + Kembali */}
              <div className="mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 mr-2">Bagikan:</span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(data.judul + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1da851] transition"
                    aria-label="Share WhatsApp"
                  >
                    💬
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#0e5fc7] transition"
                    aria-label="Share Facebook"
                  >
                    📘
                  </a>
                </div>

                <Link
                  href="/artikel"
                  className="text-[#1E5FAA] font-semibold text-sm hover:underline"
                >
                  ← Kembali ke Daftar Artikel
                </Link>
              </div>

              {/* Artikel Terkait */}
              {related.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-[#1E5FAA] mb-6">
                    Artikel Terkait
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/artikel/${a.slug}`}
                        className="group bg-[#F5F9FF] rounded-xl overflow-hidden hover:shadow-lg transition"
                      >
                        <div
                          className={`aspect-video bg-gradient-to-br ${a.warna} flex items-center justify-center text-4xl group-hover:scale-105 transition-transform`}
                        >
                          {a.emoji}
                        </div>
                        <div className="p-4">
                          <div className="text-xs text-[#E63946] font-bold mb-1">
                            {a.kategori}
                          </div>
                          <div className="text-sm font-bold text-[#1E5FAA] leading-snug group-hover:text-[#E63946] transition line-clamp-2">
                            {a.judul}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Info Sekolah */}
              <div className="bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white p-6 rounded-xl">
                <div className="text-3xl mb-2">🏫</div>
                <h3 className="font-bold mb-2">{sekolah.namaSingkat}</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  {sekolah.alamat.desa}, Kec. {sekolah.alamat.kecamatan},{" "}
                  {sekolah.alamat.kabupaten}
                </p>
                <Link
                  href="/profil"
                  className="block mt-4 bg-[#FDB913] text-[#1E5FAA] py-2 rounded-md font-semibold text-xs text-center hover:bg-yellow-400 transition"
                >
                  Lihat Profil Sekolah
                </Link>
              </div>

              {/* Artikel Terbaru */}
              <div className="bg-[#F5F9FF] p-5 rounded-xl">
                <h3 className="font-bold text-[#1E5FAA] mb-4 text-sm">
                  📰 Artikel Terbaru
                </h3>
                <ul className="space-y-3">
                  {terbaru.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/artikel/${a.slug}`}
                        className="flex gap-3 group"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${a.warna} flex items-center justify-center text-xl flex-shrink-0`}
                        >
                          {a.emoji}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-gray-700 group-hover:text-[#1E5FAA] transition line-clamp-2 leading-snug">
                            {a.judul}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {new Date(a.tanggal).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA PPDB */}
              <div className="bg-gradient-to-br from-[#FDB913] to-yellow-500 p-5 rounded-xl text-center">
                <div className="text-3xl mb-2">📝</div>
                <h3 className="font-bold text-[#1E5FAA] mb-2 text-sm">
                  PPDB 2025/2026
                </h3>
                <p className="text-xs text-[#1E5FAA]/80 mb-3">
                  Pendaftaran sudah dibuka!
                </p>
                <Link
                  href="/ppdb"
                  className="block bg-[#1E5FAA] text-white py-2 rounded-md font-semibold text-sm hover:bg-[#164a85] transition"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}