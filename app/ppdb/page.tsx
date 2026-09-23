"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/lib/data";

// ============================================
// FUNGSI RESIZE GAMBAR OTOMATIS
// Mengecilkan gambar sebelum dikirim ke server
// ============================================
async function resizeImage(file: File, maxSizeKB: number = 500): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Max dimensi 1200px (cukup untuk berkas PPDB)
        const MAX_DIM = 1200;
        if (width > MAX_DIM || height > MAX_DIM) {
          if (width > height) {
            height = (height * MAX_DIM) / width;
            width = MAX_DIM;
          } else {
            width = (width * MAX_DIM) / height;
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("Canvas error");
        ctx.drawImage(img, 0, 0, width, height);

        // Kompres dengan kualitas iteratif (target < maxSizeKB)
        let quality = 0.8;
        let dataUrl = canvas.toDataURL("image/jpeg", quality);

        while (dataUrl.length / 1024 > maxSizeKB && quality > 0.3) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL("image/jpeg", quality);
        }

        resolve(dataUrl.split(",")[1]);
      };
      img.onerror = () => reject("Image load error");
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject("File read error");
    reader.readAsDataURL(file);
  });
}

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
              { no: "1", icon: "📝", judul: "Isi Formulir", desc: "Isi formulir pendaftaran online atau ambil di sekolah" },
              { no: "2", icon: "📄", judul: "Lengkapi Berkas", desc: "Siapkan KK, Akta Lahir, Ijazah TK, dan foto 3x4" },
              { no: "3", icon: "🏫", judul: "Verifikasi", desc: "Datang ke sekolah untuk verifikasi berkas asli" },
              { no: "4", icon: "📊", judul: "Seleksi", desc: "Proses seleksi berdasarkan usia & domisili" },
              { no: "5", icon: "🎉", judul: "Pengumuman", desc: "Hasil seleksi diumumkan via website & WA" },
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
              Ada 2 cara mendaftar: isi formulir online (kirim via website),
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
                Isi data dan upload berkas di sini. Data akan langsung
                tersimpan ke sistem sekolah.
              </p>

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

                {/* UPLOAD BERKAS */}
                <div className="border-t pt-4 mt-2">
                  <p className="text-sm font-semibold text-[#1E5FAA] mb-1">
                    📎 Upload Berkas (opsional)
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    Format: JPG, PNG, atau PDF. Gambar otomatis dikompres.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">
                        Kartu Keluarga (KK)
                      </label>
                      <input
                        id="fileKK"
                        type="file"
                        accept="image/*,application/pdf"
                        className="w-full text-xs border border-gray-200 rounded-md px-2 py-1.5 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:bg-[#1E5FAA] file:text-white hover:file:bg-[#164a85]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">
                        Akta Kelahiran
                      </label>
                      <input
                        id="fileAkta"
                        type="file"
                        accept="image/*,application/pdf"
                        className="w-full text-xs border border-gray-200 rounded-md px-2 py-1.5 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:bg-[#1E5FAA] file:text-white hover:file:bg-[#164a85]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">
                        Ijazah TK/PAUD (opsional)
                      </label>
                      <input
                        id="fileIjazah"
                        type="file"
                        accept="image/*,application/pdf"
                        className="w-full text-xs border border-gray-200 rounded-md px-2 py-1.5 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:bg-[#1E5FAA] file:text-white hover:file:bg-[#164a85]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">
                        Foto 3x4
                      </label>
                      <input
                        id="fileFoto"
                        type="file"
                        accept="image/*"
                        className="w-full text-xs border border-gray-200 rounded-md px-2 py-1.5 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:bg-[#1E5FAA] file:text-white hover:file:bg-[#164a85]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  id="btnKirim"
                  onClick={async () => {
                    const btn = document.getElementById("btnKirim") as HTMLButtonElement;
                    const originalText = btn.innerHTML;
                    btn.disabled = true;
                    btn.innerHTML = "⏳ Mengirim...";

                    try {
                      const get = (id: string) =>
                        (
                          document.getElementById(id) as
                            | HTMLInputElement
                            | HTMLTextAreaElement
                            | HTMLSelectElement
                        )?.value || "-";

                      const data = {
                        namaSiswa: get("nama"),
                        ttl: get("ttl"),
                        jenisKelamin: get("jenisKelamin"),
                        namaOrtu: get("namaOrtu"),
                        alamat: get("alamat"),
                        hp: get("hp"),
                        catatan: get("catatan"),
                        files: [] as { base64: string; name: string; type: string }[],
                      };

                      if (data.namaSiswa === "-" || data.hp === "-") {
                        alert("Mohon isi minimal Nama Siswa dan No. HP/WA!");
                        btn.disabled = false;
                        btn.innerHTML = originalText;
                        return;
                      }

                      const fileInputs = [
                        { id: "fileKK", label: "KK" },
                        { id: "fileAkta", label: "Akta-Kelahiran" },
                        { id: "fileIjazah", label: "Ijazah-TK" },
                        { id: "fileFoto", label: "Foto-3x4" },
                      ];

                      for (const fi of fileInputs) {
                        const input = document.getElementById(fi.id) as HTMLInputElement;
                        if (input && input.files && input.files[0]) {
                          const file = input.files[0];

                          // Kalau PDF, kirim langsung tanpa resize (maks 3MB)
                          if (file.type === "application/pdf") {
                            if (file.size > 3 * 1024 * 1024) {
                              alert(
                                `File ${fi.label} (PDF) terlalu besar. Maks 3MB.`
                              );
                              btn.disabled = false;
                              btn.innerHTML = originalText;
                              return;
                            }
                            const base64 = await new Promise<string>((resolve) => {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                resolve((reader.result as string).split(",")[1]);
                              };
                              reader.readAsDataURL(file);
                            });
                            data.files.push({
                              base64,
                              name: `${fi.label}-${file.name}`,
                              type: file.type,
                            });
                          } else {
                            // Kalau gambar, resize otomatis jadi < 500KB
                            try {
                              const base64 = await resizeImage(file, 500);
                              data.files.push({
                                base64,
                                name: `${fi.label}-${file.name.replace(/\.[^.]+$/, "")}.jpg`,
                                type: "image/jpeg",
                              });
                            } catch (err) {
                              alert(`Gagal memproses ${fi.label}. Coba file lain.`);
                              btn.disabled = false;
                              btn.innerHTML = originalText;
                              return;
                            }
                          }
                        }
                      }

                      const GAS_URL =
                        "https://script.google.com/macros/s/AKfycbwwQCmvIJndEoHixVkIEK1eNXmD48fG9vbj4UaIFDSBRrH94SjR6dHPM4ojWncK3iJlFg/exec";

                      // Kirim ke Apps Script pakai no-cors
                      await fetch(GAS_URL, {
                        method: "POST",
                        mode: "no-cors",
                        body: JSON.stringify(data),
                      });

                      alert(
                        "✅ Pendaftaran berhasil dikirim!\n\n" +
                          "Data dan berkas Anda sudah diterima. Panitia akan menghubungi Anda via WhatsApp.\n\n" +
                          "Terima kasih 🙏"
                      );

                      // Reset form
                      (document.getElementById("nama") as HTMLInputElement).value = "";
                      (document.getElementById("ttl") as HTMLInputElement).value = "";
                      (document.getElementById("jenisKelamin") as HTMLSelectElement).value = "";
                      (document.getElementById("namaOrtu") as HTMLInputElement).value = "";
                      (document.getElementById("alamat") as HTMLInputElement).value = "";
                      (document.getElementById("hp") as HTMLInputElement).value = "";
                      (document.getElementById("catatan") as HTMLTextAreaElement).value = "";
                      fileInputs.forEach((fi) => {
                        (document.getElementById(fi.id) as HTMLInputElement).value = "";
                      });
                    } catch (err) {
                      console.error(err);
                      alert(
                        "❌ Terjadi kesalahan. Cek koneksi internet dan coba lagi."
                      );
                    } finally {
                      btn.disabled = false;
                      btn.innerHTML = originalText;
                    }
                  }}
                  className="w-full bg-[#25D366] text-white py-3 rounded-md font-bold hover:bg-[#1da851] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  📤 Kirim Pendaftaran Online
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Data akan tersimpan otomatis ke sistem sekolah.
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

              <div className="bg-[#F5F9FF] rounded-lg p-4 mb-6 text-center">
                <div className="text-6xl mb-2">📋</div>
                <div className="font-bold text-[#1E5FAA]">
                  Formulir PPDB 2025/2026
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Format: PDF (1 halaman) • Ukuran: A4
                </div>
              </div>

              <a
                href="/formulir/formulir-ppdb.pdf"
                download="Formulir-PPDB-SDN3Pelang-2025.pdf"
                className="block w-full bg-[#1E5FAA] text-white text-center py-3 rounded-md font-bold hover:bg-[#164a85] transition mb-3"
              >
                📥 Download Formulir (PDF)
              </a>

              <p className="text-xs text-gray-400 text-center">
                Klik tombol di atas → file PDF langsung ter-download.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[#F5F9FF] rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <div className="font-bold text-[#1E5FAA] mb-1">
                  Tidak bisa akses formulir online?
                </div>
                <p className="text-sm text-gray-600">
                  Datang langsung ke sekolah pada jam kerja (07.00 - 12.00 WIB)
                  dan ambil formulir fisik di ruang panitia PPDB.
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
                a: "Ya! Isi formulir online di halaman ini, kirim via website. Atau download formulir dan bawa ke sekolah.",
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