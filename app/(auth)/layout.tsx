import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM | Login & Register",
  description: "Customer Relation Management Application for manage your company",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
