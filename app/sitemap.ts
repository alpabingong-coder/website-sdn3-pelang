import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://website-sdn3-pelang.vercel.app";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/profil", priority: 0.9 },
    { url: "/program", priority: 0.8 },
    { url: "/ppdb", priority: 1.0 },
    { url: "/kontak", priority: 0.8 },
    { url: "/galeri", priority: 0.7 },
    { url: "/artikel", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));
}