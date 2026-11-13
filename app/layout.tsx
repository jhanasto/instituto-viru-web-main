import type { Metadata } from "next";
import "./globals.css";
import "./career-detail.css";
import HomeMotion from "../components/home-motion";

export const metadata: Metadata = {
  title: "IES Tecnológico Virú | Educación superior tecnológica",
  description: "Instituto de Educación Superior Tecnológico de Virú, La Libertad, Perú.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <HomeMotion />
      </body>
    </html>
  );
}
