import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tu-dominio.com'), // Cambia esto cuando tengas dominio
  title: {
    default: "Fernando Aguilar | Full Stack Developer",
    template: "%s | Fernando Aguilar"
  },
  description: "Full Stack Developer especializado en React, Next.js y arquitecturas modernas. Creando experiencias digitales excepcionales.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Fernando Aguilar",
    "JavaScript",
    "Node.js",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Fernando Aguilar" }],
  creator: "Fernando Aguilar",
  openGraph: {
    title: "Fernando Aguilar | Full Stack Developer",
    description: "Full Stack Developer especializado en React, Next.js y arquitecturas modernas.",
    type: "website",
    locale: "es_MX",
    siteName: "Fernando Aguilar Portfolio",
    url: "https://my-portafolio-two-omega.vercel.app", // Cambia esto cuando tengas dominio
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Aguilar | Full Stack Developer",
    description: "Full Stack Developer especializado en React, Next.js y arquitecturas modernas.",
    creator: "@KoderGoq", // Tu usuario de Twitter si tienes
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Agregar cuando verifiques con Google Search Console
  },
  alternates: {
    canonical: "https://my-portafolio-two-omega.vercel.app", // Cambia esto cuando tengas dominio
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
