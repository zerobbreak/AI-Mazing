import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Mazing learning",
  description: "AI Learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
