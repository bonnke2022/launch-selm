import type { Metadata } from "next";
import "./globals.css";
import Favicon from "@/app/favicon.ico";

export const metadata: Metadata = {
  title: "SelmCorp",
  description: "Our website is launching today!!!",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
