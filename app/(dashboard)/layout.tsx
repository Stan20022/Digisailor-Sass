import "../globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/Dashboard/Topbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { AuthProvider } from "../providers/AuthContextProvider";

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
        <AuthProvider>
          <div className="flex justify-between w-full">
            <div>
              <Sidebar />
            </div>
            <div className="w-full">
              <Topbar />
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
