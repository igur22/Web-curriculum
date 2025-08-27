import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Òscar Simón Gámez - Fisioterapeuta y Dietista-Nutricionista",
  description: "Sitio web personal de Òscar Simón Gámez, fisioterapeuta y dietista-nutricionista. Especializado en rehabilitación, nutrición y atención sanitaria integral.",
  keywords: ["Òscar Simón", "Fisioterapeuta", "Dietista-Nutricionista", "Rehabilitación", "Nutrición", "Salud"],
  authors: [{ name: "Òscar Simón Gámez" }],
  openGraph: {
    title: "Òscar Simón Gámez - Fisioterapeuta y Dietista-Nutricionista",
    description: "Sitio web personal de Òscar Simón Gámez, fisioterapeuta y dietista-nutricionista",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Òscar Simón Gámez - Fisioterapeuta y Dietista-Nutricionista",
    description: "Sitio web personal de Òscar Simón Gámez, fisioterapeuta y dietista-nutricionista",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
