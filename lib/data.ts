// ============================================
// DATA SEKOLAH - SD NEGERI 3 PELANG
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
  whatsapp: "62895360962169",
  email: "",
  kepalaSekolah: "Khumaida, S.Pd",
  tahunBerdiri: "1 April 1985",
};

export const menu = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Program", href: "/program" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

export const keunggulan = [
  {
    icon: "📚",
    judul: "Pendidikan Berkualitas",
    deskripsi: "Kurikulum Merdeka dengan pembelajaran aktif, kreatif, dan menyenangkan untuk siswa.",
  },
  {
    icon: "🌟",
    judul: "Pengembangan Potensi",
    deskripsi: "Setiap anak dibimbing sesuai minat dan bakatnya sejak dini agar tumbuh optimal.",
  },
  {
    icon: "🏆",
    judul: "Program Unggulan",
    deskripsi: "Literasi, karakter, dan ekstrakurikuler untuk tumbuh kembang siswa yang seimbang.",
  },
  {
    icon: "🤝",
    judul: "Sinergi Orang Tua",
    deskripsi: "Kolaborasi sekolah dan orang tua untuk pendidikan terbaik bagi putra-putri Anda.",
  },
];

export const programUnggulan = [
  { icon: "📖", judul: "Gerakan Literasi", deskripsi: "15 menit membaca sebelum pelajaran untuk menumbuhkan minat baca siswa." },
  { icon: "🎯", judul: "Pendidikan Karakter", deskripsi: "Penanaman nilai Pancasila, sopan santun, dan anti-bullying sejak dini." },
  { icon: "⚽", judul: "Ekstrakurikuler", deskripsi: "Pramuka, seni, olahraga, dan musik untuk mengembangkan bakat siswa." },
  { icon: "🌏", judul: "Bahasa Inggris", deskripsi: "English Day dan conversation class untuk bekal global siswa." },
  { icon: "💻", judul: "Komputer & Digital", deskripsi: "Dasar TIK sejak kelas 4 untuk siap menghadapi era digital." },
  { icon: "👨‍👩‍👧", judul: "Parenting Education", deskripsi: "Kolaborasi sekolah dan orang tua dalam mendampingi tumbuh kembang anak." },
];

// ============================================
// PROFIL SEKOLAH
// ============================================

export const profil = {
  tahunBerdiri: "1 April 1985",
  sejarah:
    "SD Negeri 3 Pelang berdiri pada tanggal 1 April 1985 di Desa Pelang, Kecamatan Mayong, Kabupaten Jepara. Sejak awal berdirinya, sekolah ini hadir untuk memberikan layanan pendidikan dasar bagi anak-anak di wilayah sekitar. Berkat dukungan masyarakat, pemerintah, dan tenaga pendidik yang berdedikasi, SD Negeri 3 Pelang terus berkembang menjadi salah satu sekolah dasar negeri yang dipercaya oleh warga Kecamatan Mayong.",
  visi: "Terwujudnya peserta didik yang beriman, berkarakter, berprestasi, mandiri, kreatif, dan peduli terhadap lingkungan serta mampu menghadapi perkembangan zaman.",
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
  { nama: "Khumaida, S.Pd", jabatan: "Kepala Sekolah", warna: "from-blue-600 to-blue-800", foto: "/images/guru/khumaida.jpg" },
  { nama: "Misky Dwi Apriliani, S.Pd", jabatan: "Guru Kelas 1", warna: "from-pink-500 to-pink-700", foto: "/images/guru/misky.jpg" },
  { nama: "Umroh, S.Pd", jabatan: "Guru Kelas 2", warna: "from-purple-500 to-purple-700", foto: "/images/guru/umroh.jpg" },
  { nama: "Yuni Rindyastuti, S.Pd", jabatan: "Guru Kelas 3", warna: "from-emerald-500 to-emerald-700", foto: "/images/guru/yuni.jpg" },
  { nama: "Hilman Nugroho Amirullah, S.Pd", jabatan: "Guru Kelas 4A", warna: "from-orange-500 to-orange-700", foto: "/images/guru/hilman-n.jpg" },
  { nama: "Suwarno, S.Pd", jabatan: "Guru Kelas 4B", warna: "from-red-500 to-red-700", foto: "/images/guru/suwarno.jpg" },
  { nama: "Dody Minanto Utomo, S.Pd", jabatan: "Guru Kelas 5", warna: "from-cyan-500 to-cyan-700", foto: "/images/guru/dody.jpg" },
  { nama: "Shofiatul Mahrida, S.Pd", jabatan: "Guru Kelas 6A", warna: "from-indigo-500 to-indigo-700", foto: "/images/guru/shofiatul.jpg" },
  { nama: "Iliyin Dorujatil'ulya, S.Pd", jabatan: "Guru Kelas 6B", warna: "from-rose-500 to-rose-700", foto: "/images/guru/iliyin.jpg" },
  { nama: "Ngateni, S.Pd.I", jabatan: "Guru Agama Islam", warna: "from-teal-500 to-teal-700", foto: "/images/guru/ngateni.jpg" },
  { nama: "Hilman Abdillah, S.Pd", jabatan: "Guru Olahraga", warna: "from-lime-500 to-lime-700", foto: "/images/guru/hilman-a.jpg" },
  { nama: "Kiki, S.Pd", jabatan: "Guru Bahasa Inggris", warna: "from-fuchsia-500 to-fuchsia-700", foto: "/images/guru/kiki.jpg" },
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