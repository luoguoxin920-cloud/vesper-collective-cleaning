import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VESPER COLLECTIVE LLC | Cleaning Services",
  description:
    "Residential and commercial cleaning services from VESPER COLLECTIVE LLC serving Sheridan, WY and surrounding areas.",
  keywords: [
    "cleaning services",
    "residential cleaning",
    "commercial cleaning",
    "appointment scheduling",
    "VESPER COLLECTIVE LLC",
  ],
  openGraph: {
    title: "VESPER COLLECTIVE LLC | Residential and Commercial Cleaning Services",
    description:
      "Professional cleaning services with appointment scheduling, reminders, arrival updates, and customer support.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
