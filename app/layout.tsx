import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/lenis-provider";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CodeRAM C.A",
  description: "Created by CodeRAM C.A",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/Favicon.png", type: "image/png" }],
    apple: [{ url: "/Favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body suppressHydrationWarning>
        <LenisProvider>
          <ScrollProgress />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
