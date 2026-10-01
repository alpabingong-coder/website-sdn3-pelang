"use client";

import Link from "next/link";
import { sekolah } from "@/lib/data";
import {
  SlideInLeft,
  SlideInRight,
  Floating,
  Counter,
  MagneticButton,
  TextReveal,
  Parallax,
} from "./Animate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Aurora Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50" />

      {/* Blob dekoratif dengan Parallax */}
      <Parallax speed={-0.3} className="absolute top-0 -left-20 w-96 h-96 pointer-events-none">
        <Floating duration={6} distance={20}>
          <div className="w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </Floating>
      </Parallax>

      <Parallax speed={-0.2} className="absolute top-20 -right-20 w-96 h-96 pointer-events-none">
        <Floating duration={7} distance={25}>
          <div className="w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </Floating>
      </Parallax>

      <Parallax speed={0.3} className="absolute -bottom-20 left-1/3 w-96 h-96 pointer-events-none">
        <Floating duration={8} distance={30}>
          <div className="w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </Floating>
      </Parallax>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1E5EFF 1px, transparent 1px), linear-gradient(90deg, #1E5EFF 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        {/* KIRI: Teks */}
        <SlideInLeft className="md:col-span-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 text-sm font-bold tracking-wide">
              PPDB 2025 / 2026 DIBUKA
            </span>
          </div>

          {/* Heading dengan TextReveal */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-slate-900">
            <TextReveal text="Mendidik Generasi" />
            <br />
            <span className="text-gradient block md:inline">
              <TextReveal text="Cerdas & Berkarakter" delay={0.5} />
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl font-medium">
            <strong className="text-slate-900">{sekolah.nama}</strong> — Sekolah
            Dasar Negeri terakreditasi{" "}
            <strong className="text-blue-600">A</strong> di Kecamatan{" "}
            {sekolah.alamat.kecamatan}, Kabupaten {sekolah.alamat.kabupaten}.
            Berdiri sejak <strong className="text-slate-900">1985</strong>, kami
            berkomitmen membentuk generasi unggul yang beriman, cerdas, dan
            berkarakter.
          </p>

          {/* Tombol dengan Magnetic Button */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <MagneticButton>
              <Link
                href="/ppdb"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Daftar PPDB Sekarang
                <span>→</span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/profil"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                Kenali Sekolah Kami
              </Link>
            </MagneticButton>
          </div>

          {/* Stats dengan Counter */}
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-slate-100">
              <div className="text-3xl font-extrabold text-gradient mb-1 font-heading">
                {sekolah.akreditasi}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Akreditasi
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-slate-100">
              <Counter
                to={12}
                duration={2}
                className="text-3xl font-extrabold text-gradient mb-1 font-heading block"
              />
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Guru & Staf
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-slate-100">
              <Counter
                to={40}
                duration={2}
                suffix="+"
                className="text-3xl font-extrabold text-gradient mb-1 font-heading block"
              />
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Tahun
              </div>
            </div>
          </div>
        </SlideInLeft>

        {/* KANAN: Kartu PPDB */}
        <SlideInRight className="md:col-span-5">
          <div className="relative">
            <Floating duration={5} distance={15} className="absolute -top-6 -right-6 w-32 h-32">
              <div className="w-full h-full bg-yellow-300 rounded-full blur-2xl opacity-60" />
            </Floating>
            <Floating duration={6} distance={12} className="absolute -bottom-6 -left-6 w-32 h-32">
              <div className="w-full h-full bg-purple-300 rounded-full blur-2xl opacity-60" />
            </Floating>

            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  SPMB 2025 / 2026
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">
                  Penerimaan Murid Baru
                </h2>
                <p className="text-sm text-slate-600 font-medium">
                  Pendaftaran dibuka sampai 30 Juni 2025
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white text-lg flex-shrink-0">
                    📅
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Pendaftaran
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      1 Juni - 30 Juni 2025
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-white text-lg flex-shrink-0">
                    👶
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Usia Minimal
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      6 tahun per 1 Juli 2025
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white text-lg flex-shrink-0">
                    💰
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Biaya Pendaftaran
                    </div>
                    <div className="text-sm font-extrabold text-green-600">
                      GRATIS
                    </div>
                  </div>
                </div>
              </div>

              <MagneticButton className="w-full">
                <Link
                  href="/ppdb"
                  className="block w-full btn-primary text-center py-4"
                >
                  Daftar Online →
                </Link>
              </MagneticButton>

              <p className="text-center text-xs text-slate-500 mt-4 font-medium">
                Info: {sekolah.telepon}
              </p>
            </div>
          </div>
        </SlideInRight>
      </div>
    </section>
  );
}