import { sekolah } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-[#1E5FAA] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-center md:text-left">
          <span>📍</span>
          <span>
            {sekolah.alamat.jalan}, Desa {sekolah.alamat.desa}, Kec.{" "}
            {sekolah.alamat.kecamatan}, {sekolah.alamat.kabupaten}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${sekolah.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FDB913] transition"
          >
            📞 {sekolah.telepon}
          </a>
        </div>
      </div>
    </div>
  );
}