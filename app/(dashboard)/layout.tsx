import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";
import SessionProvider from "../SessionProvider";
import Sidebar from "@/components/Dashboard/Sidebar";

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
        <SessionProvider>
          <div className="flex justify-between items-center w-full">
            <div>
              <Sidebar />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
