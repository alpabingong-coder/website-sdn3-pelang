"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/lib/data";

export default function PPDBPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO PPDB */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
              PPDB 2025 / 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Penerimaan Peserta Didik Baru
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {sekolah.nama} membuka pendaftaran siswa baru tahun ajaran
              2025/2026. Pendaftaran{" "}
              <strong className="text-[#FDB913]">GRATIS</strong>!
            </p>
          </div>

          {/* Info Cepat */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-bold">Pendaftaran</div>
              <div className="text-blue-100 text-sm">1 - 30 Juni 2025</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">👶</div>
              <div className="font-bold">Usia Minimal</div>
              <div className="text-blue-100 text-sm">
                6 tahun per 1 Juli 2025
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold">Biaya</div>
              <div className="text-[#FDB913] font-bold">GRATIS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ALUR PENDAFTARAN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Alur Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2">
              5 Langkah Mudah Mendaftar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                no: "1",
                icon: "📝",
                judul: "Isi Formulir",
                desc: "Isi formulir pendaftaran online atau ambil di sekolah",
              },
              {
                no: "2",
                icon: "📄",
                judul: "Lengkapi Berkas",
                desc: "Siapkan KK, Akta Lahir, Ijazah TK, dan foto 3x4",
              },
              {
                no: "3",
                icon: "🏫",
                judul: "Verifikasi",
                desc: "Datang ke sekolah untuk verifikasi berkas asli",
              },
              {
                no: "4",
                icon: "📊",
                judul: "Seleksi",
                desc: "Proses seleksi berdasarkan usia & domisili",
              },
              {
                no: "5",
                icon: "🎉",
                judul: "Pengumuman",
                desc: "Hasil seleksi diumumkan via website & WA",
              },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-[#1E5FAA] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.no}
                </div>
                <div className="text-4xl mb-2">{step.icon}</div>
                <h3 className="font-bold text-[#1E5FAA] mb-2">{step.judul}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-[#FDB913] text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYARAT & BERKAS */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Syarat */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center text-2xl">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-[#1E5FAA]">
                  Syarat Pendaftaran
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Usia minimal 6 tahun per 1 Juli 2025",
                  "Belum pernah bersekolah di SD lain",
                  "Berdomisili di wilayah Kecamatan Mayong",
                  "Sehat jasmani dan rohani",
                  "Orang tua/wali bersedia bekerja sama",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1E5FAA] font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Berkas */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1E5FAA] rounded-xl flex items-center justify-center text-2xl">
                  📄
                </div>
                <h3 className="text-2xl font-bold text-[#1E5FAA]">
                  Berkas yang Disiapkan
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Fotokopi Kartu Keluarga (KK)",
                  "Fotokopi Akta Kelahiran",
                  "Fotokopi Ijazah TK/PAUD (jika ada)",
                  "Foto berwarna 3x4 (2 lembar)",
                  "Fotokopi KTP orang tua/wali",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#E63946] font-bold mt-0.5">📎</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULIR ONLINE + DOWNLOAD */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Formulir Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2 mb-4">
              Daftar Sekarang — Pilih Cara Anda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ada 2 cara mendaftar: isi formulir online (kirim via WhatsApp),
              atau unduh formulir untuk diisi manual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Opsi 1: Formulir Online */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-4 border-[#1E5FAA]">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-[#1E5FAA] mb-2">
                Formulir Online
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Isi data langsung di sini, lalu kirim via WhatsApp. Panitia
                akan menghubungi Anda.
              </p>

              {/* Form */}
              <div className="space-y-3">
                <input
                  id="nama"
                  type="text"
                  placeholder="Nama Lengkap Calon Siswa *"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
                <input
                  id="ttl"
                  type="text"
                  placeholder="Tempat, Tanggal Lahir *"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
                <select
                  id="jenisKelamin"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA] bg-white"
                >
                  <option value="">Jenis Kelamin *</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <input
                  id="namaOrtu"
                  type="text"
                  placeholder="Nama Orang Tua / Wali *"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
                <input
                  id="alamat"
                  type="text"
                  placeholder="Alamat Lengkap (RT/RW, Desa, Kec) *"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
                <input
                  id="hp"
                  type="text"
                  placeholder="No. HP / WA Orang Tua *"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                />
                <textarea
                  id="catatan"
                  placeholder="Catatan tambahan (opsional)"
                  rows={3}
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                ></textarea>

                <button
                  onClick={() => {
                    const get = (id: string) =>
                      (
                        document.getElementById(id) as
                          | HTMLInputElement
                          | HTMLTextAreaElement
                          | HTMLSelectElement
                      )?.value || "-";

                    const pesan =
                      `*PENDAFTARAN PPDB ${sekolah.nama}*\n` +
                      `Tahun Ajaran 2025/2026\n` +
                      `---------------------------------\n` +
                      `*Nama Calon Siswa:* ${get("nama")}\n` +
                      `*Tempat, Tanggal Lahir:* ${get("ttl")}\n` +
                      `*Jenis Kelamin:* ${get("jenisKelamin")}\n` +
                      `*Nama Orang Tua/Wali:* ${get("namaOrtu")}\n` +
                      `*Alamat:* ${get("alamat")}\n` +
                      `*No. HP/WA:* ${get("hp")}\n` +
                      `*Catatan:* ${get("catatan")}\n` +
                      `---------------------------------\n` +
                      `Mohon konfirmasi pendaftaran saya. Terima kasih.`;

                    window.open(
                      `https://wa.me/${sekolah.whatsapp}?text=${encodeURIComponent(
                        pesan
                      )}`,
                      "_blank"
                    );
                  }}
                  className="w-full bg-[#25D366] text-white py-3 rounded-md font-bold hover:bg-[#1da851] transition flex items-center justify-center gap-2"
                >
                  💬 Kirim via WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Data akan dikirim ke WA sekolah: {sekolah.telepon}
                </p>
              </div>
            </div>

            {/* Opsi 2: Download Formulir */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-4 border-[#FDB913]">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-[#1E5FAA] mb-2">
                Download Formulir
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Unduh formulir dalam format PDF, isi manual di rumah, lalu
                bawa ke sekolah bersama berkas-berkasnya.
              </p>

                           {/* Preview mini */}
              <div className="bg-[#F5F9FF] rounded-lg p-4 mb-6 text-center">
                <div className="text-6xl mb-2">📋</div>
                <div className="font-bold text-[#1E5FAA]">
                  Formulir PPDB 2025/2026
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Format: PDF (1 halaman) • Ukuran: A4
                </div>
              </div>

              {/* Tombol Download PDF Langsung */}
              <a
                href="/formulir/formulir-ppdb.pdf"
                download="Formulir-PPDB-SDN3Pelang-2025.pdf"
                className="block w-full bg-[#1E5FAA] text-white text-center py-3 rounded-md font-bold hover:bg-[#164a85] transition mb-3"
              >
                📥 Download Formulir (PDF)
              </a>

              <p className="text-xs text-gray-400 text-center">
                Klik tombol di atas → file PDF langsung ter-download. Isi
                manual, lalu bawa ke sekolah.
              </p>
            </div>
          </div>

          {/* Info tambahan */}
          <div className="mt-10 bg-[#F5F9FF] rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <div className="font-bold text-[#1E5FAA] mb-1">
                  Tidak bisa akses formulir online?
                </div>
                <p className="text-sm text-gray-600">
                  Datang langsung ke sekolah pada jam kerja (07.00 - 12.00 WIB)
                  dan ambil formulir fisik di ruang panitia PPDB. Panitia siap
                  membantu Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2">
              Pertanyaan yang Sering Ditanya
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah pendaftaran di SDN 3 Pelang dikenakan biaya?",
                a: "Tidak. Pendaftaran di sekolah negeri 100% GRATIS, tidak ada biaya apapun.",
              },
              {
                q: "Bagaimana jika anak saya belum pernah TK?",
                a: "Tetap bisa mendaftar. Ijazah TK tidak wajib, tapi akan membantu proses seleksi.",
              },
              {
                q: "Kapan pengumuman hasil seleksi?",
                a: "Hasil seleksi akan diumumkan melalui website resmi sekolah dan grup WhatsApp.",
              },
              {
                q: "Apakah bisa mendaftar online?",
                a: "Ya! Isi formulir online di halaman ini, kirim via WhatsApp. Atau download formulir dan bawa ke sekolah.",
              },
              {
                q: "Apa saja ekstrakurikuler yang tersedia?",
                a: "Pramuka, seni, olahraga (sepak bola, voli), dan musik. Semua GRATIS untuk siswa.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-xl p-5 group cursor-pointer shadow-sm"
              >
                <summary className="font-bold text-[#1E5FAA] list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#FDB913] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA KONTAK */}
      <section className="py-16 bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi panitia PPDB {sekolah.namaSingkat} untuk informasi lebih
            lanjut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${sekolah.whatsapp}?text=${encodeURIComponent(
                `Assalamualaikum, saya ingin bertanya tentang PPDB ${sekolah.namaSingkat}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1da851] transition inline-flex items-center justify-center gap-2"
            >
              💬 WhatsApp Panitia
            </a>
            <a
              href={`tel:${sekolah.telepon.replace(/-/g, "")}`}
              className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition inline-flex items-center justify-center gap-2"
            >
              📞 Telepon Sekolah
            </a>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            📍 {sekolah.alamat.jalan}, Desa {sekolah.alamat.desa}, Kec.{" "}
            {sekolah.alamat.kecamatan}, {sekolah.alamat.kabupaten}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}