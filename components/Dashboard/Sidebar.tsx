"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "@/lib/constants";

// Icons
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(true);

  return (
    <div
      className={`h-screen border border-main rounded-tr-2xl transition-all ease-in-out duration-500 overflow-hidden ${
        isMenuToggle ? "w-[15rem]" : "w-[3.5rem]"
      }`}
    >
      <div>
        {/* Logo */}
        <div className="p-4 flex justify-between items-center h-14">
          {isMenuToggle ? (
            <>
              <Image
                src={"https://www.digisailor.com/images/logo.png"}
                alt="logo"
                height={500}
                width={500}
                className="w-24"
              />

              <RiArrowLeftDoubleLine
                className="hover:text-main cursor-pointer"
                onClick={() => setIsMenuToggle(false)}
              />
            </>
          ) : (
            <RiArrowRightDoubleLine
              className="hover:text-main cursor-pointer"
              onClick={() => setIsMenuToggle(true)}
            />
          )}
        </div>

        <div className="h-[1px] w-full bg-main"></div>

        {/* Menu */}
        <div className="mt-4">
          {isMenuToggle && (
            <h1 className="transition-all ease-linear duration-500 px-4 h-10 text-sm">
              MENU
            </h1>
          )}
          <div>
            {sidebarMenuItems.map((menu, menuIndex) => {
              const isActive = pathname === menu.href;
              return (
                <Link
                  key={menuIndex}
                  href={menu.href}
                  className={`flex justify-normal items-center gap-4 text-sm p-4 transition-all ease-in-out duration-500 hover:bg-main hover:text-white ${
                    isActive ? "bg-main text-white" : "bg-white text-black"
                  }`}
                >
                  <menu.icons className="text-lg" />
                  {isMenuToggle && <div>{menu.menu}</div>}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
