import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";
import SessionProvider from "../SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM | SAAS",
  description: "The best CRM for manage your business",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
