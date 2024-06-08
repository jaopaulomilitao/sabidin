import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SabiDin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-baseBlack">{children}</body>
    </html>
  );
}
