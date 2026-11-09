
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AMINODO | Plataforma Integral del Amianto",
    template: "%s | AMINODO",
  },
  description:
    "Conocimiento, profesionales y soluciones para un futuro libre de amianto.",
  applicationName: "AMINODO",

  icons: {
    icon: [
      {
        url: "/aminodo-icon-dark.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/aminodo-icon-white.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "AMINODO | Plataforma Integral del Amianto",
    description:
      "Conocimiento, profesionales y soluciones para un futuro libre de amianto.",
    type: "website",
    siteName: "AMINODO",
    locale: "es_ES",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <Analytics />
      </body>
    </html>
  );
}
