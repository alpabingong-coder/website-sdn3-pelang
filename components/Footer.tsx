import Link from "next/link";
import { sekolah, menu } from "@/lib/data";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2C4C] text-white">
      {/* CTA BANNER */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              Siap Bergabung dengan{" "}
              <span className="italic text-[#C9A961]">
                {sekolah.namaSingkat}?
              </span>
            </h3>
            <p className="text-white/60">
              Daftarkan putra-putri Anda sekarang. Pendaftaran GRATIS!
            </p>
          </div>
          <Link
            href="/ppdb"
            className="bg-[#C9A961] text-[#0F2C4C] px-8 py-3.5 rounded-lg font-bold hover:bg-[#A88C42] transition-all shadow-lg hover:shadow-xl whitespace-nowrap inline-flex items-center gap-2 group"
          >
            Daftar PPDB Sekarang
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Kolom 1: Identitas */}
        <div>
          <div className="flex items-center gap-3 mb-5">
                        <img
              src="/logo-sdn.png"
              alt={`Logo ${sekolah.namaSingkat}`}
              className="w-14 h-14 object-contain"
            />
            <div>
              <div className="font-serif font-bold text-lg text-white">
                {sekolah.namaSingkat}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#C9A961]">
                NPSN {sekolah.npsn}
              </div>
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Sekolah Dasar Negeri terakreditasi {sekolah.akreditasi} di
            Kecamatan {sekolah.alamat.kecamatan}, Kabupaten{" "}
            {sekolah.alamat.kabupaten}. Mendidik generasi cerdas dan
            berkarakter sejak 1985.
          </p>

          <div className="inline-block bg-[#C9A961]/10 border border-[#C9A961]/30 px-3 py-1.5 rounded-full text-xs text-[#C9A961] font-semibold">
            ◆ Akreditasi {sekolah.akreditasi}
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-5 text-[#C9A961]">
            Navigasi
          </h4>
          <ul className="space-y-2.5 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-[#C9A961] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="text-[#C9A961] group-hover:translate-x-1 transition-transform">
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
          <h4 className="font-serif font-bold text-lg mb-5 text-[#C9A961]">
            Hubungi Kami
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#C9A961] flex-shrink-0">📍</span>
              <span className="text-white/70 leading-relaxed">
                {sekolah.alamat.jalan}
                <br />
                Desa {sekolah.alamat.desa}, Kec. {sekolah.alamat.kecamatan}
                <br />
                {sekolah.alamat.kabupaten}, {sekolah.alamat.provinsi}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A961] flex-shrink-0">📞</span>
              <a
                href={`https://wa.me/${sekolah.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#C9A961] transition-colors"
              >
                {sekolah.telepon}
              </a>
            </li>
            {sekolah.email && (
              <li className="flex items-start gap-3">
                <span className="text-[#C9A961] flex-shrink-0">✉️</span>
                <a
                  href={`mailto:${sekolah.email}`}
                  className="text-white/70 hover:text-[#C9A961] transition-colors break-all"
                >
                  {sekolah.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Kolom 4: Sosmed */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-5 text-[#C9A961]">
            Ikuti Kami
          </h4>
          <p className="text-white/60 text-sm mb-5">
            Dapatkan update terbaru seputar kegiatan sekolah.
          </p>
          <div className="flex gap-3">
            {[
              { icon: "📘", nama: "Facebook", href: "#" },
              { icon: "📷", nama: "Instagram", href: "#" },
              { icon: "▶️", nama: "YouTube", href: "#" },
              {
                icon: "💬",
                nama: "WhatsApp",
                href: `https://wa.me/${sekolah.whatsapp}`,
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                aria-label={s.nama}
                className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 hover:bg-[#C9A961] hover:border-[#C9A961] hover:text-[#0F2C4C] transition-all flex items-center justify-center text-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <div className="text-center md:text-left">
            © {tahun}{" "}
            <strong className="text-white/80">{sekolah.nama}</strong>. Hak
            cipta dilindungi.
          </div>
          <div className="text-center md:text-right flex items-center gap-2">
            <span className="text-[#C9A961]">◆</span>
            NPSN {sekolah.npsn} • Akreditasi {sekolah.akreditasi}
          </div>
        </div>
      </div>
    </footer>
  );
}