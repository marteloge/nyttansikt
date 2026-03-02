import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nyansikt — Profesjonell nettside til norske bedrifter",
  description:
    "Vi bygger en ferdig demo av nettsiden din — før vi engang tar kontakt. Ser du potensial, setter vi den live. Ingen binding.",
  openGraph: {
    title: "Nyansikt — Nettside for norske bedrifter",
    description: "Vi bygger demoen din FØR vi tar kontakt. Se resultatet, si ja hvis du liker det.",
    url: "https://nyttansikt.no",
    siteName: "Nyansikt",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${inter.variable} ${fraunces.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
