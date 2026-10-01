import Link from "next/link";
import { sekolah, menu } from "@/lib/data";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA BANNER */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-2">
                Siap Bergabung dengan{" "}
                <span className="text-yellow-300">SDN 3 Pelang?</span>
              </h3>
              <p className="text-white font-medium">
                Daftarkan putra-putri Anda sekarang. Pendaftaran GRATIS!
              </p>
            </div>
            <Link
              href="/ppdb"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl whitespace-nowrap inline-flex items-center gap-2"
            >
              Daftar PPDB Sekarang
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Kolom 1: Identitas */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <img
                src="/logo-sdn.png"
                alt="Logo SDN 3 Pelang"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg text-white">
                SDN 3 Pelang
              </div>
              <div className="text-xs text-blue-300 font-semibold">
                NPSN {sekolah.npsn}
              </div>
            </div>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed mb-4">
            Sekolah Dasar Negeri terakreditasi{" "}
            <strong className="text-yellow-300 font-extrabold">
              {sekolah.akreditasi}
            </strong>{" "}
            di Kecamatan {sekolah.alamat.kecamatan}, Kabupaten{" "}
            {sekolah.alamat.kabupaten}. Mendidik generasi cerdas dan berkarakter
            sejak 1985.
          </p>

          <div className="inline-block bg-yellow-500/20 border border-yellow-500/40 px-3 py-1.5 rounded-full text-xs text-yellow-300 font-bold">
            ⭐ Akreditasi {sekolah.akreditasi}
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="font-heading font-extrabold text-base mb-5 text-white">
            Navigasi
          </h4>
          <ul className="space-y-3 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-200 hover:text-yellow-300 transition-colors inline-flex items-center gap-2 group font-medium"
                >
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                    ›
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="font-heading font-extrabold text-base mb-5 text-white">
            Hubungi Kami
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 flex-shrink-0 mt-0.5 text-base">
                📍
              </span>
              <span className="text-slate-200 leading-relaxed">
                {sekolah.alamat.jalan}
                <br />
                Desa {sekolah.alamat.desa}, Kec. {sekolah.alamat.kecamatan}
                <br />
                {sekolah.alamat.kabupaten}, {sekolah.alamat.provinsi}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 flex-shrink-0 mt-0.5 text-base">
                📞
              </span>
              <a
                href={`https://wa.me/${sekolah.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-yellow-300 transition-colors font-medium"
              >
                {sekolah.telepon}
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Sosmed */}
        <div>
          <h4 className="font-heading font-extrabold text-base mb-5 text-white">
            Ikuti Kami
          </h4>
          <p className="text-slate-200 text-sm mb-5">
            Dapatkan update terbaru seputar kegiatan sekolah.
          </p>
          <div className="flex gap-3">
            {[
              { icon: "📘", nama: "Facebook", href: "#", bg: "bg-blue-600" },
              { icon: "📷", nama: "Instagram", href: "#", bg: "bg-pink-600" },
              { icon: "▶️", nama: "YouTube", href: "#", bg: "bg-red-600" },
              {
                icon: "💬",
                nama: "WhatsApp",
                href: `https://wa.me/${sekolah.whatsapp}`,
                bg: "bg-green-600",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                aria-label={s.nama}
                className={`w-11 h-11 rounded-xl ${s.bg} hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center text-lg`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-300">
          <div className="text-center md:text-left">
            © {tahun}{" "}
            <strong className="text-white">{sekolah.nama}</strong>. Hak cipta
            dilindungi.
          </div>
          <div className="text-center md:text-right flex items-center gap-2">
            <span className="text-yellow-400">⭐</span>
            <span className="text-slate-200">
              NPSN {sekolah.npsn} • Akreditasi {sekolah.akreditasi}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}