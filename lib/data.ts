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
// ============================================
// DATA PROFIL SEKOLAH
// ============================================

export const profil = {
  tahunBerdiri: "1 April 1985",
  sejarah:
    "SD Negeri 3 Pelang berdiri pada tanggal 1 April 1985 di Desa Pelang, Kecamatan Mayong, Kabupaten Jepara. Sejak awal berdirinya, sekolah ini hadir untuk memberikan layanan pendidikan dasar bagi anak-anak di wilayah sekitar. Berkat dukungan masyarakat, pemerintah, dan tenaga pendidik yang berdedikasi, SD Negeri 3 Pelang terus berkembang menjadi salah satu sekolah dasar negeri yang dipercaya oleh warga Kecamatan Mayong.",
  visi:
    "Terwujudnya peserta didik yang beriman, berkarakter, berprestasi, mandiri, kreatif, dan peduli terhadap lingkungan serta mampu menghadapi perkembangan zaman.",
  misi: [
    "Menanamkan dan meningkatkan keimanan serta ketakwaan kepada Tuhan Yang Maha Esa melalui pembiasaan kegiatan keagamaan dan sikap religius dalam kehidupan sehari-hari.",
    "Membentuk karakter peserta didik yang berakhlak mulia, disiplin, jujur, bertanggung jawab, santun, dan memiliki sikap gotong royong.",
    "Menyelenggarakan pembelajaran yang aktif, kreatif, inovatif, dan menyenangkan sesuai dengan kebutuhan dan perkembangan peserta didik.",
    "Meningkatkan prestasi akademik dan nonakademik melalui pengembangan potensi, bakat, dan minat setiap peserta didik.",
    "Membiasakan peserta didik untuk berpikir kritis, kreatif, mandiri, dan mampu bekerja sama dalam menyelesaikan berbagai permasalahan.",
    "Meningkatkan kemampuan literasi dan numerasi sebagai dasar untuk menghadapi tantangan pendidikan dan perkembangan ilmu pengetahuan.",
    "Memanfaatkan teknologi secara bijak dan bertanggung jawab sebagai sarana pendukung pembelajaran dan pengembangan keterampilan peserta didik.",
    "Menumbuhkan kepedulian terhadap kebersihan, kesehatan, dan kelestarian lingkungan melalui pembiasaan hidup bersih, sehat, dan ramah lingkungan.",
    "Menciptakan lingkungan sekolah yang aman, nyaman, inklusif, dan menyenangkan bagi seluruh warga sekolah.",
    "Membangun kerja sama yang harmonis antara sekolah, orang tua, masyarakat, dan berbagai pihak dalam mendukung perkembangan dan keberhasilan peserta didik.",
  ],
};

export const guru = [
  { nama: "Khumaida, S.Pd", jabatan: "Kepala Sekolah", emoji: "👨‍💼" },
  { nama: "Misky Dwi Apriliani, S.Pd", jabatan: "Guru Kelas 1", emoji: "👩‍🏫" },
  { nama: "Umroh, S.Pd", jabatan: "Guru Kelas 2", emoji: "👩‍🏫" },
  { nama: "Yuni Rindyastuti, S.Pd", jabatan: "Guru Kelas 3", emoji: "👩‍🏫" },
  { nama: "Hilman Nugroho Amirullah, S.Pd", jabatan: "Guru Kelas 4A", emoji: "👨‍🏫" },
  { nama: "Suwarno, S.Pd", jabatan: "Guru Kelas 4B", emoji: "👨‍🏫" },
  { nama: "Dody Minanto Utomo, S.Pd", jabatan: "Guru Kelas 5", emoji: "👨‍🏫" },
  { nama: "Shofiatul Mahrida, S.Pd", jabatan: "Guru Kelas 6A", emoji: "👩‍🏫" },
  { nama: "Iliyin Dorujatil'ulya, S.Pd", jabatan: "Guru Kelas 6B", emoji: "👩‍🏫" },
  { nama: "Ngateni, S.Pd.I", jabatan: "Guru Agama Islam", emoji: "📖" },
  { nama: "Hilman Abdillah, S.Pd", jabatan: "Guru Olahraga", emoji: "⚽" },
  { nama: "Kiki, S.Pd", jabatan: "Guru Bahasa Inggris", emoji: "🌏" },
];

export const fasilitas = [
  { icon: "🏫", nama: "6 Ruang Kelas", desc: "Ruang kelas yang nyaman dan bersih" },
  { icon: "📚", nama: "Perpustakaan", desc: "Koleksi buku untuk menumbuhkan minat baca" },
  { icon: "🏥", nama: "UKS", desc: "Ruang kesehatan untuk pertolongan pertama" },
  { icon: "🍽️", nama: "Kantin", desc: "Menyediakan makanan sehat untuk siswa" },
  { icon: "🕌", nama: "Mushola", desc: "Sarana ibadah bagi warga sekolah" },
  { icon: "⚽", nama: "Lapangan", desc: "Untuk olahraga dan kegiatan outdoor" },
  { icon: "🚻", nama: "Toilet", desc: "Toilet terpisah untuk guru dan siswa" },
  { icon: "🅿️", nama: "Area Parkir", desc: "Parkir aman untuk guru dan tamu" },
];