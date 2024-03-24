import "../globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/LandingPage/Navbar";
import SmoothScroll from "@/components/LandingPage/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas - CRM | Digisailor",
  description:
    "Customer Relation Management Application for manage your company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
