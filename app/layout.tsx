import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ScrollProgress, MouseSpotlight } from "@/components/Animate";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SD Negeri 3 Pelang | Sekolah Dasar Modern dan Berkarakter",
  description:
    "Website resmi SD Negeri 3 Pelang, Kecamatan Mayong, Kabupaten Jepara. Temukan informasi profil sekolah, program akademik, kegiatan, fasilitas, berita, dan PPDB.",
  keywords: [
    "SD Negeri 3 Pelang",
    "SDN 3 Pelang",
    "sekolah dasar Jepara",
    "PPDB Jepara",
    "SD Mayong",
  ],
  openGraph: {
    title: "SD Negeri 3 Pelang | Sekolah Dasar Modern dan Berkarakter",
    description:
      "Website resmi SD Negeri 3 Pelang. Informasi PPDB, program unggulan, galeri kegiatan, dan berita terbaru.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${nunito.variable}`}
    >
      <body className="antialiased relative">
        <ScrollProgress />
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}