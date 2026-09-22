// ============================================
// DATA SEKOLAH - SD NEGERI 3 PELANG
// Edit di sini kalau ada data yang berubah
// ============================================

export const sekolah = {
  nama: "SD Negeri 3 Pelang",
  namaSingkat: "SDN 3 Pelang",
  npsn: "20318196",
  akreditasi: "A",
  alamat: {
    jalan: "Desa Pelang RT. 03 RW. 01",
    desa: "Pelang",
    kecamatan: "Mayong",
    kabupaten: "Jepara",
    provinsi: "Jawa Tengah",
  },
  telepon: "0895-3609-62169",
  whatsapp: "62895360962169", // format internasional tanpa +
  email: "", // isi nanti
  kepalaSekolah: "Khumaida",
  tahunBerdiri: "", // isi nanti kalau tahu
};

// Menu navigasi utama
export const menu = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Program", href: "/program" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

// 4 keunggulan sekolah
export const keunggulan = [
  {
    icon: "📚",
    judul: "Pendidikan Berkualitas",
    deskripsi:
      "Kurikulum Merdeka dengan pembelajaran aktif, kreatif, dan menyenangkan untuk siswa.",
  },
  {
    icon: "🌟",
    judul: "Pengembangan Potensi",
    deskripsi:
      "Setiap anak dibimbing sesuai minat dan bakatnya sejak dini agar tumbuh optimal.",
  },
  {
    icon: "🏆",
    judul: "Program Unggulan",
    deskripsi:
      "Literasi, karakter, dan ekstrakurikuler untuk tumbuh kembang siswa yang seimbang.",
  },
  {
    icon: "🤝",
    judul: "Sinergi Orang Tua",
    deskripsi:
      "Kolaborasi sekolah dan orang tua untuk pendidikan terbaik bagi putra-putri Anda.",
  },
];

// Program unggulan (6 kotak)
export const programUnggulan = [
  {
    icon: "📖",
    judul: "Gerakan Literasi",
    deskripsi:
      "15 menit membaca sebelum pelajaran untuk menumbuhkan minat baca siswa.",
  },
  {
    icon: "🎯",
    judul: "Pendidikan Karakter",
    deskripsi:
      "Penanaman nilai Pancasila, sopan santun, dan anti-bullying sejak dini.",
  },
  {
    icon: "⚽",
    judul: "Ekstrakurikuler",
    deskripsi:
      "Pramuka, seni, olahraga, dan musik untuk mengembangkan bakat siswa.",
  },
  {
    icon: "🌏",
    judul: "Bahasa Inggris",
    deskripsi:
      "English Day dan conversation class untuk bekal global siswa.",
  },
  {
    icon: "💻",
    judul: "Komputer & Digital",
    deskripsi:
      "Dasar TIK sejak kelas 4 untuk siap menghadapi era digital.",
  },
  {
    icon: "👨‍👩‍👧",
    judul: "Parenting Education",
    deskripsi:
      "Kolaborasi sekolah dan orang tua dalam mendampingi tumbuh kembang anak.",
  },
];