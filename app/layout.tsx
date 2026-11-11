import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

const title = "PT Gayatri Abadi Sentosa (GAS) — Indonesian Spices & Coffee Exporter";
export const metadata: Metadata = {
  title,
  description: "PT Gayatri Abadi Sentosa (GAS) sources premium Indonesian dried turmeric, turmeric powder, dried ginger, ginger powder, coffee, cloves and clove stems directly for global B2B buyers. Order directly by email or ask on WhatsApp.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: { title, description: "Premium Indonesian turmeric, ginger, coffee, cloves and clove stems, sourced directly for importers, distributors and food manufacturers worldwide.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
