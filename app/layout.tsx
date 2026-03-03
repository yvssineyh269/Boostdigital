import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BoostDigital Comores | Agence digitale pour PME et GPME",
  description:
    "BoostDigital accompagne les entreprises et GPME aux Comores dans leur transformation numérique : création de sites web, marketing digital, visibilité en ligne et solutions adaptées au marché comorien.",
  keywords: [
    "BoostDigital",
    "agence digitale Comores",
    "marketing digital Comores",
    "création site web Comores",
    "PME Comores",
    "GPME Comores",
    "visibilité en ligne Comores",
    "transformation numérique Comores",
  ],
  openGraph: {
    title: "BoostDigital Comores | Agence digitale pour PME et GPME",
    description:
      "BoostDigital aide les entreprises et GPME aux Comores à se développer grâce au digital : sites web modernes, marketing en ligne et solutions sur mesure.",
    type: "website",
    locale: "fr_KM",
    url: "https://boostdigital.km",
    siteName: "BoostDigital Comores",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoostDigital Comores | Agence digitale pour PME et GPME",
    description:
      "Agence digitale aux Comores spécialisée pour les entreprises et GPME : sites web, marketing digital et visibilité en ligne.",
  },
  metadataBase: new URL("https://boostdigital.km"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
