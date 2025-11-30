import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Next-food-app",
  description: "This is my next food app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
