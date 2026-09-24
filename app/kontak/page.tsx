"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/lib/data";

export default function KontakPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1E5FAA] via-[#164a85] to-[#0f3a6b] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#FDB913] text-[#1E5FAA] text-sm font-bold px-4 py-1 rounded-full mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ada Pertanyaan? Sampaikan ke Kami
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Tim {sekolah.namaSingkat} siap membantu Anda. Hubungi kami melalui
            kontak di bawah ini.
          </p>
        </div>
      </section>

      {/* INFO KONTAK */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Alamat */}
            <div className="bg-[#F5F9FF] rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-[#1E5FAA] rounded-full flex items-center justify-center text-2xl mb-4">
                📍
              </div>
              <h3 className="font-bold text-[#1E5FAA] mb-2">Alamat</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {sekolah.alamat.jalan}
                <br />
                Desa {sekolah.alamat.desa}, Kec. {sekolah.alamat.kecamatan}
                <br />
                {sekolah.alamat.kabupaten}, {sekolah.alamat.provinsi}
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#F5F9FF] rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-[#25D366] rounded-full flex items-center justify-center text-2xl mb-4">
                💬
              </div>
              <h3 className="font-bold text-[#1E5FAA] mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-3">{sekolah.telepon}</p>
              <a
                href={`https://wa.me/${sekolah.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-semibold text-sm hover:underline"
              >
                Chat Sekarang →
              </a>
            </div>

            {/* Telepon */}
            <div className="bg-[#F5F9FF] rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-[#FDB913] rounded-full flex items-center justify-center text-2xl mb-4">
                📞
              </div>
              <h3 className="font-bold text-[#1E5FAA] mb-2">Telepon</h3>
              <p className="text-sm text-gray-600 mb-3">{sekolah.telepon}</p>
              <a
                href={`tel:${sekolah.telepon.replace(/-/g, "")}`}
                className="text-[#FDB913] font-semibold text-sm hover:underline"
              >
                Telepon →
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#F5F9FF] rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-[#E63946] rounded-full flex items-center justify-center text-2xl mb-4">
                ✉️
              </div>
              <h3 className="font-bold text-[#1E5FAA] mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-3 break-all">
                {sekolah.email || "Segera hadir"}
              </p>
              {sekolah.email && (
                <a
                  href={`mailto:${sekolah.email}`}
                  className="text-[#E63946] font-semibold text-sm hover:underline"
                >
                  Kirim Email →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FORM + PETA */}
      <section className="py-16 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E63946] font-semibold text-sm uppercase tracking-wider">
              Kirim Pesan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E5FAA] mt-2">
              Ada yang Ingin Ditanyakan?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1E5FAA] mb-2">
                Formulir Kontak
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Isi form di bawah, pesan akan dikirim ke WhatsApp sekolah.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    id="nama"
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    No. HP / WhatsApp
                  </label>
                  <input
                    id="hp"
                    type="text"
                    placeholder="08xx-xxxx-xxxx"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subjek"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA] bg-white"
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
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="pesan"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E5FAA]"
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
                      `https://wa.me/${sekolah.whatsapp}?text=${encodeURIComponent(
                        text
                      )}`,
                      "_blank"
                    );
                  }}
                  className="w-full bg-[#25D366] text-white py-3 rounded-md font-bold hover:bg-[#1da851] transition flex items-center justify-center gap-2"
                >
                  💬 Kirim via WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Pesan akan dikirim ke WA resmi sekolah
                </p>
              </div>
            </div>

            {/* Peta + Info */}
            <div className="space-y-6">
              {/* Peta */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="font-bold text-[#1E5FAA]">
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
                    className="text-[#1E5FAA] text-sm font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    🗺️ Buka di Google Maps →
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1E5FAA] mb-4 flex items-center gap-2">
                  🕐 Jam Operasional
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Senin - Kamis</span>
                    <span className="font-semibold text-[#1E5FAA]">
                      07.00 - 13.00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Jumat</span>
                    <span className="font-semibold text-[#1E5FAA]">
                      07.00 - 11.00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="font-semibold text-[#1E5FAA]">
                      07.00 - 12.00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Minggu & Hari Libur</span>
                    <span className="font-semibold text-[#E63946]">
                      Tutup
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">
                  * Jam operasional dapat berubah sesuai kegiatan sekolah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BESAR */}
      <section className="py-16 bg-gradient-to-br from-[#1E5FAA] to-[#164a85] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Jawaban Cepat?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
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
              className="bg-[#25D366] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1da851] transition inline-flex items-center justify-center gap-2 shadow-lg"
            >
              💬 Chat via WhatsApp
            </a>
            <a
              href={`tel:${sekolah.telepon.replace(/-/g, "")}`}
              className="bg-[#FDB913] text-[#1E5FAA] px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition inline-flex items-center justify-center gap-2"
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