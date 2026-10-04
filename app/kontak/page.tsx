"use client";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/lib/data";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/Animate";

export default function KontakPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Hubungi Kami
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Ada Pertanyaan?{" "}
            <span className="text-gradient">Sampaikan ke Kami</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Tim {sekolah.namaSingkat} siap membantu Anda. Hubungi kami melalui
            kontak di bawah ini.
          </p>
        </div>
      </section>

      {/* INFO KONTAK */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Alamat */}
            <StaggerItem>
              <div className="group bg-blue-50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  📍
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 mb-2">
                  Alamat
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {sekolah.alamat.jalan}
                  <br />
                  Desa {sekolah.alamat.desa}, Kec. {sekolah.alamat.kecamatan}
                  <br />
                  {sekolah.alamat.kabupaten}, {sekolah.alamat.provinsi}
                </p>
              </div>
            </StaggerItem>

            {/* WhatsApp */}
            <StaggerItem>
              <div className="group bg-green-50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  💬
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-sm text-slate-600 mb-3 font-medium">
                  {sekolah.telepon}
                </p>
                <a
                  href={`https://wa.me/${sekolah.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-extrabold text-sm hover:underline"
                >
                  Chat Sekarang →
                </a>
              </div>
            </StaggerItem>

            {/* Telepon */}
            <StaggerItem>
              <div className="group bg-yellow-50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  📞
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 mb-2">
                  Telepon
                </h3>
                <p className="text-sm text-slate-600 mb-3 font-medium">
                  {sekolah.telepon}
                </p>
                <a
                  href={`tel:${sekolah.telepon.replace(/-/g, "")}`}
                  className="text-orange-600 font-extrabold text-sm hover:underline"
                >
                  Telepon →
                </a>
              </div>
            </StaggerItem>

            {/* Email */}
            <StaggerItem>
              <div className="group bg-purple-50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 mb-2">
                  Email
                </h3>
                <p className="text-sm text-slate-600 mb-3 font-medium break-all">
                  {sekolah.email || "Segera hadir"}
                </p>
                {sekolah.email && (
                  <a
                    href={`mailto:${sekolah.email}`}
                    className="text-purple-600 font-extrabold text-sm hover:underline"
                  >
                    Kirim Email →
                  </a>
                )}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FORM + PETA */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Kirim Pesan
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3">
              Ada yang Ingin{" "}
              <span className="text-gradient">Ditanyakan?</span>
            </h2>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <FadeInUp>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full">
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">
                  Formulir Kontak
                </h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  Isi form di bawah, pesan akan dikirim ke WhatsApp sekolah.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      id="nama"
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">
                      No. HP / WhatsApp
                    </label>
                    <input
                      id="hp"
                      type="text"
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subjek"
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 bg-white font-medium"
                    >
                      <option value="">Pilih subjek...</option>
                      <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                      <option value="Informasi PPDB">Informasi PPDB</option>
                      <option value="Kerja Sama">Kerja Sama</option>
                      <option value="Keluhan / Saran">Keluhan / Saran</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="pesan"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-medium"
                    ></textarea>
                  </div>

                  <button
                    onClick={() => {
                      const get = (id: string) =>
                        (
                          document.getElementById(id) as
                            | HTMLInputElement
                            | HTMLTextAreaElement
                            | HTMLSelectElement
                        )?.value || "-";

                      const nama = get("nama");
                      const subjek = get("subjek");
                      const pesan = get("pesan");

                      if (nama === "-" || subjek === "-" || pesan === "-") {
                        alert("Mohon isi Nama, Subjek, dan Pesan!");
                        return;
                      }

                      const text =
                        `*PESAN DARI WEBSITE ${sekolah.namaSingkat}*\n` +
                        `---------------------------------\n` +
                        `*Nama:* ${nama}\n` +
                        `*No. HP:* ${get("hp")}\n` +
                        `*Subjek:* ${subjek}\n` +
                        `---------------------------------\n` +
                        `*Pesan:*\n${pesan}`;

                      window.open(
                        `https://wa.me/${sekolah.whatsapp}?text=${encodeURIComponent(text)}`,
                        "_blank"
                      );
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-extrabold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl font-heading"
                  >
                    💬 Kirim via WhatsApp
                  </button>

                  <p className="text-xs text-slate-500 text-center font-medium">
                    Pesan akan dikirim ke WA resmi sekolah
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Peta + Jam */}
            <FadeInUp delay={0.2} className="space-y-6">
              {/* Peta */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <div className="p-4 border-b border-slate-100">
                  <h3 className="font-heading font-extrabold text-slate-900 flex items-center gap-2">
                    📍 Lokasi Sekolah
                  </h3>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d110.7!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJTIDExMMKwNDInMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi SDN 3 Pelang"
                ></iframe>
                <div className="p-4">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${sekolah.nama} ${sekolah.alamat.desa} ${sekolah.alamat.kecamatan} ${sekolah.alamat.kabupaten}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-extrabold hover:underline inline-flex items-center gap-2"
                  >
                    🗺️ Buka di Google Maps →
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
                <h3 className="font-heading font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  🕐 Jam Operasional
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { hari: "Senin - Kamis", jam: "07.00 - 13.00 WIB", tutup: false },
                    { hari: "Jumat", jam: "07.00 - 11.00 WIB", tutup: false },
                    { hari: "Sabtu", jam: "07.00 - 12.00 WIB", tutup: false },
                    { hari: "Minggu & Hari Libur", jam: "Tutup", tutup: true },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center pb-2 border-b border-slate-100 last:border-0"
                    >
                      <span className="text-slate-600 font-medium">
                        {item.hari}
                      </span>
                      <span
                        className={`font-extrabold ${
                          item.tutup ? "text-red-500" : "text-blue-600"
                        }`}
                      >
                        {item.jam}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-4 italic font-medium">
                  * Jam operasional dapat berubah sesuai kegiatan sekolah
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Butuh <span className="text-yellow-300">Jawaban Cepat?</span>
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Chat langsung dengan tim {sekolah.namaSingkat} melalui WhatsApp.
            Kami siap membantu Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${sekolah.whatsapp}?text=${encodeURIComponent(
                `Assalamualaikum, saya ingin bertanya tentang ${sekolah.namaSingkat}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              💬 Chat via WhatsApp
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