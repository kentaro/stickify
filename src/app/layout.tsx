import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

import config from "@/config";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
