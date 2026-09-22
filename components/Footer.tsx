import Link from "next/link";
import { sekolah, menu } from "@/lib/data";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-[#0f3a6b] text-white">
      {/* Bagian Atas: CTA */}
      <div className="bg-gradient-to-r from-[#1E5FAA] to-[#164a85] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Siap Bergabung dengan {sekolah.namaSingkat}?
            </h3>
            <p className="text-blue-100">
              Daftarkan putra-putri Anda sekarang. Pendaftaran GRATIS!
            </p>
          </div>
          <Link
            href="/ppdb"
            className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition shadow-lg whitespace-nowrap"
          >
            📝 Daftar PPDB Sekarang
          </Link>
        </div>
      </div>

      {/* Bagian Tengah: Info */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Kolom 1: Identitas Sekolah */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center text-[#1E5FAA] font-bold text-lg">
              SD
            </div>
            <div>
              <div className="font-bold text-lg">{sekolah.namaSingkat}</div>
              <div className="text-xs text-blue-200">
                NPSN {sekolah.npsn}
              </div>
            </div>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed mb-4">
            Sekolah Dasar Negeri terakreditasi {sekolah.akreditasi} di
            Kecamatan {sekolah.alamat.kecamatan}, Kabupaten{" "}
            {sekolah.alamat.kabupaten}. Mendidik generasi cerdas dan
            berkarakter.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs">
            🎓 Akreditasi {sekolah.akreditasi}
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#FDB913]">
            Navigasi
          </h4>
          <ul className="space-y-2 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-blue-100 hover:text-[#FDB913] transition inline-flex items-center gap-2"
                >
                  <span className="text-[#FDB913]">›</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#FDB913]">
            Hubungi Kami
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#FDB913] text-lg flex-shrink-0">📍</span>
              <span className="text-blue-100">
                {sekolah.alamat.jalan}
                <br />
                Desa {sekolah.alamat.desa}, Kec. {sekolah.alamat.kecamatan}
                <br />
                {sekolah.alamat.kabupaten}, {sekolah.alamat.provinsi}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FDB913] text-lg flex-shrink-0">📞</span>
              <a
                href={`https://wa.me/${sekolah.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-[#FDB913] transition"
              >
                {sekolah.telepon}
              </a>
            </li>
            {sekolah.email && (
              <li className="flex items-start gap-3">
                <span className="text-[#FDB913] text-lg flex-shrink-0">
                  ✉️
                </span>
                <a
                  href={`mailto:${sekolah.email}`}
                  className="text-blue-100 hover:text-[#FDB913] transition"
                >
                  {sekolah.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Kolom 4: Sosmed */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#FDB913]">
            Ikuti Kami
          </h4>
          <p className="text-blue-100 text-sm mb-4">
            Dapatkan update terbaru seputar kegiatan sekolah.
          </p>
          <div className="flex gap-3">
            {[
              { icon: "📘", nama: "Facebook" },
              { icon: "📷", nama: "Instagram" },
              { icon: "▶️", nama: "YouTube" },
              { icon: "💬", nama: "WhatsApp" },
            ].map((s, i) => (
              <a
                key={i}
                href={i === 3 ? `https://wa.me/${sekolah.whatsapp}` : "#"}
                target={i === 3 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                aria-label={s.nama}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FDB913] hover:text-[#1E5FAA] transition flex items-center justify-center text-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-blue-200">
          <div className="text-center md:text-left">
            © {tahun} <strong className="text-white">{sekolah.nama}</strong>.
            Hak cipta dilindungi.
          </div>
          <div className="text-center md:text-right">
            NPSN {sekolah.npsn} • Akreditasi {sekolah.akreditasi}
          </div>
        </div>
      </div>
    </footer>
  );
}