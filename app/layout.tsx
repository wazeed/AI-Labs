import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Labs - Innovative AI Solutions",
  description:
    "Welcome to AI Labs, where innovation meets intelligence. Discover our AI-driven applications and services.",
  keywords:
    "AI, Artificial Intelligence, Machine Learning, AI Labs, Tech, Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
