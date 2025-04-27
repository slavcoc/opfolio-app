import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { inter, lora, raleway } from "./fonts";

export const metadata: Metadata = {
  title: "Opfolio - Инвестициски платформа",
  description:
    "Инвестициска платформа за тргување со акции и управување со портфолио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mk">
      <body
        className={`${inter.variable} ${lora.variable} ${raleway.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
