"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/lib/data";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/Animate";

async function resizeImage(file: File, maxSizeKB: number = 500): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 px-4 py-2 rounded-full mb-4 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 text-sm font-bold tracking-wide">
              PPDB 2025 / 2026 DIBUKA
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Penerimaan <span className="text-gradient">Murid Baru</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium mb-8">
            {sekolah.nama} membuka pendaftaran siswa baru tahun ajaran
            2025/2026. Pendaftaran{" "}
            <strong className="text-green-600 font-extrabold">GRATIS</strong>!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-slate-100">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-heading font-extrabold text-slate-900">
                Pendaftaran
              </div>
              <div className="text-sm text-slate-600 font-medium">
                1 - 30 Juni 2025
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-slate-100">
              <div className="text-3xl mb-2">👶</div>
              <div className="font-heading font-extrabold text-slate-900">
                Usia Minimal
              </div>
              <div className="text-sm text-slate-600 font-medium">
                6 tahun per 1 Juli 2025
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-slate-100">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-heading font-extrabold text-slate-900">
                Biaya
              </div>
              <div className="text-sm text-green-600 font-extrabold">
                GRATIS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALUR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Alur Pendaftaran
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3">
              5 Langkah <span className="text-gradient">Mudah Mendaftar</span>
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { no: "1", icon: "📝", judul: "Isi Formulir", desc: "Isi formulir pendaftaran online atau ambil di sekolah" },
              { no: "2", icon: "📄", judul: "Lengkapi Berkas", desc: "Siapkan KK, Akta Lahir, Ijazah TK, dan foto 3x4" },
              { no: "3", icon: "🏫", judul: "Verifikasi", desc: "Datang ke sekolah untuk verifikasi berkas asli" },
              { no: "4", icon: "📊", judul: "Seleksi", desc: "Proses seleksi berdasarkan usia & domisili" },
              { no: "5", icon: "🎉", judul: "Pengumuman", desc: "Hasil seleksi diumumkan via website & WA" },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl flex items-center justify-center text-2xl font-extrabold mb-4 shadow-lg font-heading">
                    {step.no}
                  </div>
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <h3 className="font-heading font-extrabold text-slate-900 mb-2">
                    {step.judul}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SYARAT & BERKAS */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeInUp>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
                    ✅
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900">
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
                      <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-slate-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                    📄
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                    Berkas Disiapkan
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
                      <span className="w-6 h-6 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        📎
                      </span>
                      <span className="text-slate-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FORMULIR ONLINE + DOWNLOAD */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Formulir Pendaftaran
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
              Daftar Sekarang —{" "}
              <span className="text-gradient">Pilih Cara Anda</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Ada 2 cara mendaftar: isi formulir online (kirim via website),
              atau unduh formulir untuk diisi manual.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulir Online */}
            <FadeInUp>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-blue-100 h-full">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">
                  Formulir Online
                </h3>
                <p className="text-slate-600 text-sm mb-6 font-medium">
                  Isi data dan upload berkas di sini. Data akan langsung
                  tersimpan ke sistem sekolah.
                </p>

                <div className="space-y-3">
                  <input
                    id="nama"
                    type="text"
                    placeholder="Nama Lengkap Calon Siswa *"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                  />
                  <input
                    id="ttl"
                    type="text"
                    placeholder="Tempat, Tanggal Lahir *"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                  />
                  <select
                    id="jenisKelamin"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 bg-white font-medium"
                  >
                    <option value="">Jenis Kelamin *</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <input
                    id="namaOrtu"
                    type="text"
                    placeholder="Nama Orang Tua / Wali *"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                  />
                  <input
                    id="alamat"
                    type="text"
                    placeholder="Alamat Lengkap *"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                  />
                  <input
                    id="hp"
                    type="text"
                    placeholder="No. HP / WA Orang Tua *"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                  />
                  <textarea
                    id="catatan"
                    placeholder="Catatan tambahan (opsional)"
                    rows={3}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                  ></textarea>

                  {/* Upload Berkas */}
                  <div className="border-t-2 border-slate-100 pt-4 mt-2">
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      📎 Upload Berkas (opsional)
                    </p>
                    <p className="text-xs text-slate-500 mb-3 font-medium">
                      Format: JPG, PNG, atau PDF. Maks 2MB.
                    </p>
                    <div className="space-y-2">
                      {[
                        { id: "fileKK", label: "Kartu Keluarga (KK)" },
                        { id: "fileAkta", label: "Akta Kelahiran" },
                        { id: "fileIjazah", label: "Ijazah TK/PAUD" },
                        { id: "fileFoto", label: "Foto 3x4" },
                      ].map((f) => (
                        <div key={f.id}>
                          <label className="text-xs text-slate-600 block mb-1 font-bold">
                            {f.label}
                          </label>
                          <input
                            id={f.id}
                            type="file"
                            accept="image/*,application/pdf"
                            className="w-full text-xs border-2 border-slate-200 rounded-xl px-2 py-1.5 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:bg-blue-500 file:text-white hover:file:bg-blue-600 font-medium"
                          />
                        </div>
                      ))}
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
                            if (file.type === "application/pdf") {
                              if (file.size > 3 * 1024 * 1024) {
                                alert(`File ${fi.label} terlalu besar. Maks 3MB.`);
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
                              try {
                                const base64 = await resizeImage(file, 500);
                                data.files.push({
                                  base64,
                                  name: `${fi.label}-${file.name.replace(/\.[^.]+$/, "")}.jpg`,
                                  type: "image/jpeg",
                                });
                              } catch (err) {
                                alert(`Gagal memproses ${fi.label}.`);
                                btn.disabled = false;
                                btn.innerHTML = originalText;
                                return;
                              }
                            }
                          }
                        }

                        const GAS_URL =
                          "https://script.google.com/macros/s/AKfycbwwQCmvIJndEoHixVkIEK1eNXmD48fG9vbj4UaIFDSBRrH94SjR6dHPM4ojWncK3iJlFg/exec";

                        await fetch(GAS_URL, {
                          method: "POST",
                          mode: "no-cors",
                          body: JSON.stringify(data),
                        });

                        alert(
                          "✅ Pendaftaran berhasil dikirim!\n\nData dan berkas Anda sudah diterima. Panitia akan menghubungi Anda via WhatsApp.\n\nTerima kasih 🙏"
                        );

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
                        alert("❌ Terjadi kesalahan. Cek koneksi internet dan coba lagi.");
                      } finally {
                        btn.disabled = false;
                        btn.innerHTML = originalText;
                      }
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-extrabold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-2 font-heading"
                  >
                    📤 Kirim Pendaftaran Online
                  </button>

                  <p className="text-xs text-slate-500 text-center font-medium">
                    Data akan tersimpan otomatis ke sistem sekolah.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Download Formulir */}
            <FadeInUp delay={0.2}>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-yellow-100 h-full">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">
                  Download Formulir
                </h3>
                <p className="text-slate-600 text-sm mb-6 font-medium">
                  Unduh formulir dalam format PDF, isi manual di rumah, lalu
                  bawa ke sekolah bersama berkas-berkasnya.
                </p>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mb-6 text-center border border-yellow-100">
                  <div className="text-6xl mb-2">📋</div>
                  <div className="font-heading font-extrabold text-slate-900">
                    Formulir PPDB 2025/2026
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    Format: PDF (1 halaman) • Ukuran: A4
                  </div>
                </div>

                <a
                  href="/formulir/formulir-ppdb.pdf"
                  download="Formulir-PPDB-SDN3Pelang-2025.pdf"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-4 rounded-xl font-extrabold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl mb-3 font-heading"
                >
                  📥 Download Formulir (PDF)
                </a>

                <p className="text-xs text-slate-500 text-center font-medium">
                  Klik tombol di atas → file PDF langsung ter-download.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
              Pertanyaan <span className="text-gradient">Umum</span>
            </h2>
          </FadeInUp>

          <StaggerContainer className="space-y-4">
            {[
              { q: "Apakah pendaftaran di SDN 3 Pelang dikenakan biaya?", a: "Tidak. Pendaftaran di sekolah negeri 100% GRATIS, tidak ada biaya apapun." },
              { q: "Bagaimana jika anak saya belum pernah TK?", a: "Tetap bisa mendaftar. Ijazah TK tidak wajib, tapi akan membantu proses seleksi." },
              { q: "Kapan pengumuman hasil seleksi?", a: "Hasil seleksi akan diumumkan melalui website resmi sekolah dan grup WhatsApp." },
              { q: "Apakah bisa mendaftar online?", a: "Ya! Isi formulir online di halaman ini, kirim via website. Atau download formulir dan bawa ke sekolah." },
              { q: "Apa saja ekstrakurikuler yang tersedia?", a: "Pramuka, seni, olahraga (sepak bola, voli), dan musik. Semua GRATIS untuk siswa." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <details className="bg-white rounded-2xl p-5 group cursor-pointer shadow-md border-2 border-slate-100 hover:border-blue-300 transition">
                  <summary className="font-heading font-extrabold text-slate-900 list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-blue-500 group-open:rotate-180 transition-transform text-xl">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-700 leading-relaxed font-medium">
                    {item.a}
                  </p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Masih Ada <span className="text-yellow-300">Pertanyaan?</span>
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto font-medium">
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
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              💬 WhatsApp Panitia
            </a>
            <a
              href={`tel:${sekolah.telepon.replace(/-/g, "")}`}
              className="bg-white/10 backdrop-blur border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              📞 Telepon Sekolah
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}