"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/providers/AuthContextProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Icons
import { GoPeople } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Topbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userDetails, profilePicUrl, signOut } = useAuth();

  // Sign Out
  const handleSignOut = () => {
    signOut();
    router.push("/sign-in");
  };

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
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                {profilePicUrl && (
                  <AvatarImage src={profilePicUrl} alt="@shadcn" />
                )}
                <AvatarFallback>
                  <GoPeople />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-fit text-sm mr-10 p-8">
              {userDetails ? (
                <>
                  <div>
                    <p>Email: {userDetails.email}</p>
                    <p>Full Name: {userDetails.fullName}</p>
                    <p>Role: {userDetails.role}</p>
                  </div>

                  <div className="pt-4">
                    <Button onClick={handleSignOut} variant={"outline"}>
                      SignOut
                    </Button>
                  </div>
                </>
              ) : (
                <div className="font-bold">You have to login first</div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
