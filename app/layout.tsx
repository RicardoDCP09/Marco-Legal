import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
