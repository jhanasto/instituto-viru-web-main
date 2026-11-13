import type { Metadata } from "next";
import "./globals.css";
import "./career-detail.css";
import HomeMotion from "../components/home-motion";
import PageLoader from "../components/page-loader";

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
            history.scrollRestoration = "manual";
            if (location.hash) {
              history.replaceState(history.state, "", location.pathname + location.search);
            }
            window.addEventListener("pageshow", () => {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }, { once: true });
          }
        ` }} />
      </head>
      <body className="antialiased">
        <PageLoader />
        {children}
        <HomeMotion />
      </body>
    </html>
  );
}
