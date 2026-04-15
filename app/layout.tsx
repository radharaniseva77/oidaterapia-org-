import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import OntologyWalkthrough from "@/components/OntologyWalkthrough";
import TherapyCTA from "@/components/TherapyCTA";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Oida Terapia - Psicología Perenne",
  description: "Portal de Oida Terapia y Psicología Perenne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${plusJakarta.variable} font-sans antialiased bg-arena text-indigo flex flex-col min-h-screen relative`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <TherapyCTA />
        <OntologyWalkthrough />
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
