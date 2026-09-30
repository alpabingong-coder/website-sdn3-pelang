import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "SD Negeri 3 Pelang | Website Resmi",
  description:
    "Website resmi SD Negeri 3 Pelang, Kecamatan Mayong, Kabupaten Jepara. Informasi PPDB, program unggulan, galeri kegiatan, dan berita terbaru.",
  keywords: [
    "SD Negeri 3 Pelang",
    "SDN 3 Pelang",
    "sekolah dasar Jepara",
    "PPDB Jepara",
    "SD Mayong",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jakarta.variable} ${playfair.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}