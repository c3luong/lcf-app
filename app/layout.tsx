import type { Metadata } from "next";
import {Roboto_Mono, Bebas_Neue} from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-roboto-mono'
});

const bebas = Bebas_Neue({ 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: "Lynn Chau Fusion",
  description: "Asian Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${bebas.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
