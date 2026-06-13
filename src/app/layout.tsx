import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capital Growth Finance | Loans, Investments & Wealth Advisory Vijayawada",
  description: "Capital Growth Finance is a premier financial services provider in Vijayawada, Andhra Pradesh. We offer personal, business, home, and vehicle loans, wealth advisory, mutual funds, SIPs, and tax planning.",
  keywords: ["Loans in Vijayawada", "Financial Advisors Vijayawada", "Business Loans Vijayawada", "Investment Planning Andhra Pradesh", "Capital Growth Finance", "Personal Loan Vijayawada"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfcfd]">
        {children}
      </body>
    </html>
  );
}

