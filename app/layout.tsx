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
  title: "Fernando Aguilar | Full Stack Developer",
  description: "Full Stack Developer especializado en React, Next.js y arquitecturas modernas. Creando experiencias digitales excepcionales.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Fernando Aguilar"],
  authors: [{ name: "Fernando Aguilar" }],
  openGraph: {
    title: "Fernando Aguilar | Full Stack Developer",
    description: "Full Stack Developer especializado en React, Next.js y arquitecturas modernas.",
    type: "website",
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
