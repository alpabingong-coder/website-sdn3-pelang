import { sekolah } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-[#0F2C4C] text-white/80 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="text-[#C9A961]">◆</span>
          <span className="tracking-wide">
            {sekolah.alamat.jalan}, Desa {sekolah.alamat.desa}, Kec.{" "}
            {sekolah.alamat.kecamatan}, {sekolah.alamat.kabupaten}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`https://wa.me/${sekolah.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A961] transition-colors"
          >
            +62 895-3609-62169
          </a>
          <span className="text-white/30">|</span>
          <span className="text-white/60">
            NPSN {sekolah.npsn}
          </span>
        </div>
      </div>
    </div>
  );
}