"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useAuth } from "@/app/providers/AuthContextProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Icons
import { GoPeople } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Input } from "../ui/input";

const Topbar = () => {
  const { user } = useAuth();
  const pathname = usePathname();

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    },
  });

  return (
    <section className="h-10 flex items-center justify-between p-8">
      {pathname && (
        <div className="capitalize font-bold tracking-wide">
          {pathname.replace("/", "")}
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <div>
          <Input id="searchBar" placeholder="search..." className="w-96 p-4" />
          <label htmlFor="searchBar" className="absolute top-2 right-2 text-xl">
            <CiSearch />
          </label>
        </div>
      </div>

      {/* Notification & Profile */}
      <div className="flex justify-end items-center gap-4">
        <div>
          <IoIosNotificationsOutline className="text-2xl" />
        </div>
        {user && (
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  {user.photoURL && (
                    <AvatarImage src={user.photoURL} alt="@shadcn" />
                  )}
                  <AvatarFallback>
                    <GoPeople />
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-fit text-sm mr-10">
                <div className="flex justify-start items-center gap-4">
                  Name: {user.fullName}
                </div>
                <div className="flex justify-start items-center gap-4">
                  Role: {user.role}
                </div>
                <div className="flex justify-start items-center gap-4">
                  Email: {session?.data?.user?.email}
                </div>
                <div className="flex justify-start items-center gap-4">
                  User ID: {user.uid}
                </div>

                <div className="flex justify-center items-center">
                  <Button
                    variant="secondary"
                    onClick={() => signOut()}
                    className="mt-4"
                  >
                    Log Out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </section>
  );
};

export default Topbar;
