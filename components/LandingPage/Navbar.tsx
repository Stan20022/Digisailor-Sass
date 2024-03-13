"use client";
import { menuItems } from "@/lib/constants";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isNewsToggle, setIsNewsToggle] = useState<boolean>(true);
  return (
    <nav className="sticky top-0 z-[99]">
      {isNewsToggle && (
        <div className="h-10 w-full bg-[#0C0C0C] flex justify-center items-center gap-4 text-[10px] relative">
          <div className="h-5 flex justify-center items-center bg-[#63EC33] text-black px-4 py-1 rounded-full">
            New Info
          </div>

          <div className="text-white">
            Learn about 2024 update log by{" "}
            <Link href={"/"} className="underline">
              Click here.
            </Link>
          </div>

          <div
            onClick={() => setIsNewsToggle(!isNewsToggle)}
            className="absolute top-[14px] right-5 text-white"
          >
            <FaTimes />
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="flex justify-evenly items-center bg-white p-4">
        <div>
          <Image
            src={"https://www.digisailor.com/images/logo.png"}
            alt="logo"
            height={500}
            width={500}
            className="w-24"
          />
        </div>

        <div className="flex justify-between items-center gap-8 text-sm">
          {menuItems.map((menu, menuKey) => (
            <motion.div
              initial={{ color: "#000" }}
              whileHover={{ color: "#63EC33" }}
              transition={{ ease: "linear" }}
              key={menuKey}
            >
              <Link href={menu.href}>{menu.name}</Link>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild variant="outline" className="rounded-full w-20">
            <Link href={"/sign-in"}>SigIn</Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="rounded-full text-white bg-[#63EC33] hover:bg-[#2da50d] transition-all ease-linear"
          >
            <Link href={"/sign-in"}>start the free trial 🎉</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
