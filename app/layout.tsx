import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-jorge-uriel.vercel.app"),
  title: {
    default: "Jorge Uriel Gorgonio — Full Stack Developer",
    template: "%s",
  },
  description:
    "Portfolio of Jorge Uriel Gorgonio Cobaxin, Full Stack Developer based in Mexico.",
  openGraph: {
    type: "website",
    siteName: "Jorge Uriel Gorgonio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Jorge Uriel Gorgonio Cobaxin — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
